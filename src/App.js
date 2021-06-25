import logo from './logo.svg';
import './App.css';

import HomeButton from './components/HomeButton';
import ToolBarButton from './components/ToolBarButton';
import ToolBar from './components/ToolBar';
import EggHero from './components/EggHero';
import TdRcCount from './components/TdRcCount';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <HomeButton/>
        <ToolBar/>
        <EggHero/>
        <TdRcCount count={2}/>
      </header>
    </div>
  );
}

export default App;
