import logo from './holberton-logo.jpg';
import './App.css';
import { getFullYear, getFooterCopy } from './utils.js'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>School dashboard</h1>
      </header>
      <body>
        <div className="App-body">
          <p>Login to access the full dashboard</p>
          <div className="emailPassword">
            <div>
              <label htmlFor="email">Email:</label>
              <input type="email" id="email"/>
            </div>
            <div>
              <label htmlFor="Password">Password:</label>
              <input type="password" id="password"/>
            </div>
            <button>OK</button>
           </div>
        </div>
      </body>
      <footer>
        <div className="App-footer">
          <p>{`${getFooterCopy(true)} - ${getFullYear()}`}</p>
        </div>
      </footer>
    </div>
  );
}

export default App;