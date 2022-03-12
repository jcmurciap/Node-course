const empleadoss = [
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

const salarioss = [
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

const getEmpleadoo = (id:number) => {
    
    return new Promise((resolve, reject) => {
        const employee = empleadoss.find(e => e.id === id)?.nombre;
        
        (employee)
            ?resolve(employee)
            :reject(`Empleado con el id ${id} no existe`)  
    })
}

const getSalarioo = (id:number) => {
    return new Promise((resolve, reject) => {
        const salario = salarioss.find(s => s.id === id)?.salario;
        (salario)
            ?resolve(salario)
            :reject(`Salario con el id ${id} no existe`);
    })
}

const id = 3;
// getEmpleadoo(id)
//     .then(empleado => console.log(empleado)) // si la promesa es procesada
//     .catch(err => console.log(err));         // manejo de errores

// getSalarioo(id)
//     .then(salario => console.log(salario))
//     .catch(err => console.log(err));

let nombree:any;
getEmpleadoo(id)
    .then(empleado => {
        nombree = empleado;
        return getSalarioo(id) //siemore debe llevar return para que tome el resultado
    })
    .then(salario => console.log('El empleado',nombree, 'tiene un salario de',salario))
    .catch(err => console.log(err));
