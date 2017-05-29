import * as express from "express";
import * as path from "path";
import * as http from "http";
import * as socketIo from "socket.io";

interface Message {
    from: string;
    text: string;
}

class Server {

    public app: any;
    private server: any;
    private port: number;
    private io: any;

    constructor() {
        this.port = 8008;
        this.createApp();
        this.createServer();
        this.createSocket();
        this.listen();
    }

    private createApp(): void {
        this.app = express();
    }

    private createServer(): void {
        this.server = http.createServer(this.app);
    }

    private createSocket(): void {
        this.io = socketIo(this.server);
    }

    private listen(): void {
        this.server.listen(this.port, () => {
            console.log('server listening on port %s', this.port);
        })
        this.io.on('connect', (socket: any) => {
            console.log('Connected client on port %s.', this.port)

            socket.on('action', (action: any) => {
                switch (action.type) {
                case "SEND_MESSAGE":
                    this.io.emit('GET_MESSAGE', action.data);    
                }
            });

            socket.on('disconnect', () => {
                console.log('Client disconnected');
            })
        })
    }

}

let server = new Server();
export = server;