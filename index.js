//1.Import packages
import express from 'express'
import http from 'http'
import {Server} from 'socket.io'


//2. Create Instances & make server
const app = express()
const server=http.createServer(app)
const io = new Server(server)
//3. Serve Static Files
app.use(express.static('public'))

//4. Create Connection
//4. Create Connection
io.on('connection', (socket) => {
    console.log('User Connected Successfully');

    socket.on('chat message', ({ msg, user }) => {
        io.emit('chat message', { msg, user });
    });

    socket.on('disconnect', () => {
        console.log('User Disconnected');
    });
});


//5. Run Server

server.listen(3000, ()=> console.log(`listening on port 3000`))