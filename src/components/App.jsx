import './App.css';

//Components 
import NavBar from './NavBar/NavBar';
import ItemCount from './ItemCount/ItemCount';
import ItemListContainer from './ItemListContainer/ItemListContainer';
const App = () => {
  return (
    <>
        <NavBar />
        <ItemCount ValInicial={1} stock={10} />
        <ItemListContainer/>
      

    </>

  )
}

export default App
