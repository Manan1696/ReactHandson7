import Home from './Components/Home';
import Student from './Components/Student';
import Contactus from './Components/Contactus';
import Navbar from './Components/Navbar';
import { HashRouter,Routes,Route } from 'react-router-dom';

import './App.css';


function App() {
  return (
        <HashRouter>
   <Navbar/>
    <Routes>
      <Route path='/Home' element={<Home/>}/>
      <Route path='/Student' element={<Student/>}/>
      <Route path='/Contactus' element={<Contactus/>}/>
    </Routes>
   </HashRouter>

  
    
    
  );
}

export default App;
