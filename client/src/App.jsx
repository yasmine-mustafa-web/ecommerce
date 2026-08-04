import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "./pages/Home";
import Header from "./components/Header"
import { Provider } from "./components/ui/provider.jsx";
import Footer from "./components/Footer";
import SignIn from './pages/SignIn/index.js';
import { useState , createContext } from 'react';
import SignUp from './pages/SignUp/index.js';
import Listing from './pages/Listing/index.js';
import Details from './pages/Details/index.js';
import ProductModal from './components/ProductModal/index.js';
import Cart from './pages/Cart/index.js';
export const MyContext = createContext();

function App() {

  const [isHeaderFooterShow ,
    setisHeaderFooterShow ] = useState(true);

const[ isOpenProductModal,
    setIsOpenProductModal]= useState(false);

    const closeProductModal=()=>{
        setIsOpenProductModal(false)
    }
  const values = {
      isHeaderFooterShow,
    setisHeaderFooterShow,
    isOpenProductModal,
    setIsOpenProductModal,
    closeProductModal
  }
  return (
 <Provider>
<BrowserRouter>
<MyContext.Provider value={values}>
  {isHeaderFooterShow === true && <Header/>
 }
<Routes>
   
        <Route path="/" exact={true} element={<Home/>}/>
        <Route path="/listing/:id" exact={true} element={<Listing/>}/>
        <Route path="/product/details" exact={true} element={<Details/>}/>
        <Route path="/cart" exact={true} element={<Cart/>}/>
        <Route path="/signIn" exact={true} element={<SignIn/>}/>
        <Route path="/signUp" exact={true} element={<SignUp/>}/>

</Routes>
  {isHeaderFooterShow === true && <Footer />}
  {
    isOpenProductModal === true && <ProductModal closeProductModal={closeProductModal} />
  }
</MyContext.Provider>
</BrowserRouter>
  </Provider>
  );
}

export default App;
