import { Header } from './components/common/Header';
import { Footer } from './components/common/Footer';
import './App.css';
import { Hero } from './components/hero/Hero';
import { SectionDevider } from './components/sectionDevider/SectionDevider';
import { HomeProductSection } from './components/homeProductSection/HomeProductSectin';
import { Routes, Route } from 'react-router-dom';
import { Create } from './components/create/Create';
import { Detail } from './components/details/Detail';

import { AuthContext } from './context/authContext';
import Logout from './components/logout/Logout';
import { useLocalStorage } from './hooks/useLocalStorage';
import { Profile } from './components/profile/Profile';
import { ShoppingCart } from './components/shoppingCart/ShoppingCart';
import { CartConstext } from './context/cartContext';
import { EditProduct } from './components/details/EditProduct';
import swal from 'sweetalert';
import { MessageComponent } from './components/messages/Message';
import { Catalog } from './components/catalog/Catalog';
import { Guard } from './components/guard/Guard';
import { AboutUs } from './components/about/AboutUs';

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
    let isExisting = cart.find((x) => x._id === product._id);
    const quantity = isExisting ? product.quantity + 1 : 1;
    let cartData;
    if(quantity > product.stock) {
      swal({
        icon: "warning",
        text: "Product is out of stock",
      });
      return;
    }
    if(!isExisting) {
      product.quantity = 1;
      cartData = [...cart, product];
    }else{
      isExisting.quantity += 1;
      cartData = cart.map((item) => item._id === isExisting._id ? isExisting : item);
    }
    setCart(cartData);
}

  return (
    <AuthContext.Provider value={{user: auth, userLogin, userLogout}}>
    <CartConstext.Provider value={{cart, addToCartHandler, setCart}}>
    <div className='root'>
      <Header></Header>

      <main>
      <Routes>
        <Route path="/" element={<><Hero/><SectionDevider/><HomeProductSection/></>}/>
        <Route path="/catalog" element={<Catalog/>}/>
        <Route path="/catalog/:id" element={<Detail/>}/>
        <Route path="/catalog/edit/:id" element={<EditProduct/>}/>
        <Route path="/about" element={<AboutUs></AboutUs>}/>
        <Route path="/logout" element={<Logout></Logout>}/>
        <Route path="/cart" element={<ShoppingCart></ShoppingCart>}/>
        <Route element={<Guard></Guard>}>
          <Route path="/create" element={<Create></Create>}/>
          <Route path="/profile/:id" element={<Profile></Profile>}/>
          <Route path="/message" element={<MessageComponent></MessageComponent>}/>
        </Route>
        <Route path="/*" element={<><Hero/><SectionDevider/><HomeProductSection/></>}/>
      </Routes>
      </main>
      <Footer></Footer>
    </div>
    </CartConstext.Provider>
    </AuthContext.Provider>
  );
}

export default App;
