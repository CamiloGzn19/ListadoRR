// import React, { Fragment } from "react";
import Header from "../src/Components/Header";
import Productos from "./Components/Productos";
import NuevoProducto from "./Components/NuevoProducto";
import EditarProducto from "./Components/EditarProducto";

import { BrowserRouter, Route, Routes } from "react-router-dom";

// Redux
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Header />
        <div className="container mt-5">
          <Routes>
            <Route path="/" element={<Productos />} />
            <Route path="/productos/nuevo/" element={<NuevoProducto />} />
            <Route path="/productos/editar/:id" element={<EditarProducto />} />
          </Routes>
        </div>
      </Provider> 
    </BrowserRouter>
  );
}

export default App;
