import Router from "./router/Router";
import {BrowserRouter} from "react-router-dom";


function App() {
  return (
    <div className='App'>
      <BrowserRouter basename="">
        <Router/>
      </BrowserRouter>
    </div>
  );
}

export default App;