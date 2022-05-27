import { useState } from 'react';
import Login from './views/Login.view';
import Dashboard from './views/Dashboard.view';

function App() {
  const [authenticated, setAuthenticated] = useState(false);

  return authenticated ? <Dashboard /> : <Login {...{ setAuthenticated }} />;
}

export default App;
