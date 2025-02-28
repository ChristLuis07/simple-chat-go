package main

import (
	"fmt"
	"log"
	"net/http"
	"github.com/gorilla/websocket"
)

var clients = make(map[*websocket.Conn]bool)
var broadcast = make(chan Message)
var upgrader = websocket.Upgrader{
	CheckOrigin: func(r *http.Request) bool { return true },
}

type Message struct {
	Username string `json:"username"`
	Text     string `json:"text"`
}

func handleConnections(w http.ResponseWriter, r *http.Request) {
	conn, err := upgrader.Upgrade(w, r, nil)
	if err != nil {
		log.Fatal("WebSocket Upgrade Failed:", err)
	}
	defer conn.Close()
	clients[conn] = true

	for {
		var msg Message
		err := conn.ReadJSON(&msg)
		if err != nil {
			delete(clients, conn)
			break
		}
		broadcast <- msg
	}
}

func handleMessages() {
	for {
		msg := <-broadcast
		for client := range clients {
			err := client.WriteJSON(msg)
			if err != nil {
				client.Close()
				delete(clients, client)
			}
		}
	}
}

func main() {
    fs := http.FileServer(http.Dir("./frontend"))
    http.Handle("/", fs)

    http.HandleFunc("/ws", handleConnections)
    go handleMessages()

    fmt.Println("Server started on :8080")
    log.Fatal(http.ListenAndServe(":8080", nil))
}