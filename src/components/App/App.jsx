
import Header from "../Header/Header"
import Product from "../Product/Product"
import './App.css'
import officers from "../../officers.json"
import PilotList from "../ProductList/ProductList"

export default function App() {

  return (
    <>
      <Header />
      <h1> Hello </h1>

      <PilotList pilots={officers} />

      <Product />

    </>
  )
}


