import { useState } from 'react'
import Header from './components/Header'
import Main from './components/Main'
import Error from './components/Error'

/* 
  For this project, do responsiveness with flexbox. 
  For CinemaSpotter, use grid instead! 

  Also, you can use the Promises functions (then, catch and finally) 
  to get responses of the API you're currently using, instead of 
  async/await (try, catch and also finally as well). Use the 
  latter for CinemaSpotter!
*/

function App() {
  const [state, setState] = useState("");

  function searchInput(e) {
    const { value } = e.target;

    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${value}`)
      .then(response => response.json())
      .then(request => {
        const { title, message, resolution } = request;

        ((title && message) && resolution) && console.warn(title + "\n\n" + message + "\n\n" + resolution);

        // console.log(request[0])
        
        setState(request);
      })
  }

  return (
    <>
      <Header handleChange={searchInput} />
      {state[0] ? <Main data={state} /> : <Error data={state} />}
    </>
  )
}

export default App