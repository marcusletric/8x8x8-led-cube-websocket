Object.defineProperty(Array.prototype, 'flat', {
    value: function(depth = 1) {
      return this.reduce(function (flat, toFlatten) {
        return flat.concat((Array.isArray(toFlatten) && (depth>1)) ? toFlatten.flat(depth-1) : toFlatten);
      }, []);
    }
});


// Port where we'll run the websocket server
var webSocketsServerPort = 1337;
// Optional. You will see this name in eg. 'ps' or 'top' command process.title = 'node-chat'; // Port where we'll run the websocket server var webSocketsServerPort = 1337; // websocket and http servers var
var webSocketServer = require('websocket').server;
var http = require('http');
var SerialPort = require('serialport');
var port = new SerialPort('/dev/serial0', {baudRate: 9600,databits: 8,
    parity: 'none' });



//Clock code
running = false
frameInterval = 72
frame=Array.from({length:8}).map(array => Array.from({length:8},x=>0))
var cubeMatrix = Array.from({length: 8},(item) => item = Array.from({length: 8},(item) => item = Array.from({length: 8},() => 0)))
    const numbers = [[
      [1,1,1,1,1],
      [1,0,0,0,1],
      [1,1,1,1,1]
    ],[
      [0,0,0,0,0],
      [1,1,1,1,1],
      [0,0,0,0,0]
    ],[
      [1,0,1,1,1],
      [1,0,1,0,1],
      [1,1,1,0,1]
    ],[
      [1,0,1,0,1],
      [1,0,1,0,1],
      [1,1,1,1,1]
    ],[
      [1,1,1,0,0],
      [0,0,1,0,0],
      [1,1,1,1,1]
    ],[
      [1,1,1,0,1],
      [1,0,1,0,1],
      [1,0,1,1,1]
    ],[
      [1,1,1,1,1],
      [1,0,1,0,1],
      [1,0,1,1,1]
    ],[
      [1,0,0,1,1],
      [1,0,1,0,0],
      [1,1,0,0,0]
    ],[
      [1,1,1,1,1],
      [1,0,1,0,1],
      [1,1,1,1,1]
    ],[
      [1,1,1,0,1],
      [1,0,1,0,1],
      [1,1,1,1,1]
    ]]

function sendFrame(frameData) {
  port.write(Uint8Array.from([0xF2, ...frameData]))
}

function step() {
  //if (progress % 5000 < 1000) {
    frame=Array.from({length:8}).map(array => Array.from({length:8},x=>0))
    renderFrame();
    sendFrame(frame.flat(1))
  //}
    //console.log('requesting frame')
     running && setTimeout(() => step(),frameInterval);

}
const plotNumber = (canvas, number, space=true) => {
  space?canvas.push(...[...numbers[number], Array.from({length:5}, () => 0)]):canvas.push(...numbers[number])
}

const projectCanvas = (canvas, cubeMatrix) => {
  for(i=0; i<28; i++){
    for(j=0;j<6;j++){0
      z = i < 8 ? i : i < 15 ? 7 : i < 22 ? (7 - ((i+1)%8) )-1: 0
      x = i < 8 ? 0 : i < 15 ? (i+1) % 8 : i < 22 ? 7 : 7-((i+3)%8)
      y = j

      //console.log(`x:${x}`,`y:${y}`,`z:${z}`,`i:${i}`)

      cubeMatrix[x][y][z]=canvas[i]?canvas[i][5-j]:0
    }
  }
}

const bitArrayToByte = bitArray => bitArray.reduce((acc,bit,index)=>acc & bit?2**index:0,0)

const cubeMatrixToFrame = matrix => {
    for(y=0;y<8;y++) {
      for(z=0;z<8;z++){
        frame[7-y][7-z] = 0 | matrix[0][y][z] << 7 | matrix[1][y][z] << 6 | matrix[2][y][z] << 5 | matrix[3][y][z] << 4 | matrix[4][y][z] << 3 | matrix[5][y][z] << 2 | matrix[6][y][z] << 1 | matrix[7][y][z]
      }
    }
}
var flag = false
var flag2 = false
var renderFrame = () => {
const canvas = []
const now = new Date()
const hours = now.getHours().toString().padStart(2, '0')
const seconds = now.getSeconds().toString().padStart(2, '0')
const minutes = now.getMinutes().toString().padStart(2, '0')
const millis = now.getMilliseconds()
const timestring = hours + minutes + seconds

cubeMatrix = Array.from({length: 8},(item) => item = Array.from({length: 8},(item) => item = Array.from({length: 8},() => 0)))

timestring.split('').map((number, index) => plotNumber(canvas,parseInt(number),index%2===0))
//console.log(timestring)


  if(millis > 500) {
    flag2 = false
    y = parseInt(((millis-500)/500)*8)
    width = parseInt((((millis-500)/500)*2.2)+0.8)
    breadth = parseInt((((millis-500)/500)*2.2)+0.8)
    for(x=4-width; x<4+width; x++){
      for(z=4-breadth; z<4+breadth; z++){
        cubeMatrix[x][flag?y:7-y][z] = z===4-breadth || z===3+breadth || x===4-width || x===3+width?1:0
      }
    }
  } else {
    if(!flag2){
      flag = !flag
      flag2 = true
    }
    width = parseInt(((1-(millis/500))*2))+1
    breadth = parseInt(((1-(millis/500))*2))+1
    for(x=4-width; x<4+width; x++){
      for(z=4-breadth; z<4+breadth; z++){
        progress = parseInt((1-(millis/500))*8)
        cubeMatrix[x][flag?0:7][z] = ((z===4-breadth || z===3+breadth || x===4-width || x===3+width)&&((x<progress||z<progress)))?1:0
        cubeMatrix[x][flag?0:6][z] = ((z===3 || z===4 || x===3 || x===4)&&((x<8-progress||z<8-progress)))?1:0
      }
    }
  }
projectCanvas(canvas, cubeMatrix)

cubeMatrixToFrame(cubeMatrix)
}
running=true
step()
/**
 * Global variables
 */
