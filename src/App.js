import { Header } from './components/header';
import { Footer } from './components/footer';
import { Layout } from './components/layout';
// import { Home } from './pages/home';
import { Products } from './pages/products';

import './App.css';
import { CartProvider } from './providers/CartProvider';

function App() {
  return (
    <CartProvider>
      <Layout className="App" size="default">
        <Header />
        <Products />
        <Footer />
      </Layout>
    </CartProvider>
  );
}

export default App;
