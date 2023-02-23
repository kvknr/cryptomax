import {BrowserRouter,Route} from "react-router-dom";
import './App.css';
import Header from './components/Header';
import Homepage from './Pages/Homepage';
function App() {
  return (
    <BrowserRouter>
    <div>
      <Header/>
      <Route path='/' component={Homepage}/>
    </div>
    </BrowserRouter>
  )
}

export default App;
