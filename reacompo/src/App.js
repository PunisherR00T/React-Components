import logo from './logo.svg';
import './App.css';
import Fullname from './Components/Profile/Fullname';
import Adress from './Components/Profile/Adress';
import Profilephoto from './Components/Profile/Profilephoto';

function App() {
  return (
    <div className="App">
      <Fullname/>
      <Adress/>
      <Profilephoto/>
    </div>
  );
}

export default App;
