import { letters } from './helpers/letters';
import './App.css';

function App() {

  return (
    <div className="card">
      {/* <h1>Hola Mundo!!</h1> */}

      {/* //DEV:COMMENT -> Imágenes */}
      <h3>Imagen del juego</h3>

      {/* *DEV:COMMENT -> Palabra oculta */}
      <h3>_ _ _ _ _ _ _ _ _ _ _ _ _ _</h3>

      {/* *DEV:COMMENT -> Contador de intentos */}
      <h3>Intentos: 0</h3>

      {/* *DEV:COMMENT -> Boton de letras */}
      {
        // es una expresion de react, todo lo que se escriba aqui se devolvera y mostrara o renderizara en la pantalla, elementos HTML
        // 'Hola Mundo'
        letters.map( (letter) => (
          <button
            key={letter}>
            { letter }
          </button>
        ))
      }

    </div>
  );
};

export default App;
