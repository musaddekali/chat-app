import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  const controlCount = () => {
    setCount(count + 1);
  }

  return (
    <div className="App">
      <button onClick={controlCount}>Count</button>
      <h3>{count}</h3>
    </div>
  );
}

export default App;
