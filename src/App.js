import './App.css';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import {LoginPage,SignupPage,HomePage} from "./Routes.js";
function App() {
  return(
    <BrowserRouter>
      <Routes>
      <Route path='/' element={<HomePage/>}/>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/sign-up' element={<SignupPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
