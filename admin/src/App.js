import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Provider } from "./components/ui/provider.jsx";
import DashBoard from './pages/DashBoard/index.js';
import Header from './components/Header/index.js';
import 'bootstrap/dist/css/bootstrap.min.css'


function App() {
  return (
    <Provider>
      <BrowserRouter>
      <Header>
      <Routes>
        <Route path='/' exact={true} element={<DashBoard/>}>
        </Route>
      </Routes>
      </Header>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
