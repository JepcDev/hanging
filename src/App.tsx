import { useState } from 'react';
import { letters } from './helpers/letters';
import { HangImage } from './components/HangImage';

import './App.css';

function App() {

  const [word] = useState('COMPUTADORA'); //Palabra secreta, la palabra secreta es el valor inicial de useState(), estado inicial
  // Poner un guion bajo por cada letra de la palabra secreta
  const [hiddenWord] = useState('_ '.repeat(word.length));//repite (_ ) las veces de la longitud de la palabra, estado inicial de hidden word

  // Manejo de estado, necesitamos un estado para que la imagen vya cambiando cada vez que haya un intento fallido(en este caso cada intento consideramos que es un intento fallido)
  // Para el cambio de las imagenes le decimos a react que maneje el estado de la app, el estado es como se encuentra el valor de alguna variable y esa variable queremos que haga algun cambio en el html(o en el estado de la aplicaicon, pantalla ect)
  //useState() Es una funcion de react que nos ayudara con el manejo de los estados, necesita un valor inicial.
  // [attempts,setAttempts] la primer elemento es una variable que contiene el valor que le enviaremos al componente en la properti que es el numero de las imagen que queremos mostrar(segun sea el intento fallido) y el 2do elemento que una funcion que nos ayudara a cambiar el valor del 1er elemento segun sea el intento fallido
  const [attempts, setAttempts] = useState(0); //aqui estamos desestructurando un arreglo de useState() ya eso es lo que nos regresa con algunas cosas mas poreso le espeficicamos que queremos solamente el arreglo
  // attempts siempre tiene el ultimo valor guardado

  // creamos la funcion la cual incrementara el attempts cada vez que haya un intento fallido, es decir cuando haga click en un boton con una letra equivocada
  // function checkLetter(letter:string) {
  // }
  //con todo esta sintaxis Le decimos a react que cuando alguien revisa la letra llamado a la funcion setAttempts y la funcion se encarga de incrementar a attempts en 1;
  // y cuando attempts cambie react va saber que tiene que actualizar, renderizar el html con los nuevos valores y el los lugares respectivos
  const checkLetter = (letter: string)=>{
    console.log(letter);
    // setAttempts(attempts+1);
    //Math.min(attempts+1,9) el valor que va tener los intentos va ser el valor minimo entre attempts+1 y 9
    if (!word.includes(letter)) { //pregunta si no existe la letra en el array de letras(caracteres) de la palabra secreta los intentos fallidos incrementan;
      setAttempts(Math.min(attempts+1,9));
      return;
    }

  }

  return (
    <div className="card">
      {/* <h1>Hola Mundo!!</h1> */}

      {/* //DEV:COMMENT -> Imágenes */}
      {/* <h3>Imagen del juego</h3> */}
      {/* imageNumber={9} es una properti(atributo) que se especifica en el componente HangImage, esta property con indica que imagen se requiere mostrar en este caso la imagen#9 */}
      <HangImage imageNumber={attempts}/> {/*  Aqui se le envia la property que le dice que imagen(el numero de la imagen) se quiere mostrar al componente  HangImage */}

      {/* *DEV:COMMENT -> Palabra oculta */}
      {/* <h3>_ _ _ _ _ _ _ _ _ _ _ _ _ _</h3> */}
      <h3>{ hiddenWord }</h3>

      {/* *DEV:COMMENT -> Contador de intentos */}
      <h3>Intentos: {attempts} </h3>

      {/* *DEV:COMMENT -> Boton de letras */}
      {
        // es una expresion de react, todo lo que se escriba aqui se devolvera y mostrara o renderizara en la pantalla, elementos HTML
        // 'Hola Mundo'
        letters.map( (letter) => (
          <button
          onClick={()=>checkLetter(letter)}
            key={letter}>
            { letter }
          </button>
        ))
      }

    </div>
  );
};

export default App;
