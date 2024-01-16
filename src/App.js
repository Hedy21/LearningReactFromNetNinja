import Navbar1 from './Navbar1';
import Home from './Home';

function App() {
  const link = "https://github.com/Hedy21";
  //numbers array string fine BUT
  //boolean နဲ့ object ပဲ output အနေနဲ့ထုတ်လို့ မရတာ
  return (
    <div className="App">
      <Navbar1 />
      <div className="content">
        <Home/>

        <a href={ link }>Check My GitHub Account</a>
      </div>
    </div>
  );
}

export default App;
