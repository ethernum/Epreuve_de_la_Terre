const args = process.argv;
const divise = Number(args[2]);
const diviseur = Number(args[3]);
let reste = 0;
let result = 0;

reste = divise % diviseur;
result = Math.floor(divise/diviseur);

if (isNaN(reste)){
    console.log("** erreur **")
}else{
    console.log("résultat : ", result);
    console.log("reste : ", reste);
    
}
