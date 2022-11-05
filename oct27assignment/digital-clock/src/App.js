import logo from './clock.png';
import Clock from './clock.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div class="container">
          <div class="box"><img src={logo} alt="logo" /></div>
          <div class="box overlay"><Clock></Clock></div>
        </div>
          
          
      
      </header>
    </div>
  );
}

export default App;
