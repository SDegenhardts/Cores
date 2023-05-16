import Image from 'next/image'
import Header from './components/header'


export default function Home(){

  function TrocaCor(){
    const cores = [{colorName:"Azul",colorCode:'#255F85'},{colorName:"Amarelo",colorCode:'#FFC857'},{colorName:"Marrom",colorCode:'#481D24'}]
    let cor = cores.find(iColor => iColor.colorName)

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
  }
 
  return(
    <div>
      <main className="container">
        <div className="quadrados">
            <div id="1" className="menores"></div>
            <div id="2" className="menores"></div>
            <div id="3" className="menores"></div>
            <div id="4" className="menores"></div>
        </div>
        <div>  
            <div className="footer">
                <div className="coluna">

                    <div>
                        <div className="button-borders">
                            <input id="cor" type="text"/>
                            {/* <button onClick={() => TrocaCor()} className="buttons">Trocar</button> */}
                        </div>
                    </div>
                    {/* <!-- <div className="button-borders">
                        <button onclick="TrocaCor('#255F85')" className="buttons">Lapis Lazuli</button>
                        <button onclick="TrocaCor('#FFC857')" className="buttons">Sunglow</button>
                        <button onclick="TrocaCor('#481D24')" className="buttons">Chocolate</button>
                    </div> --> */}
                </div>
            </div>
        </div>
    </main>
    </div>
  )
  
}