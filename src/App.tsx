import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProductsPage from './pages/ProductsPage';
import TurnkeySolutionsPage from './pages/TurnkeySolutionsPage';
import CustomersPage from './pages/CustomersPage';
import ContactPage from './pages/ContactPage';
import TubesPage from './pages/TubesPage';
import ValvesPage from './pages/ValvesPage';
import FittingsPage from './pages/FittingsPage';
import RegulatorsPage from './pages/RegulatorsPage';
import AccessoriesPage from './pages/AccessoriesPage';
import GasDeliverySystemsPage from './pages/GasDeliverySystemsPage';
import ChemicalDeliverySystemsPage from './pages/ChemicalDeliverySystemsPage';
import CryogenicTanksPage from './pages/CryogenicTanksPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/turnkey-solutions" element={<TurnkeySolutionsPage />} />
          <Route path="/customers" element={<CustomersPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/products/tubes" element={<TubesPage />} />
          <Route path="/products/valves" element={<ValvesPage />} />
          <Route path="/products/fittings" element={<FittingsPage />} />
          <Route path="/products/regulators" element={<RegulatorsPage />} />
          <Route path="/products/accessories" element={<AccessoriesPage />} />
          <Route path="/turnkey-solutions/gas-delivery-systems" element={<GasDeliverySystemsPage />} />
          <Route path="/turnkey-solutions/chemical-delivery-systems" element={<ChemicalDeliverySystemsPage />} />
          <Route path="/turnkey-solutions/cryogenic-tanks" element={<CryogenicTanksPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;