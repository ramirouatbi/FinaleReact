//import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router,Routes, Route, Link } from "react-router-dom";

import Home from './pages/Home'
import Products from './pages/Products';
import Details from './pages/Details';
import Header from './components/layout/header';
import Footer from './components/layout/footer';
function App() {
  return (
    <div>
<Header />
   
    <Router>
      <Routes>
        <Route path="/" caseSensitive={false} element={<Home />} />
        <Route path="/products" caseSensitive={false} element={<Products />} />
        <Route path="/details" caseSensitive={false} element={<Details />} />
      </Routes>
    </Router>
    <Footer />
    </div>
  );
}

export default App;
