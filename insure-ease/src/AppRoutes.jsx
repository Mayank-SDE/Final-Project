import { BrowserRouter as Router, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const AppRoutes = () => (
  <Router>
    <Navbar />
    <Switch>
    </Switch>
    <Footer />
  </Router>
);

export default AppRoutes;
