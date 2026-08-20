  import 'bootstrap/dist/css/bootstrap.min.css'
  import './App.css';


  import { BrowserRouter, Route, Routes , useLocation , Link } from 'react-router-dom';
  import Home from "./pages/Home";
  import Header from "./components/Header"
  import { Provider } from "./components/ui/provider.jsx";
  import Footer from "./components/Footer";
  import SignIn from './pages/SignIn/index.js';
  import { useState , createContext , useMemo , useEffect } from 'react';
  import SignUp from './pages/SignUp/index.js';
  import Listing from './pages/Listing/index.js';
  import Details from './pages/Details/index.js';
  import Cart from './pages/Cart/index.js'
  import AlertBox from "./components/AlertBox/index.js";
  import Checkout from './pages/Checkout/index.js';
  import MyOrders from './pages/MyOrders/index.js';
  import api from './Services/api.js';
  export const MyContext = createContext(null);

  function getCurrentUserId(){
    try{
      const token = localStorage.getItem("token");
      if (!token) {
        return null;
      }
      const payload = JSON.parse(atob(token.split(".")[1]))
      return payload.id || null;
    }catch{
      return null
    }
  }

  function loadCartFor(userId) {
    try{
      return JSON.parse(localStorage.getItem(`cart_${userId || "guest"}`) || "[]")
    }catch{
      return[];
    }
  }


  function Layout() {
    
    const [userId, setUserId] = useState(getCurrentUserId);
    const location = useLocation();
    const [isLogin, setIsLogin] = useState(() =>{
      return !!localStorage.getItem("token");
    });

    const refreshOrderStatus= async()=>{
      if(!localStorage.getItem("token")){
        setHasOrders(false);
        return;
      }try{
        const res = await api.get("/orders/mine");
        setHasOrders(res.data.length > 0);
        } catch {
          setHasOrders(false);
        }
      }
      useEffect(() => {
      refreshOrderStatus();
    }, [isLogin, userId]);
    

    const [alertBox, setAlertBox] = useState({
    open: false,
    error: false,
    msg: ""
    });
    
    const [cart , setCart] = useState(() => loadCartFor(userId));
    const [hasOrders , setHasOrders]= useState(false);

    useEffect(() =>{
      localStorage.setItem(`cart_${userId ||"guest"}` , JSON.stringify(cart))
    },[cart , userId])


    // const [cart , setCart] = useState(() =>{
    //   try{ return JSON.parse(localStorage.getItem("cart") || "[]")}
    //   catch{return []}
    // })
    
      useEffect(() =>{
        localStorage.setItem("cart" , JSON.stringify(cart))},[cart])

      useEffect(()=>{
        setIsLogin(!!localStorage.getItem("token"))
        
          const newUserId = getCurrentUserId();
          if (newUserId !== userId) {
            setUserId(newUserId);
            setCart(loadCartFor(newUserId));
          }
            },[location.pathname , userId])
      
      const addToCart = (product, quantity = 1) => {
      const qty = Math.max(1, Number(quantity) || 1);
      setCart((prev) => {
        const exisitingItem = prev.find(
          (item) => item._id === product._id
        )
      if (!exisitingItem){
        const maxStock = product.countInStock ?? Infinity;
        return[
          ...prev,{...product , quantity:Math.min(qty,maxStock)

          }
        ];
      }
        return prev.map((item) => {
          if (item._id !== product._id){
            return item;
          }
          const maxStock = item.countInStock ?? Infinity

      return {
        ...item,
        quantity: Math.min(
          item.quantity + qty,
          maxStock
        )
      };
    });
  });
      setAlertBox({ open: true, error: false, 
        msg: (
          <>
          Added to cart {""}
          <Link to="/cart" className="text-dark cursor">
          See your cart
          </Link>
          </>
        ) });
    };

    const updateCartQty = (id, quantity) => {
      setCart((prev) => prev.map((item )=> { 
        if(item._id !== id ) return item
          const newQuantity = Math.max(1,Number(quantity) || 1);
          const maxStock = item.countInStock ?? newQuantity;

          return { ...item, quantity: Math.max(1, Math.min(newQuantity , maxStock))} }
      ));
    };

    const removeFromCart = id => setCart(prev => prev.filter(item => item._id !== id));
    const clearCart = () => setCart([]);
    const cartCount = useMemo(() => cart.reduce((sum, item) => sum + item.quantity, 0), [cart]);
    const cartTotal = useMemo(() => cart.reduce((sum, item) => sum + Number(item.price || 0) * item.quantity, 0), [cart]);


      const hideHeaderFooter= 
      ["/signIn" , "/signUp"].includes(location.pathname)

      const values = {
        alertBox,
        setAlertBox,
        isLogin, 
        setIsLogin,
        cart,
        addToCart,
        updateCartQty,
        removeFromCart,
        clearCart, 
        cartCount,
        cartTotal,
        isFirstOrder: !hasOrders,
        refreshOrderStatus,
    };
      
    return (

  <MyContext.Provider value={values}>
    {!hideHeaderFooter && <Header/>}
  <Routes>
    
          <Route path="/"  element={<Home/>}/>
          <Route path="/listing"  element={<Listing/>}/>
          <Route path="/product/details"  element={<Details/>}/>
          <Route path="/product/details/:id" element={<Details />} />
          <Route path="/cart"  element={<Cart/>}/>
          <Route path="/checkout"  element={<Checkout/>}/> 
          <Route path="/my-orders" element={<MyOrders />} />
          <Route path="/signIn"  element={<SignIn/>}/>
          <Route path="/signUp"  element={<SignUp/>}/>
          <Route path="*" element={<Home />} />

  </Routes>
    {!hideHeaderFooter && <Footer />}
    <AlertBox/>
  </MyContext.Provider>
    );
  }

  function App() {
      return (
        <Provider>
          <BrowserRouter>
              <Layout />
          </BrowserRouter>
          </Provider>
      );
  }


  export default App;
