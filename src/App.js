import './App.css';
import Home from './Home';
import { Route, Routes } from 'react-router-dom';
import SearchPage from './searchPage';
import About from './about';
import Contact from './contact';


function App() {
  return (
     <div className="App">
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/search' element={<SearchPage></SearchPage>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
      </Routes>
       
     </div>

  )
}

export default App;
