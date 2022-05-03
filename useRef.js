import React, {useEffect, useState, useRef} from 'react'

function App() {

  // сохранzть что-то между рендерами - сам не вызывает рендеринг
  const [value, setValue] = useState('initial');
  const renderCount = useRef(1);

  useEffect(() => {
    renderCount.current++;
  })

   //можно получать ссылки на дом-элементы
  const inputRef = useRef(null);
  //то есть здесь inputRef = ссылке на инпут
  const focus = () => inputRef.current.focus();


  //можно следить за предыдущим значением
  const prevValue = useRef(null);
  useEffect(() => {
    prevValue.current = value
  }, [value])

  return (
    <div >
      <h1>Render count: {renderCount.current}</h1>
      <h2>Last value: {prevValue.current}</h2>
      <input type='text' onChange={e => setValue(e.target.value)} value={value}/>

      {/* аттрибут ref помогает взять ссылку на этот объект */}
      <input ref={inputRef} type='text' onChange={e => setValue(e.target.value)} value={value}/>
      <button onClick={focus}>Focus</button>
    </div>
  );
}

export default App;
