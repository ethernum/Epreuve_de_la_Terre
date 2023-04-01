const args = process.argv.splice(2, process.argv.length - 1).join(" ")
const chaine = String(args)


const reverseChaine = chaine => {
    if (typeof(chaine) == 'string' && chaine != ""){
        let newChaine = ""
        for (let i = chaine.length - 1; i >= 0; i--){
            newChaine += chaine[i]
        }
        console.log("Vieille chaine : ", chaine, "\nNouvelle Chaine : ", newChaine)
    }else{
        console.log("Chaine Vide nulos !")
    }
}


reverseChaine(chaine)