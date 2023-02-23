// import { Outlet } from 'react-router-dom'
import './App.css'
import BottomMenu from './components/Menu/BottomMenu'
import { GiphyFetch } from '@giphy/js-fetch-api'
import { Grid } from '@giphy/react-components'
import Home from './components/Home'
import TopMenu from './components/Menu/TopMenu'

function App() {
  

  return (
    <div className="App">
      {/* <Outlet /> */}
     
      <TopMenu />
      <Home />
     <BottomMenu />
    </div>
  )
}

export default App