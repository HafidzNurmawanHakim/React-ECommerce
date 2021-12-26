import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./Pages/Main";
import AllProduct from "./Pages/AllProduct";
import { Provider } from "react-redux";
import store from "./config/Redux/Store";
import DetailProduct from "./Pages/DetailProduct";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="product" element={<AllProduct />} />
          <Route path="product/:productId" element={<DetailProduct />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
