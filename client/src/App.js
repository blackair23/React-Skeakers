import { Header } from './components/common/Header';
import { Footer } from './components/common/Footer';
import './App.css';
import { Hero } from './components/Hero';
import { SectionDevider } from './components/SectionDevider';
import { HomeProductSection } from './components/HomeProductSectin';
import { Routes, Route } from 'react-router-dom';
import { Create } from './components/Create';
import { Detail } from './components/details/Detail';

import { AuthContext } from './context/authContext';
import Logout from './components/Logout';
import { useLocalStorage } from './hooks/useLocalStorage';
import { Profile } from './components/profile/Profile';
import { ShoppingCart } from './components/shoppingCart/ShoppingCart';
import { CartConstext } from './context/cartContext';
import { EditProduct } from './components/details/EditProduct';
import swal from 'sweetalert';

function App() {
  const [auth, setAuth] = useLocalStorage('auth', {});
  const [cart, setCart] = useLocalStorage('cart', []);
  
  const userLogin = (authData) => {
    if(authData){
      setAuth(authData)
    }
  }

  const userLogout = () => {
    setAuth({});
  }
  

  
  const addToCartHandler = (product) => {
    // let isExisting = cart.includes(product);
    let isExisting = cart.find((x) => x._id === product._id);
    const quantity = isExisting ? product.quantity + 1 : 1;
    console.log("isExisting ->", isExisting);
    if(quantity > product.stock) {
      swal({
        icon: "warning",
        text: "Product is out of stock",
      });
      return;
    }
    if(!isExisting) {
      product.quantity = 1;
      const cartData = [...cart, product];
      setCart(cartData);
    }else{
      isExisting.quantity += 1;
      const cartData = cart.map((item) => item._id === isExisting._id ? isExisting : item);
      setCart(cartData);
    }
}

  return (
    <AuthContext.Provider value={{user: auth, userLogin, userLogout}}>
    <CartConstext.Provider value={{cart, addToCartHandler, setCart}}>
    <div className='root'>
      <Header></Header>

      <main>
      <Routes>
        <Route path="/" element={<><Hero/><SectionDevider/><HomeProductSection/></>}/>
        <Route path="/catalog" element={<HomeProductSection/>}/>
        <Route path="/catalog/:id" element={<Detail/>}/>
        <Route path="/catalog/edit/:id" element={<EditProduct/>}/>
        <Route path="/about" element={<h2>About Page</h2>}/>
        <Route path="/logout" element={<Logout></Logout>}/>
        <Route path="/create" element={<Create></Create>}/>
        <Route path="/profile/:id" element={<Profile></Profile>}/>
        <Route path="/cart" element={<ShoppingCart></ShoppingCart>}/>
      </Routes>
      </main>
      <Footer></Footer>
    </div>
    </CartConstext.Provider>
    </AuthContext.Provider>
  );
}

export default App;
