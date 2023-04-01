const args = process.argv;
const monArgument = Number(args[2]);
if(typeof monArgument == 'number' && !isNaN(monArgument)){
        console.log(monArgument)
        if( monArgument%2 == 0){
            console.log("Pair")
        }else{
            console.log("Impair")
        }
}else{
    console.log("c'est pas un nombre")
}
