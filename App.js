import React, {useState, useEffect} from 'react'

/* создание своего хука логгера
function useLogger(value) {
  useEffect(() => {
    console.log('Value changed: ', value)
  }, [value])
}

function App() {
  const [name, setName] = useState('');
  
  const changeHandler = event => {
    setName(event.target.value)
  }
  
  useLogger(name)

  return (
    <div >
      <input type="text" value={name} onChange={changeHandler}></input>
      <hr></hr>
      <h1>{name}</h1>
    </div>
  );
}

export default App; */

function useInput(initialValue){
  const [value, setValue] = useState(initialValue);

  const onChange = event => {
    setValue(event.target.value)
  }

  //возврат объекта value и функции onChange
  return {
    value, onChange
  }
}

function useLogger(value) {
  useEffect(() => {
    console.log('Value changed: ', value)
  }, [value])
}

function App() {
  const input = useInput('');
  const lastName = useInput('')

  useLogger(input.value);

  return (
    <div >
      <input type="text" value={input.value} onChange={input.onChange}></input>
      {/* если ключи названы также, как и параметры тэга инпут, то можно использовать синтаксис реакта:
      <input type={...input}></input> */}
      {/* + этого кода в уникальности */}
      <input type='text' {...lastName} />
      <hr></hr>
      <h1>{input.value}</h1>
      <h1>{lastName.value}</h1>
    </div>
  );
}

export default App;