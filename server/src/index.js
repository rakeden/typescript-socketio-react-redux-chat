"use strict";
var express = require("express");
var http = require("http");
var Server = (function () {
    function Server() {
        this.port = 8008;
        this.createApp();
        this.createServer();
        this.listen();
    }
    Server.prototype.createApp = function () {
        this.app = express();
    };
    Server.prototype.createServer = function () {
        this.server = http.createServer(this.app);
    };
    Server.prototype.listen = function () {
        var _this = this;
        this.server.listen(this.port, function () {
            console.log('server listening on port %s', _this.port);
        });
    };
    return Server;
}());
var server = new Server();
module.exports = server;
