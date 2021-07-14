import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <div className="container">
      <NavBar></NavBar>
      <ItemListContainer saludo = {"Holaa"}/>
    </div>
  );
}

export default App;
