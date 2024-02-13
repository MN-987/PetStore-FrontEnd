import CarosuelContainer from "./components/CarosuelContainer"
import CategoriesContainer from "./components/CategoriesContainer"
import NewArrivalContainer from "./components/NewArrivalContainer"
import ProductsContainer from "./components/ProductsContainer"
import ShopContainer from "./components/ShopContainer"
import Footer from "./components/shared/Footer"
import NavBar from "./components/shared/NavBar"

function App() {
  return (
    <>
      <NavBar/>
      <CarosuelContainer/>
      <CategoriesContainer/>
      <ProductsContainer/>
      <ShopContainer/>
      <NewArrivalContainer/>
      <Footer/>
    </>

  )
}

export default App
