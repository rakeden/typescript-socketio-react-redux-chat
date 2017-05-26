import * as express from "express";
import * as path from "path";
import * as http from "http";

class Server {
    private server: any;
    public app: any;
    private io: any;
    private port = 8008;

    constructor() {
        this.createApp();
        this.createServer();
        this.listen();
    }

    private createApp(): void {
        this.app = express();
    }

    private createServer(): void {
        this.server = http.createServer(this.app);
    }

    private listen(): void {
        this.server.listen(this.port, () => {
            console.log('server listening on port %s', this.port);
        })
    }

}

let server = new Server();
export = server;