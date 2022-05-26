import { useState } from 'react';
import Login from './views/Login';
import Dashboard from './views/Dashboard';

function App() {
  const [authenticated, setAuthenticated] = useState(false);

  return authenticated ? <Dashboard /> : <Login {...{ setAuthenticated }} />;
}

export default App;
