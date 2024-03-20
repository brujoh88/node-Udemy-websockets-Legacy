const btnEnviar = document.querySelector('#btnEnviar')
const lblOffline = document.querySelector('#lblOffline')
const lblOnline = document.querySelector('#lblOnline')
const txtMensaje = document.querySelector('#txtMensaje')

const socket = io()


socket.on('connect',()=>{
    console.log('Conectado');
    lblOffline.style.display = 'none'
    lblOnline.style.display = ''

})

socket.on('disconnect',()=>{
    console.log('Desconectado del servidor');
    lblOffline.style.display = ''
    lblOnline.style.display = 'none'
})

btnEnviar.addEventListener('click', ()=>{
    const mensaje = txtMensaje.value
    const payload = {
        mensaje,
        id: '123asd',
        fecha: new Date().getTime()
    }
    socket.emit('enviar-mensaje', payload)
})