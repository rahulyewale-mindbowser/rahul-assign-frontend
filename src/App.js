// import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import CheckoutSuccess from './components/CheckoutSuccess';
import ProductCard from './components/ProductCard';
import ResponsiveAppBar from './components/ResponsiveAppBar';
import CheckoutFailed from './components/CheckoutFailed';
import ContactBar from './components/ContactBar';

function App() {
  return (
    <div className="App">
      <Router>
        <ContactBar/>
        <ResponsiveAppBar/>
        <Routes>
          <Route path='/checkout-success' element={<CheckoutSuccess/>}/>
          <Route path='/checkout-cancel' element={<CheckoutFailed/>}/>
          <Route path ='/' element={<ProductCard/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
