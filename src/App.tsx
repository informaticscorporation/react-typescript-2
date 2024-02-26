import { createContext, useState } from "react";
import { ButtonDecrement } from "./components/Btndecrement";
import { Container } from "./components/Container";
import { ButtonIncrement } from "./components/Btnincrement";


export const Context = createContext({
   counter:0,
   onIncrement: () => {}, 
   onDecrement: () => {}
  }); 


function App() {
  const [counter, setCounter] = useState(0)
  
  function onIncrement() {
    setCounter(counter +1)
  }

  function onDecrement() {
    setCounter(counter -1)
  }

 

  return ( <Context.Provider value={{
    counter,
    onIncrement,
    onDecrement
  
  
   }} >
    <ButtonDecrement  />
    <Container/>
    <ButtonIncrement />
    </Context.Provider>
  );
}



export default App;
