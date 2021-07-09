import './App.css';
import NavBar from './components/NavBar';
import itemList from './components/ItemListContainer.js';

function App() {
  return (
    <div className="container">
      <NavBar/>
      <itemList/>
    </div>
  );
}

export default App;
