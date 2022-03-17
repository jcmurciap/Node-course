const emplead = [
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

const salari = [
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

const getEmplead = (id:number) => {
    
    return new Promise((resolve, reject) => {
        const employee = emplead.find(e => e.id === id)?.nombre;
        
        (employee)
            ?resolve(employee)
            :reject(`Empleado con el id ${id} no existe`)  
    })
}

const getSalari = (id:number) => {
    return new Promise((resolve, reject) => {
        const salario = salari.find(s => s.id === id)?.salario;
        (salario)
            ?resolve(salario)
            :reject(`Salario con el id ${id} no existe`);
    })
}

const getInfoUsuario = async(id:number) => {
    try {
        const empleado = await getEmplead(id);
        const salario = await getSalari(id)
        return `El salario es ${salario} del empleado ${empleado}`;
    }catch (error){
        return error
    }
}

const my_id = 10;
getInfoUsuario(my_id)
    .then(msg => console.log(msg))
    .catch(err => console.log(err));