// El componente App es el padre de:
// - Cabecera
// - Listado
// ESTADO: App debe manejar en su estado un número para contabilizar el total de elementos comprados.
// MÉTODOS: App debe tener un método para aumentar este número y que pueda ser ejecutado por su nieto Item.
// PROPS: App deberá pasar por props lo necesario a sus componenetes internos.

import { useState } from "react";
import { getData }  from './components/data.json'

function App() {

  const [counter, setCounter] = useState(0)

  const data = getData()

  const addCounter = () =>{
    setCounter(counter + 1)
  }

  return (
    <div className="App">
      <Cabecera Counter/>
      <Listado addCounter={addCounter} data/>
    </div>
  );
}

export default App;
