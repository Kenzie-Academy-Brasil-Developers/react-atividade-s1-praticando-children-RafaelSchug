import './App.css';
import {CenteredCard} from './components/CenteredCard'
function App() {

  return (
    <div className="App">
      <header className="App-header">
        <CenteredCard><h1>Children 1</h1></CenteredCard>
        <CenteredCard><h1>Children 2</h1></CenteredCard>
        <CenteredCard><h1>Children 3</h1></CenteredCard>
      </header>
    </div>
  );
}

export default App;
