import logo from './logo.svg';
import './App.css';

//Importando os componentes
import Hello from './components/Hello';
import SayMyName from './components/SayMyName';
import People from './components/People';

function App() {
  const name = 'William';

  return (
    <div className="App">
      <h1> Meu app </h1>
      <p> Olá, {name}! </p>

      <text>Chamando o componente</text>
      <Hello />
      <SayMyName nome="William"/>

      <People nome="William" 
              idade="20" 
              cargo="FullStack Engineer" 
              foto="https://via.placeholder.com/150"
      />
      
    </div>
  );
}

export default App;
