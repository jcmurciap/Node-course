const empleados = [
    {
        id:1,
        nombre:"Juan"
    },
    {
        id:2,
        nombre:"Camilo"
    },
    {
        id:3,
        nombre:"Sergio"
    }
];

const salarios = [
    {
        id: 1,
        salario: 1000,
    },
    {
        id: 2,
        salario: 2000,
    },
    {
        id: 3,
        salario: 3000,
    }
];

const getEmpleado = (id:number, callback:Function) => {
    const employee = empleados.find(e => e.id === id);
    if(employee){
        callback(null, employee);
    }else{
        callback(`Empleado con el id ${id} no existe`);
    }
}

const getSalario = (id:number, callback:Function) => {
    const salario = salarios.find(sal => sal.id === id);
    if(salario){
        callback(null, salario)
    }else{
        callback(`Empleado con salario con id ${id} no existe`);
    }
}

getSalario(1, (err:any, empleado:any) => {
    if(err){
        console.log('ERROR');
        return console.log(empleado);
    }
    console.log('Salario existe');
    console.log(empleado.salario);
})

getEmpleado(1, (empleado:any, err:any) => {
    if(err){
        console.log('ERROR');
        return console.log(empleado)
    }
    console.log('Empleado existe');
    console.log(err);
})