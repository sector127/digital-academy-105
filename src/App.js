import Greeting from './Greeting';
import Welcome from './Welcome';

import './App.css';

function App() {
  return (
    <div className="App">
      <Welcome user="James Bond" age={50} />
      <Greeting title="Test Message" subTitle="subtitle" />
    </div>
  );
}

export default App;
