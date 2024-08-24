import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'

import About from './Pages/About'
import Add from './Pages/Add'
import Edit from './Pages/Edit'
import Error from './Pages/Error'
import Home from './Pages/Home'
import Index from './Pages/Index'
import Show from './Pages/Show'

import NavBar from './Components/NavBar'

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <main>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/allbegonias' element={<Index />} />
            <Route path='/begonias/add' element={<Add />} />
            <Route path='/begonias/:id' element={<Show />} />
            <Route path='/begonias/:id/edit' element={<Edit />} />
            <Route path='*' element={<Error />} />
          </Routes>
        </main>
      </Router>
      {/* <h1>Welcome to Rex Begonia Galore!</h1> */}
    </div>
  )
}

export default App;

/*
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/index' element={<Index />} />
            <Route path='/add' element={<Add />} />
            <Route path='/show/:id' element={<Show />} />
            <Route path='/edit/:id' element={<Edit />} />
            <Route path='*' element={<Error />} />

*/