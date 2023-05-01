import './App.css'
// import {useFetch} from './useFetch'
import { Suspense } from 'react';
import {fetchData} from './fetchData'

const URL_USUARIOS = 'https://jsonplaceholder.typicode.com/users';
const apiData = fetchData(URL_USUARIOS);

function App() {
  const data = apiData.read()

  // const {data, loading, error, handleCancelRequest} = useFetch(URL_USUARIOS);

  return (
    <>
    {/* <div>
      Listado de usuarios
      <button onClick={() => handleCancelRequest()}>Cancel request</button>
      <ul>
        {error && <li>{error}</li>}
        {loading && <li>Loading...</li>}
        {data?.map( u => <li key={u.id}>
          {u.username}
        </li>) }
      </ul>
    </div> */}
      <h1>Fetch like a Pro</h1>
      <Suspense fallback={<div>Loading...</div>}> {/*<Suspense> te permite mostrar una interfaz alternativa o fallback hasta que sus hijos hayan terminado de cargar. */}
        <ul>
          {data?.map((item) => (
            <li key={item.id}>{item.username}</li>
          ))}
        </ul>
      </Suspense>
    </>
  )
}

export default App
