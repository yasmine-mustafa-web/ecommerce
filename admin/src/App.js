import { BrowserRouter, Route, Routes , useLocation } from 'react-router-dom';
import './App.css';
import { Provider } from "./components/ui/provider.jsx";
import DashBoard from './pages/DashBoard/index.js';
import Header from './components/Header/index.js';
import 'bootstrap/dist/css/bootstrap.min.css'
import SideBar from './components/SideBar/index.js';
import { useState , useEffect , createContext } from "react";
import Products from "./pages/Products";
import AddProduct from "./pages/AddProduct";
import AlertBox from "./components/AlertBox/index.js";
import SignIn from "./pages/SignIn";
import Footer from "./components/Footer/index.js";
import Categories from "./pages/Categories";
import AddCategory from './pages/AddCategories/index.js';
export const MyContext = createContext();

function Layout() {
    const location = useLocation();
  
    const [isHeaderFooterShow ,
    setisHeaderFooterShow ] = useState(true);
    const [user, setUser] = useState(null);
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const [isLogin, setIsLogin] = useState(() =>{
       return !!localStorage.getItem("token");
     });

    const [alertBox, setAlertBox] = useState({
    open: false,
    error: false,
    msg: ""
    });

    const hideHeaderFooter= 
    location.pathname === "/"

    const isSignInPage = location.pathname==="/";
    
     useEffect(() =>{
          const token = localStorage.getItem("token");
          setIsLogin(!!token)
        },[])

  const values={
    isHeaderFooterShow,
    setisHeaderFooterShow,
    alertBox,
    setAlertBox,
    isLogin, 
    setIsLogin,
    isSidebarOpen,
    setIsSidebarOpen,
    user,
    setUser
  }
  return (
    <MyContext.Provider value={values} >
        {!isSignInPage && (
          <>
        <Header
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
        />
        <SideBar
        isSidebarOpen={isSidebarOpen}
      />
      </>
  )}
     
      {isSignInPage ? (
           <Routes>
          <Route path="/" element={<SignIn />} />
        </Routes>
      ):(
      <main  className={`mainContent ${!isSidebarOpen ? "collapsed" : ""}`} >
        <div style={{flex:1}}>
      <Routes >
        <Route path='/dashboard'  element={<DashBoard/>}/>
        <Route path="/products" element={<Products />} />
        <Route path="/products/add" element={<AddProduct />} />
        <Route path="/categories" element={<Categories />} /> 
        <Route path="/categories/add" element={<AddCategory />} />
        <Route path="/" element={<SignIn/>}/>
      </Routes>
      </div>
      {!hideHeaderFooter &&  <Footer />}
      </main>
      )}
        <AlertBox/>
    </MyContext.Provider >
  );
}

function App(){
  return(
          <Provider>
          <BrowserRouter>
          <Layout />
          </BrowserRouter>
          </Provider>
  )
}


export default App;
