
import './App.css'
import Navbar from './components/Navbar'
import Travel from './components/Travel'
import locations from './locations'

function App() {

  const location = locations.map((tour) => {
    return (
      <Travel 
        {...tour}
      />
    )
  })

  return (
    <div className="App">
      <Navbar />
      {location}
    </div>
  )
}

export default App
