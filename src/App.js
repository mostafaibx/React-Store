import { Fragment } from "react";
import Header from "./Components/Layout/Header/Header";
import Slider from "./Components/Layout/Slider/Slider";
import Shop from "./Components/Layout/Shop/Shop";
import Login from "./Components/Login/Login";
import Cart from "./Components/Cart/Cart";
import LoginProvider from "./Store/LoginProvider";
import FavoritProvider from "./Store/FavoritProvider";
import Favorit from "./Components/Favorit/Favorit";
import CartProvider from "./Store/CartProvider";
function App() {
  return (
    <Fragment>
      <CartProvider>
        <FavoritProvider>
          <LoginProvider>
            <Header></Header>
            <Slider></Slider>
            <Shop></Shop>
            <Login></Login>
            <Cart></Cart>
            <Favorit></Favorit>
          </LoginProvider>
        </FavoritProvider>
      </CartProvider>
    </Fragment>
  );
}

export default App;
