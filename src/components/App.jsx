import './App.css';

//Components 
import NavBar from './NavBar/NavBar';
import ItemCount from './ItemCount/ItemCount';
import ItemListContainer from './ItemListContainer/ItemListContainer';
import ItemDetailContainer from './ItemDetailContainer/ItemDetailContainer';
const App = () => {
  return (
    <>
        <NavBar />
        <ItemCount ValInicial={1} stock={10} />
        <ItemListContainer/>
        <ItemDetailContainer/>
      

    </>

  )
}

export default App
