import './App.css';
import Home from './Pages/home';
import Connect from './Pages/Connect';
import Programs from './Pages/Programs';
import Resources from './Pages/Resources';
import About from './Pages/About';
import Login from './Pages/LoginIn';
import SignUp from './Pages/SignUp';
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
        <Route path='/ComputerScience' element={<Subject />} />
        <Route path='/Biology' element={<Subject />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/SignUp' element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  </div>
}

export default App;
