/*let tab =[5,4,45,18,3,456,489,2]
console.log(tab.sort((a,b) => {
    return a-b;
}))
let eleve =[

    {
        nom:"stephane",
        moyenne:04,
    },
    {
        nom:"gabi",
        moyenne:02,
    },
    {
        nom:"Gogor",
        moyenne:20,

    },
    {
        nom:"Gigi",
        moyenne:17,
    }

]
console.log(eleve.sort((a,b)=>{
    a= a.nom.toLowerCase();
    b= b.nom.toLowerCase();
  

    if(a>b){return 1}
if(a<b){return -1}
if(a=b){return  0/*a.moyenne -b.moyenne*//* }

    

}))
let eleva =["anita","meyon","gilbert","Franck","Stephane"]
console.log(eleva.sort((a,b)  => {
a= a.toLowerCase();
b=b.toLowerCase();
if(a>b){return 1}
if(a<b){return -1}
if(a=b){return 0 }

}))*/

//exercices sur le palindrome

/*function palindrome(string){
    
    let striming = string.toLowerCase()
    //let str =striming.split('').reverse().join('')
    
    if(striming.split('').reverse()===striming.join("")){
        console.log(`${striming} est un palindrome`)
    }
    else{

        console.log(`${striming} n'est  pas un palindrome`)

    }
    
}
palindrome("salut")
palindrome("Kayak")
palindrome("242")*/

///trouver le mot le plus long d'une phrase 

/*function longMax(string){

    let mots = string.split(' ')
    console.log(mots)
    let motMax = 0;
    for(let i = 0; i<mots.length; i++){

        if(mots[i].length>motMax ){

             motMax =mots[i].length 
        }

    }
    return motMax;
}
console.log(longMax("le mot le plus est deja gigantesque"))*/

///programmation fonctionnelle

const x =[5,7,2,10,12,4,41,18,54,101]
 /*
 //const c = []

 /*for(let i=0;i<x.length;i++){
    if(x[i] % 2===0){
        c.push(x[i])
    }
 }
 console.log(c)*/
  /*x.forEach((element)=>{

    if(element % 2===0){
        c.push(element)
    }
  })
  console.log(c)*/
 /*const a = x.filter((element)=>{
    return element %2 ===0
 })
 console.log(a)

const y= x.map((element)=>{
   return element*2 +3
 })
 console.log(y)
 const d =y.reduce((previous,current)=>previous+current,0)
 console.log(d)*/

 //les fonctions pures

 /*function somme(a,b){
    return a+b
 }
 console.log(somme(3,5))
 //function qui prend un nombre entier en minutes et le convertit en seconde
  
 function convertion(a){
    return a*60
 }
 console.log(convertion(20))
 //function qui prend un nombre en argument incremente le nombre de 1 et renvoie le resultat
 function incremente(b){
    return b +1;
 }
 console.log(incremente(7))
 // function qui trouve la surface d'un triangle

 function surface(b,h){

    return b*h/2
 }
 console.log(parseInt(surface(5,5)))
 //programme pour inverser une chaine de caractere
   function inverse(string){
    return string.split('').reverse().join('')
    //console.log(c)
   }
   console.log(inverse("aminata"))
   //programme qui permet de trouver le plus de trois entier donnée

   function plusGrandEntier(n,m,t){
    if(n>m&& n>t){
        return n
    }
    else if(m>n && m>t){
        return m
    }
    else{
        return t
    }
   }
   console.log(plusGrandEntier(2,5,3))
   //function qui prend un tableau et renvoie le premier element

   function tableau(tab){
    //tab=[]
    return tab[0]
   }
   console.log(( tableau[2,3,4,5]))

   const unsortedArray = [2020, 1998, 2018, 1986, 2006]
   unsortedArray.sort((a,b)=>{
    return a-b;
   })
   console.log(unsortedArray)

   var arrTwo=["Hello 1 "," Hello 2 ","Hello 1 " , " Hello 2 ","Hello 1 again"]

const filteredArray = arrTwo.filter((element,a)=>{
    return arrTwo.indexOf(element) == a;

})
    
 

console.log("The filtered array ",filteredArray);

/**
 * 
 * 
 *  ${recipe.ingredients.map((ingredient)=>{

                                    
                                        let quantity = ingredient.quantity?? "";

                                        let unit = ingredient.unit?? "";

                                        return   `<span>${ingredient.ingredient}: ${quantity}${unit}</span>`;

                                    }).join("")}
 */

                                    document.querySelector("#search").addEventListener("input",(event)=>{

                                        user =event.target.value

                                        const y = c.filter((recipe)=>{
                                          if(recipe.includes(user)=== true){
                                          return console.log(recipe)// recipe
                                          }
                                        })
                                        return console.log(y) //y */
                                        
                                        
                                        })