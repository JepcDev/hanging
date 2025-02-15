import { useEffect, useState } from 'react';
import { letters } from './helpers/letters';
import { HangImage } from './components/HangImage';
import { getRandomWord } from './helpers/getRandomWord';

import './App.css';

function App() {

  // Los string son considerados un arreglo de caracteres
  // const [word] = useState('COMPUTADORA'); //Palabra secreta-oculta, la palabra secreta es el valor inicial de useState(), estado inicial
  const [word, setWord] = useState(getRandomWord);//Obtenemos una palabra secreta random
  // Poner un guion bajo por cada letra de la palabra secreta
  const [hiddenWord, setHiddenWord] = useState('_ '.repeat(word.length));//repite (_ ) las veces de la longitud de la palabra, estado inicial de hidden word

  // Manejo de estado, necesitamos un estado para que la imagen vya cambiando cada vez que haya un intento fallido(en este caso cada intento consideramos que es un intento fallido)
  // Para el cambio de las imagenes le decimos a react que maneje el estado de la app, el estado es como se encuentra el valor de alguna variable y esa variable queremos que haga algun cambio en el html(o en el estado de la aplicaicon, pantalla ect)
  //useState() Es una funcion de react que nos ayudara con el manejo de los estados, necesita un valor inicial.
  // [attempts,setAttempts] la primer elemento es una variable que contiene el valor que le enviaremos al componente en la properti que es el numero de las imagen que queremos mostrar(segun sea el intento fallido) y el 2do elemento que una funcion que nos ayudara a cambiar el valor del 1er elemento segun sea el intento fallido
  const [attempts, setAttempts] = useState(0); //aqui estamos desestructurando un arreglo de useState() ya eso es lo que nos regresa con algunas cosas mas poreso le espeficicamos que queremos solamente el arreglo
  // attempts siempre tiene el ultimo valor guardado

  const [lose, setLose] = useState(false); //Manejo de estado de la persona si o perdio
  // React tiene efecto(hooks) el cual nos permite disparar acciones cuando algo sucede esta pendiende de algo y cuando ese algo cambiia  o se cumpla se puede reaccionar a eso.
  const [won, setWon] = useState(false);//Maneja el estado de la persona si gano.

  // Determinar si la persona perdio
  useEffect(()=>{
    // esta accion es deteminar si gano o perdio
    // console.log(attempts);
    if (attempts>=9) {//determina si la persona perdio, si los intentos son 9 o mas , cambiamos el estado de setLose
      setLose(true);
    }
    // Se acciona cada vez que attemps cambien
  },[attempts]); //Hooks tiene una funcion interna que vamos a ejecutar cada vez que algo suceda

  // Determinar si la persona ganó, se recomienda tener efectos con tareas espeficicas
  useEffect(()=>{
    //console.log(hiddenWord);//_ _ _ _ _ _ split quita los espacios entre los guiones
    // si el hiddemWord es = a (word) significa que la persona gano
    const currentHiddenWord = hiddenWord.split(' ').join(' ');//El split quita los espacion y crea un nuevo arreglo el cual es unido mediante la funcion join con un string vacio
    if (currentHiddenWord === word) {//verifica si la palabra de hiddemWord es igual a la word la palabra secreta.y  si es asi eso significa que la persona gano
      setWon(true);
    }

  },[hiddenWord]);//tenemos que que estar pendiente de hiddemWord para saber si la persona hace algo y ejecutar la condicion para saber si la perosona gano

  // creamos la funcion la cual incrementara el attempts cada vez que haya un intento fallido, es decir cuando haga click en un boton con una letra equivocada
  // function checkLetter(letter:string) {
  // }
  //con todo esta sintaxis Le decimos a react que cuando alguien revisa la letra llamado a la funcion setAttempts y la funcion se encarga de incrementar a attempts en 1;
  // y cuando attempts cambie react va saber que tiene que actualizar, renderizar el html con los nuevos valores y el los lugares respectivos
  const checkLetter = (letter: string)=>{
    if (lose) return;//si lose=true(perdimos) ya no se ejecuta lo demas del codigo
    if (won) return;//si won=true(ganamos) ya no se ejecuta lo demas del codigo
    // console.log(letter);
    // setAttempts(attempts+1);
    //Math.min(attempts+1,9) el valor que va tener los intentos va ser el valor minimo entre attempts+1 y 9
    if (!word.includes(letter)) { //pregunta si no existe===true, la letra en el array de letras(caracteres) de la palabra secreta los intentos fallidos incrementan;
      setAttempts(Math.min(attempts+1,9));
      return;
    }
    // si ejecuto desde aqui el codigo quiere decir que la letra existe
    const hiddenWordArray = hiddenWord.split(' ');//tomamos hiddemWord y cortamos separamos las letras por un espacio y se crea un nuevo arreglo.
    // console.log(hiddenWordArray);

    for (let index = 0; index < word.length; index++) { //recorremos cada una de las letras de la palabra -> "word" que es un array
      // console.log(word[index]);//imprime cada letra de word;
      if (word[index]===letter) {//comparamos si las letras de la palabra oculta o secreta es igual a la letra que presionamos en la pantalla del juego.
        // aqui hacemos el reemplazo de la posicion respectiva en el (hidden word). con la posicion de la letra que si existe en la palabra(word) que tenemos aqui.
        // El word y el hiddemWord tienen el mismo tamaño, largo = a la letra letter que estoy reciviendo
        hiddenWordArray[index]=letter;//El hiddemWord en la posicion index se reempla por la letra correcta que estamos recimiendo al presionar o elegir en el juego. es decir reemplazamos "_" en una posicion por alguna letra correcta que elegimos en el juego y que si existe en la palabra oculta(word)
      }
    }
    // console.log(hiddenWordArray.join(' '));
    setHiddenWord(hiddenWordArray.join(' '));//procedimiento opuesto del split -> join , las letras se unen por un espacion, setHiddenWord cambia el valor de hiddemWord por el valor de hiddenWordArray y la union de las letra por un espacio.
  }

  const newGame = ()=>{
    // console.log('new Game');
    const newWord = getRandomWord();

    setWord(newWord);
    setHiddenWord('_ '.repeat(newWord.length));
    setAttempts(0);
    setLose(false);
    setWon(false);
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

      {/* DEV:COMMENT -> Mensaje si la persona perdio el juego  */}
      {
        (lose)
          ? <h2>Perdió {word}</h2>
          : ''
      }

      {/* DEV:COMMENT -> Mensaje si la persona gano el juego  */}
      {
        (won)
          ? <h2>Felicidades, usted ganó</h2>
          : ''
      }

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
      <br />
      {/*  */}
      <button onClick={()=>newGame()} >¿Nuevo juego?</button>{/*  //reinicia el juego*/}
      {/* <button onClick={newGame} >¿Nuevo juego?</button> //si no tiene o no necesita argumentosla funcion se puede enviar la funcion como referencia */}

    </div>
  );
};

export default App;
