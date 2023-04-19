import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { CategoriesProvider } from "./contexts/categories-context";
import { ProductsProvider } from "./contexts/products-context";
import { Provider } from "react-redux";
import { store } from "./store/store";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <ProductsProvider>
          <CategoriesProvider>
            <App />
          </CategoriesProvider>
        </ProductsProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
