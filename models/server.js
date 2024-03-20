const express = require('express')
const cors = require('cors')
class Server {
    constructor(){
    this.app = express()
    this.port = process.env.PORT
    this.server = require('http').createServer(this.app)
    this.io = require('socket.io')(this.server)
    this.path = {}    

        //Middlewares
    this.middlewares()

    this.routes()        

    //Sockets
    this.sockets()
    }

    middlewares(){
        //CORS
        this.app.use(cors())        

        //Directorio publico
        this.app.use(express.static('public'))
        
    }

    routes(){
        //this.app.use(this.path.auth,require('../routes/auth.routes'))
    }

    sockets(){
        this.io.on('connection', socket =>{
            console.log('Cliente conectado ', socket.id);
            socket.on('disconnect',()=>{
                console.log('Cliente desconectado ', socket.id);
            })
            socket.on('enviar-mensaje',(payload)=>{
                console.log(payload);
            })
        })
    }

    listen(){
        this.server.listen(this.port,()=>{console.log(`Servidor corriendo en el puerto ${this.port}`);})
    }
}


module.exports = Server