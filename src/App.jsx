import Component1 from './components/component1'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Product from './components/Product'
import Details from './components/Details'
import Delivery from './components/Delivery'

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          {/* Define route for the root path */}
          <Route path="/" element={<Home />} />

          {/* Define other routes */}
          <Route path="/Product" element={<Product />} />
          <Route path="/Details" element={<Details />} />
          <Route path="/Delivery" element={<Delivery />} />
          <Route path="/Component1" element={<Component1 />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
