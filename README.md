# 8x8x8-led-cube-websocket
A little POC for controlling 8x8x8 Led cube with javascript over web sockets.

To run:
 `npm install`
 `npm start`

Nodejs project running on raspberry pi. 
The raspberry runs a static http server, a websocket server and controls a Geekreit 8x8x8 LED cube over UART.

index.html: Webscoket client, able to control the led cube by sending binary data
index.js: Node.js server, it implements the websocket and UART connection
