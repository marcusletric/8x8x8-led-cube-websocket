# 8x8x8-led-cube-websocket
<img width="649" alt="Screenshot 2023-03-14 124939" src="https://user-images.githubusercontent.com/15047501/225006002-2608e5da-5cc4-4992-9f50-d5551537b49a.png">
A little POC for controlling 8x8x8 Led cube with javascript over web sockets.

To run:
 `npm install`
 `npm start`

Nodejs project running on raspberry pi. 
The raspberry runs a static http server, a websocket server and controls a Geekreit 8x8x8 LED cube over UART.

index.html: Webscoket client, able to control the led cube by sending binary data
index.js: Node.js server, it implements the websocket and UART connection
