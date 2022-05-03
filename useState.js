import React, {useState} from 'react'

function App() {
  /* const counterState = useState(0);

  state
  console.log(counterState[0]); = 0

  функция, изменяющая state
  console.log(counterState[1]); */

  //чаще используют деструктуризацию
  const [counter, setCounter] = useState(0);

  /* если изначально значение state высчитывается, то чтобы избежать нескольких вызовов лучше использовать не useState(calculateInitialState()), а callback функцию внутри
  const [counter1, setCounter1] = useState(() => {
    return calculateInitialState()
  }); */

  function increment() {
    setCounter(counter + 1);
  }

  /* на основании предыдущего состояния стейта - best practice
  function increment1() {
    setCounter((prevCounter) => {
      return prevCounter + 1
    })
    та же запись, но сокращенно
    setCounter (prev => prev + 1)
  }*/

  function decrement() {
    setCounter(counter - 1);
  }

  //работа с объектами
  const [objState, setObjState] = useState({
    title: 'My-title',
    data: Date.now(),
  })

  function updateObjState(){
    setObjState((prev) => {
      return {
        // формируем новый объект основываясь на предыдущем состоянии
        ...prev,
        title: 'New title',
      }
    })
  }

  return (
    <div >
      <h1>Счетчик: {counter}</h1>
      <button onClick={increment}>Добавить</button>
      <button onClick={decrement}>Убрать</button>

      {/* если передавать новый объект, то он замещается полностью */}
      {/* <button onClick={() => setObjState({title: 'New title'})}>Change title</button> */}
      {/* чтобы такого не происходило нужно забирать предыдущее состояние */}
      <button onClick={updateObjState}>Change State</button>
      <pre>{JSON.stringify(objState, null, 2)}</pre>
    </div>
  );
}

export default App;
