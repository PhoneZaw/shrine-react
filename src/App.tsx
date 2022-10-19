// import Nav from "./components/Nav";
// import Sheet from "./components/Sheet";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartContext from "./context/CartContext";
import CartDetail from "./pages/CartDetail";
import Home from "./pages/Home";

type Props = {};

const App = (props: Props) => {
  return (
    <CartContext>
      <div className="w-full h-screen bg-black flex justify-center items-center">
        <div className="h-screen md:w-[400px] md:h-[858px] rounded-lg mx-auto bg-primary text-secondary font-Rubik font-medium tracking-wide flex flex-col border overflow-hidden">
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/CartDetail" element={<CartDetail />} />
            </Routes>
          </BrowserRouter>
        </div>
      </div>
    </CartContext>
  );
};

export default App;
