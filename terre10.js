const args = process.argv;
const nombre = (args[2]);
let isPrime = false

estPremier = nombre =>{
    if (isNaN(nombre)){
        console.log("C'est pas un nombre mon reuf!");
    }else{
        if (nombre === 1  || nombre === 0 ){
            console.log(nombre, " n'est pas un nombre premier !")
        }else{
            for (let i = 2; i< nombre; i++){
                if (nombre % i == 0){
                    isPrime = true;
                    break
                }
            }
            if (isPrime){ console.log(nombre, " est premier")}
            else { console.log(nombre, " n'est pas premier")}
        }
    }
}

estPremier(nombre)