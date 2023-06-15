import './App.css';

import {BrowserRouter, Routes, Route} from 'react-router-dom'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//Components 
import NavBar from './NavBar/NavBar';
import ItemListContainer from './ItemListContainer/ItemListContainer';
import ItemDetailContainer from './ItemDetailContainer/ItemDetailContainer';
import Checkout from './Checkout/Checkout';
import Cart from './Cart/Cart';

import {createProd} from '../firebase/firebase';

const App = () => {
  //createProd()

  return (
    <>
<BrowserRouter>
<NavBar />
<ToastContainer/>
<Routes>

  <Route path='/' element={<ItemListContainer greeting={"Tenemos lo mejor para tu mascota"}/>} />

  <Route path='/category/:category' element={<ItemListContainer />} />

  <Route path='/product/:id' element={<ItemDetailContainer />} />

  <Route path='/checkout' element={<Checkout/>}/>

  <Route path='/cart' element={<Cart/>}/>


</Routes>
</BrowserRouter>


      

    </>

  )
}

export default App
