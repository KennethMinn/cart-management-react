import { Routes, Route } from "react-router-dom";
import "./App.css";
import Nav from "./routes/Nav";
import Home from "./routes/Home";
import Details from "./routes/Details";
import CartItems from "./components/cart-items";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Nav />}>
          <Route index element={<Home />} />
          <Route path="details/:id" element={<Details />} />
          <Route path="items" element={<CartItems />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
