//Selecciono los elementos
let borrar=document.getElementById('btn-borrar');
let resumen=document.getElementById('btn-resumen');
let nombre=document.getElementById('nombre');
let apellido=document.getElementById('apellido');
let mail=document.getElementById('mail');
let cantidad=document.getElementById('cantidad');
let categoria=document.getElementById('categoria');
let total=document.getElementById('total');
const valorTicket=200;


//Agrego el evento click al btn borrar
borrar.addEventListener('click',() =>{

    nombre.value='';
    apellido.value='';
    mail.value='';
    cantidad.value='';
    categoria.selectedIndex=0;
    total.innerText='';

})

//Agrego el evento click al btn resumen
resumen.addEventListener('click',()=>{

    if(validacionDeCamposRequeridos([nombre,apellido,mail,cantidad]) && validacionNumeroPositivo(cantidad)){

        let importe= calcularTotal(cantidad.value,categoria.value);

        modificarTexto('total',importe);

    }
    // else{
    //     alert('Algo no andubo bien');
    // }


})

//---------funciones-------------
function calcularTotal(cant,cat){
    let desc, descTot=0, sinDesc=Number(cant)*valorTicket;

    if(cat==='estudiante')
        desc=80;
    
    if(cat==='trainee')
        desc=50;

    if(cat==='junior')
        desc=15;

    descTot= desc * sinDesc /100;

    return sinDesc - descTot;

}


function modificarTexto(id,textNuevo){
    document.getElementById(id).innerText = textNuevo;
}

function validacionDeCamposRequeridos(campos){

    //Si alguno de los campos están vacios se los agrega a una lista
    for(let valor of campos){
        if(valor.value===''){
            total.innerText='';
            alert('Todos los campos son requeridos');
            return false;
        }
    }

    return true;

}

function validacionNumeroPositivo(campo){
    
    if(Number(campo.value)>0){
        return true
    }else{
        total.innerText='';
        alert('El campo cantidad debe ser mayor a 0');
        return false;
    }
}
