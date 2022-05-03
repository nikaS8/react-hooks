import React, {useEffect, useState} from 'react'

function App() {
  const [type, setType] = useState('users');
  const [data, setData] = useState([]);

  // вызывается при изменении состояния [type]
  //нужен для определенных side эффектов - наблюдаем за чем-то, оно меняется, выполняется логика
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${type}`)
      .then(responce => responce.json())
      .then(json => setData(json))
  }, [type]);

  //отслеживание координат мышки
  const [pos, setPos] = useState({
    x: 0, y: 0
  });

  const mouseMoveHandler = event => {
    setPos({
      x: event.clientX,
      y: event.clientY,
    })
  }

  useEffect(() => {
    console.log('ComponentDidMount');

    /* Listener нужно удалять, чтобы это сделать нужно вынести в отдельную функцию
    window.addEventListener('mousemove', event => {
      setPos({
        x: event.clientX,
        y: event.clientY,
      })
    }) */
    window.addEventListener("mousemove", mouseMoveHandler)
    return () => {
      window.removeEventListener('mousemove', mouseMoveHandler)
    }
  }, [])


  return (
    <div >
      <h1>Ресурс: {type}</h1>
      <button onClick={() => setType('users')}>Users</button>
      <button onClick={() => setType('todos')}>Todo</button>
      <button onClick={() => setType('posts')}>Posts</button>

      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
      <pre>{JSON.stringify(pos, null, 2)}</pre>
    </div>
  );
}

export default App;
