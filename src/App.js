import './App.css';
import User from './components/User';

function App() {
  return (
    <div className="App">
     <User data= {{name: 'Pratik', age: 26}}/>
    </div>
  );
}

export default App;
