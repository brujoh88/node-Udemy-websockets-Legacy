const btnEnviar = document.querySelector('#btnEnviar')
const lblOffline = document.querySelector('#lblOffline')
const lblOnline = document.querySelector('#lblOnline')
const txtMensaje = document.querySelector('#txtMensaje')

const socket = io()


socket.on('connect',()=>{
    
    lblOffline.style.display = 'none'
    lblOnline.style.display = ''

})

socket.on('disconnect',()=>{    
    lblOffline.style.display = ''
    lblOnline.style.display = 'none'
})

socket.on('aleta-desde-server',(payload)=>{    
    console.log(payload);
})

btnEnviar.addEventListener('click', ()=>{
    const mensaje = txtMensaje.value
    const payload = {
        mensaje,
        id: '123asd',
        fecha: new Date().getTime()
    }
    socket.emit('enviar-mensaje', payload, (id)=>{
        console.log('Desde el Server' ,id);
    })
})