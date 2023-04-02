const args = process.argv;
const nombre = (args[2]);
const puissance = (args[3]);
if (isNaN(nombre) || isNaN(puissance)){
    console.log("je ne peux pas faire l'opération ce ne sont pas des chiffres")
}else{
    console.log(nombre ** puissance);
}