import logo from './logo.svg';
import './App.css';

import EventDisplay from './Components/EventDisplay';
import Header from './Components/Header';

function App() {
  return (
    <div className="App">
      <Header/>
      <EventDisplay />
    </div>
  );
}

export default App;