// latest 100 messages
var history = [ ];
// list of currently connected clients (users)
var clients = [ ];
/**
 * Helper function for escaping input strings
 */
function htmlEntities(str) {
  return String(str)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;')
      .replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}
// Array with some colors
var colors = [ 'red', 'green', 'blue', 'magenta', 'purple', 'plum', 'orange' ];
// ... in random order
colors.sort(function(a,b) { return Math.random() > 0.5; } );
/**
 * HTTP server
 */
var server = http.createServer(function(request, response) {
  // Not important for us. We're writing WebSocket server,
  // not HTTP server
});
server.listen(webSocketsServerPort, function() {
  console.log((new Date()) + " Server is listening on port "
      + webSocketsServerPort);
});
/**
 * WebSocket server
 */
var wsServer = new webSocketServer({
  // WebSocket server is tied to a HTTP server. WebSocket
  // request is just an enhanced HTTP request. For more info
  // http://tools.ietf.org/html/rfc6455#page-6
  httpServer: server
});
// This callback function is called every time someone
// tries to connect to the WebSocket server

wsServer.on('request', function(request) {
  console.log((new Date()) + ' Connection from origin '
      + request.origin + '.');
  // accept connection - you should check 'request.origin' to
  // make sure that client is connecting from your website
  // (http://en.wikipedia.org/wiki/Same_origin_policy)
  var connection = request.accept(null, request.origin);
  // we need to know client index to remove them on 'close' event
  var index = clients.push(connection) - 1;
  var userName = false;
  var userColor = false;
  console.log((new Date()) + ' Connection accepted.');
  // send back chat history
  if (history.length > 0) {
    connection.sendUTF(
        JSON.stringify({ type: 'history', data: history} ));
  }
  // user sent some message
  connection.on('message', function(message) {
  //  if (message.type === 'utf8') { // accept only text
    // first message sent by user is their name
    // if (userName === false) {
        // remember user name
      //  userName = htmlEntities(message.utf8Data);
        // get random color and send it back to the user
       // userColor = colors.shift();
       // connection.sendUTF(
       //     JSON.stringify({ type:'color', data: userColor }));
       // console.log((new Date()) + ' User is known as: ' + userName
       //             + ' with ' + userColor + ' color.');
      ///} else { // log and broadcast the message
        /*console.log((new Date()) + ' Received Message from '
                    + userName + ': ' + message.utf8Data);
 	console.log(JSON.stringify(message));
	function text2Binary(string) {
	    return string.replace(/\s/g,'').split(',').map(function (char) {
        	return char;
    	}).join('');*/
        //flag = !flag
	//console.log(JSON.stringify(message,2));
	//let buff = message && message.binaryData && message.binaryData.data ? [...message.binaryData.data.map(v => v)] : []
	//console.log(buff)
  running = false
	port.write(message.binaryData, function(err) {
  	    if (err) {
    	   	return console.log('Error on write: ', err.message)
  		}
  	    //console.log('message written')
	})

        // we want to keep history of all sent messages
/*        var obj = {
          time: (new Date()).getTime(),
          text: htmlEntities(message.utf8Data),
          author: userName,
          color: userColor
        };
        history.push(obj);
        history = history.slice(-100);
        // broadcast message to all connected clients
        var json = JSON.stringify({ type:'message', data: obj });
        for (var i=0; i < clients.length; i++) {
          clients[i].sendUTF(json);
        }*/
//      }
  });
  // user disconnected
  connection.on('close', function(connection) {
    if (userName !== false && userColor !== false) {
      console.log((new Date()) + " Peer "
          + connection.remoteAddress + " disconnected.");
      // remove user from the list of connected clients
      clients.splice(index, 1);
      // push back user's color to be reused by another user
      colors.push(userColor);
      running=true
      step();
    }
  });
});
