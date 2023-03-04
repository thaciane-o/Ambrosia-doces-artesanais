import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Container from "./components/layout/Container";
import Home from "./components/pages/Home";
import Contact from "./components/pages/Contact";
import Company from "./components/pages/Company";
import Shop from "./components/pages/Shop";
import Cart from "./components/pages/Cart";
import User from "./components/pages/User";

function App() {
  return (
    <Router>
      <Navbar />
      <Container customClass="min-height">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/company" element={<Company />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="/user" element={<User />} />
        </Routes>
      </Container>
      <Footer />
    </Router>
  );
}

export default App;
