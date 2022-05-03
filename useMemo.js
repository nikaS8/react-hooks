import React, {useState, useMemo, useEffect} from 'react'

function complexCompute(number){
  let i = 0;
  while(i < 100000000) i++
  return number * 2
}

function App() {
  const [number, setNumber] = useState(42);
  const [colored, setColor] = useState(false);

  //complexCompute будет вызываться только при изменении number, а не при каждом рендеринге
  const computed = useMemo(() => {
    return complexCompute(number)
  }, [number])

  //при изменении объектов, чтобы каждый раз не рендерить объект даже если он не меняется (для джс объект в новом рендеринге != объект из старого рендеринга)
  //The 'styles' object makes the dependencies of useEffect Hook (at line 25) change on every render. To fix this, wrap the initialization of 'styles' in its own useMemo() Hook
  const styles = useMemo(() => ({
    color: colored ? 'darkred' : 'black'
  }), [colored])

  useEffect(() => {
    console.log('Styles changed');
  }, [styles]);


  return (
    <div >
      <h1 style={styles}>Вычисляемое значение: {computed}</h1>
      <button onClick={() => setNumber(prev => prev + 1)}>Add</button>
      <button onClick={() => setNumber(prev => prev - 1)}>Decrease</button>
      <button onClick={() => setColor(prev => !prev)}>Change color</button>
    </div>
  );
}

export default App;
