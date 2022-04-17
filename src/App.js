
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home'
import Footer from './Pages/Footer/Footer';
import Header from './Pages/Header/Header';
function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
