import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { SearchProvider } from "./contexts/SearchContext";
import { CategoriesProvider } from "./contexts/categories-context";
import { ProductsProvider } from "./contexts/products-context";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ProductsProvider>
        <SearchProvider>
          <CategoriesProvider>
            <App />
          </CategoriesProvider>
        </SearchProvider>
      </ProductsProvider>
    </BrowserRouter>
  </React.StrictMode>
);
