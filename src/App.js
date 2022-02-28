import Greeting from './Greeting';
import Welcome from './Welcome';
import Top from './Top';

import './App.css';

function App() {
  return (
    <div className="App">
      <Top account={'Andukafar'} position={'CEO'} />
      <Welcome user="James Bond" age={50} />
      <Greeting title="Test Message" subTitle="subtitle" />
    </div>
  );
}

export default App;
