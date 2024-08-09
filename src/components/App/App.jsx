
import Header from "../Header/Header"
import Product from "../Product/Product"
import css from './App.module.css'
import officers from "../../officers.json"
import PilotList from "../ProductList/ProductList"
import Profile from "../Profile/Profile"
import proFile from "../PapcaBacand/proFile.json"
import friends from "../PapcaBacand/friends.json"
import FriendList from "../FriendList/FriendList"

export default function App() {

  return (


    <div className={css.container}>
      <>
        <Profile uzerS={proFile} />

        <FriendList friends={friends} />

        <Header />
        <h1> Hello </h1>
        <PilotList pilots={officers} />
        <Product />
      </>


    </div>
  )
}


