const args = process.argv;
const nombre = (args[2]);

if (isNaN(nombre)){
    console.log("je ne peux pas faire l'opération ce ne sont pas des chiffres")
}else{
    console.log(Math.sqrt(nombre));
}