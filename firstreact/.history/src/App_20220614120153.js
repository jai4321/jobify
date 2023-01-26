import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import {Dashboard, Register, Error, Landing} from './pages';

function App() {
  return (
    <div>
      
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<div>Home Page</div>}></Route>
          <Route path='/landing' element={<Landing/>}></Route>
          <Route path='/register' element={<div>Register Page</div>}></Route>
          <Route path='*' element={<div>Error Page</div>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;