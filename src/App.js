import { Route } from 'react-router';
import HomePage from './routes/HomePage'

function App() {
  return (
    <main className="App">
      <Route path="/" exact component={HomePage} />
    </main>
  );
}

export default App;
