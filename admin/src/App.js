import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Provider } from "./components/ui/provider.jsx";
import DashBoard from './pages/DashBoard/index.js';
import Header from './components/Header/index.js';
import 'bootstrap/dist/css/bootstrap.min.css'
import SideBar from './components/SideBar/index.js';
import { useState } from "react";

function App() {

   const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <Provider>
      <BrowserRouter>
      <Header
       isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}/>
           <SideBar
        isSidebarOpen={isSidebarOpen}
      />
      <main className={isSidebarOpen? "mainContent" : "mainContent collapsed"}>
      <Routes>
        <Route path='/'  element={<DashBoard/>}>
        </Route>
      </Routes>
      </main>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
