const getUserById = (id:Number, callback:Function):void => {
    const user = {
        id,
        nombre: 'Juan',
    }
    setTimeout(() => {
        callback(user)
    }, 1500);
}

getUserById(10, (parameter:any) => {
    console.log(parameter.id);
    console.log(parameter.nombre);
});