import './App.css'
import Random from './Components/Random'
import Tag from './Components/Tag'

function App() {

  return (
    <div className='app_container'>
      <h1 className='heading'>RANDOM GIFS</h1>
      <div className='comp_container'>
        <Random/>
        <Tag/>
      </div>
    </div>
  )
}

export default App
