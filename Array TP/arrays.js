function cargarComision (numerodeComision) {
    const comision =[];
    let cantidad_de_alumnos = parseInt(prompt(`Ingresar la cantidad de alumnos en la comision ${numerodeComision}: `))

    let i =1;
    while(i<=cantidad_de_alumnos){
        let apellido = prompt('Ingrese el apellido del alumno: ');
        let nota = parseInt(prompt(`Ingrese la nota de ${apellido}: `));
        let faltas = parseInt(prompt(`Ingrese la cantidad de faltas de ${apellido}: `));
        const nuevo_alumno ={ 
            apellido: apellido, 
            nota: nota, 
            faltas: faltas 
        };        
        comision.push(nuevo_alumno);
        i++;
    }
    console.log('===========');
    console.log(`Comision ${numerodeComision}`);
    console.log(`La cantidad de Alumnos de la Comisión ${numerodeComision} es: ${cantidad_de_alumnos}`);
    console.log('Y son los siguientes:');
    console.table(comision);
    console.log('===========');
    return comision;
}

let comision1 = cargarComision(1);
let comision2 = cargarComision(2);

let suma_notas=0;
let promedio = 0;


for(let n=0; n<comision1.length; n++){
    suma_notas= suma_notas + comision1[n].nota;
};

promedio = suma_notas / comision1.length;
console.log(`El promedio de notas de las comisiones es: ${promedio}`)

console.log('===========');
const aprobados = comision1.filter(n=> n.nota>=7);
const aprobados2 = comision2.filter(n=> n.nota>=7);
console.log('Los alumnos aprobados son:');
console.table(aprobados);
console.table(aprobados2);

console.log('===========');
const libres = comision1.filter(l=> l.faltas>=6);
console.log('Los alumnos libres son:');
console.table(libres);

function promedioComision(comision){
    let suma = 0;
    for(let i=0; i<comision.length; i++){
        suma += comision[i].nota;
    }
    return suma / comision.length;
}

let prom1 = promedioComision(comision1);
let prom2 = promedioComision(comision2);

console.log("Promedio comisión 1:", prom1);
console.log("Promedio comisión 2:", prom2);

if(prom1 > prom2){
    console.log("La comisión 1 tiene mejor promedio");
} else if(prom2 > prom1){
    console.log("La comisión 2 tiene mejor promedio");
} else {
    console.log("Ambas comisiones tienen el mismo promedio");
}

let todas = [...comision1, ...comision2];
console.table(todas);