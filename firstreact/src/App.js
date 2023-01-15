import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import {Dashboard, Register, Error, Landing} from './pages';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Dashboard/>}></Route>
          <Route path='/landing' element={<Landing/>}></Route>
          <Route path='/register' element={<Register/>}></Route>
          <Route path='*' element={<Error/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;