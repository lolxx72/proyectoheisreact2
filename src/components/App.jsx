import './App.css';

import {BrowserRouter, Routes, Route} from 'react-router-dom'

import DarkModeProvider from '../context/DarkModeContext';

//Components 
import NavBar from './NavBar/NavBar';
import ItemListContainer from './ItemListContainer/ItemListContainer';
import ItemDetailContainer from './ItemDetailContainer/ItemDetailContainer';
import Checkout from './Checkout/Checkout';
const App = () => {
  return (
    <>
<BrowserRouter>
<DarkModeProvider>
<NavBar />

<Routes>

  <Route path='/' element={<ItemListContainer greeting={"Tenemos lo mejor para tu mascota!"}/>} />

  <Route path='/category/:category' element={<ItemListContainer />} />

  <Route path='/product/:id' element={<ItemDetailContainer />} />

  <Route path='/checkout' element={<Checkout/>}/>

</Routes>
</DarkModeProvider>
</BrowserRouter>


      

    </>

  )
}

export default App
