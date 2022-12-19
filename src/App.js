import Counter from './components/Counter';
import Divide from './components/Divider';
import Multiply from './components/Multiply';
import Subtraction from './components/Subtraction';

function App() {
  return (
    <div className="App">
      <Multiply />
      <Subtraction />
      <Divide />
      <Counter />
    </div>
  );
}

export default App;
