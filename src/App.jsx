import './App.css'  //se le dice que importe el css para esta App y tiene el mismo nombre
import { TwitterFollowCard } from './TwitterFollowCard.jsx' //importe funcion TwitterFollowCard de archivo jsx del mismo nombre
//export se utiliza para que la funcion sea utilizada desde otros modulos, en este caso desde main.jsx
export function App(){ 
    //const formatUserName = (userName) => `@${userName}`  //funcion que recibe parametro userName y que devuelve @userName
    //const formatUserName = (userName) => `@${userName}`
    return(
        /* en vez de  <React.Fragment></React.Fragment>  se agrega <> sin embargo en este caso 
        luego de utilizar <> se utilizo la etiqueta section para ponerle la clase css .App que se encuentra
        dentro de index.css con el fin de especificar ahi el formato general ya que luego en 
        si se pasa un parametro booleano sin asignacion se reconoce como verdadero 
        si no se pasa queda como indefinido 
        se llama luego a la funcion TwitterFollowCard y se le envían los parámetros
        */
        <section className="App">  
        <TwitterFollowCard isFollowing userName="midudev">
         Miguel Angel Duran
         </TwitterFollowCard>
        <TwitterFollowCard isFollowing={false} userName="pheralb">
         Pablo Hernandez
         </TwitterFollowCard>
        </section>
    )

}