import logo from './logo.svg';
import './App.css';
import Sidebar from './componrnts/Sidebar';
import Home from './componrnts/Home';
import Worklist from './componrnts/Worklist';

function App() {
  return (
    <div className="flex">
      <div className='basis-[12%] border'>
        <Sidebar />
      </div>
      <div className='basis-[88%] border'>
        <Home />
      </div>
    </div>
  );
}

export default App;
