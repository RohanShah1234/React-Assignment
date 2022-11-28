import Header from './header';
import MAIN from './main';
import './App.css';
import Footer from './footer';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Contacts from './contacts';
import Blogs from './blogs';
// import Login from './blogs';
import Register from './register';
import Product from './product';
function App() {
  return (
    <div >
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={ <MAIN /> } />
          <Route path="/blogs" element={ <Blogs/> } />
          <Route path="/register" element={ <Register/> } />
          <Route path="/contacts" element={ <Contacts/> } />
          <Route path="/product" element={ <Product/> } />
        </Routes>
      

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
