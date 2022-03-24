import "./App.css";
import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Loading from "./utils/Loading";
import PreviousOrder from "./OrderComponent/PreviousOrder";
const Home = lazy(() => import("./homeComponents/Home"));
const Contact = lazy(() => import("./homeComponents/Contact"));
const LoginRegister = lazy(() => import("./LoginRegister/LoginRegister"));
const Categories = lazy(() => import("./CategoryComponent/Categories"));
const Cart = lazy(() => import("./CartComponent/Cart"));
const Page404 = lazy(() => import("./homeComponents/Page404"));
const Checkout = lazy(() => import("./checkoutComponent/Checkout"));

function App() {
  return (
    <div className="app">
      <Suspense fallback={<Loading />}>
        <Router>
          <Switch>
            <Route path="/orders">
              <PreviousOrder />
            </Route>
            <Route path="/categories">
              <Categories />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/register">
              <LoginRegister register />
            </Route>
            <Route path="/cart">
              <Cart />
            </Route>
            <Route path="/checkout">
              <Checkout />
            </Route>
            <Route path="/login">
              <LoginRegister />
            </Route>
            <Route path="/loading">
              <Loading />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="*">
              <Page404 />
            </Route>
          </Switch>
        </Router>
      </Suspense>
    </div>
  );
}

export default App;
