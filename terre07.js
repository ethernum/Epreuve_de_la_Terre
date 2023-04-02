const args = process.argv.splice(2, process.argv.length - 1).join(" ")

let isnum = /^\d+$/.test(args);

const tailleDeChaine = string =>{
    if (!isnum){
        let taille = 0;
        for (i = 0; i<=string.length -1; i++){
            taille++
        }
        console.log("La chaine suivante : ", " |'", string, "'| ", " vaut ", String(taille), " caracteres.")
    }else{
        console.log("c'est un nombre ça !")
    }
}

tailleDeChaine(args);