import {Routes, Route} from "react-router-dom"
import Coin from "./components/Coin";
import Home from "./components/Home";
import {useContext} from "react"
import {Link} from "react-router-dom"
function App() {
  return (
    <div className="bg-black h-full w-full overflow-hidden text-white">
      <h1 className='font-bold text-3xl pt-3 text-center'><Link to="/">Coin <span className='text-violet-800 '>Search</span></Link></h1>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path='/coin' element={<Coin />}>
          <Route path=':coinId' element={<Coin />} />
        </Route>


      </Routes>
    </div>
  );
}

export default App;
