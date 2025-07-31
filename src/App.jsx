import { Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/home/Home';
import Food from './pages/food/Food';
import User from './pages/user/User';
import Login from './pages/login/Login';
import NotFound from './pages/notFound/NotFound';

function App() {  
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Home />} />
        <Route path="/recipes" element={<Food />} />
        <Route path="/users" element={<User />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
