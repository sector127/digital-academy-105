import { Routes } from './Routes';
import { Header } from './components/header';
import { Footer } from './components/footer';
import { Layout } from './components/layout';

import './App.css';
import { CartProvider } from './providers/CartProvider';

function App() {
  return (
    <CartProvider>
      <Layout className="App" size="default">
        <Header />
        <Routes />
        <Footer />
      </Layout>
    </CartProvider>
  );
}

export default App;
