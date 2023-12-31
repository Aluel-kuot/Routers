import logo from './logo.svg';
import './App.css';
import Login from './Login';
import Products from './Products';
import NavBar from './navBar';
import ProductDetails from './ProductDetails';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import AddProduct from './AddProduct';

function App() {
  return (
    <div >
      <NavBar/>
      <BrowserRouter>
      <Routes>
        <Route index element={<Login/>}></Route>
        <Route path='/LogIn' element={<Login/>}></Route>
        <Route path='/Products' element={<Products/>}></Route>
        <Route path='/ProductDetails' element={<ProductDetails/>}></Route>
        <Route path='/AddProduct' element={<AddProduct/>}></Route>


      </Routes>
      </BrowserRouter>
    
    </div>
  );
}
export default App;
