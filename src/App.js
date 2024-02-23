import logo from "./logo.jpg"
import './App.css';
import AppRoutes from './routes';

function App() {

  return (
    <>
      <div className="App">
        <header>
          <img src={logo} className="App-logo" alt="logo" />
          <h1>loja Gosti</h1>
        </header>
        <AppRoutes></AppRoutes>
      </div>

    </>
  );
}

export default App;
