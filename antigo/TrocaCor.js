function TrocaCor(color) {
    const cores = [{colorName:"Azul",colorCode:'#255F85'},{colorName:"Amarelo",colorCode:'#FFC857'},{colorName:"Marrom",colorCode:'#481D24'}]
    
    let cor = cores.find(iColor => iColor.colorName === color)

    if(!cor) {
        if(cor === "carro"){
            alert("VRUMMMMMMMMMMMMMMMMMMMMMMMMMMMMM")
        }else{
            alert("COR INVÁLIDA")
        }
        
    }
    
    const change1 = document.getElementById("1")
    const change2 = document.getElementById("2")
    const change3 = document.getElementById("3")
    const change4 = document.getElementById("4")
    change1.style.backgroundColor = cor.colorCode
    change2.style.backgroundColor = cor.colorCode
    change3.style.backgroundColor = cor.colorCode
    change4.style.backgroundColor = cor.colorCode

    
    
    
}
let disco = 1000

while (disco < 5000) {
  disco += 100;

  console.log("Delayed for  seconds." + discos);
}
// let disco = 10
// for(disco; disco > 0; disco--) {
//     setTimeout(() => {
//         console.log("Delayed for 2 seconds.")
//     }, 2000)
//     disco -= 1
// }
