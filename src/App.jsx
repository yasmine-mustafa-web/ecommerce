import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "./pages/Home";
import Header from "./components/Header"
import { Provider } from "./components/ui/provider.jsx";

function App() {
  return (
 <Provider>
<BrowserRouter>
<Header/>
<Routes>
   
        <Route path="/" exact={true} element={<Home/>}/>
  
</Routes>
</BrowserRouter>
  </Provider>
  );
}

export default App;
