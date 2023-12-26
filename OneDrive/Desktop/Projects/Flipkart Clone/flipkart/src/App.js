import React from "react";
import Header from "./components/header";
import Categories from "./components/categories";
import Carousal from "./components/Carousal";
import Products from "./components/products";





const App = ()=>{
    return(
        <div>
           
           <Header />
           <Categories />
           <Carousal />
           <Products />
        </div>
    )
}

export default App;