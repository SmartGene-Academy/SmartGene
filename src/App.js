import './App.css';
import Home from './Pages/home';
import Connect from './Pages/Connect';
import Programs from './Pages/Programs';
import Resources from './Pages/Resources';
import About from './Pages/About';
import Math from './Pages/Math'
import English from './Pages/English'
import Biology from './Pages/Biology'
import CS from './Pages/CS'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Subject from './Pages/Subject';


function App() {
  return <div>
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/Connect' element={<Connect />} />
        <Route path='/Resources' element={<Resources />} />
        <Route path='/About' element={<About />} />
        <Route path='/English' element={<Subject />} />
        <Route path='/Math' element={<Subject />} />
        <Route path='/CS' element={<Subject />} />
        <Route path='/Biology' element={<Subject />} />
      </Routes>
    </BrowserRouter>
  </div>
}

export default App;
