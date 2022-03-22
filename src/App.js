import { CartProvider } from './providers/CartProvider';
import { AuthProvider } from './providers/AuthProvider';
import { Routes } from './Routes';
import './App.css';
// Tree Shaking

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <Routes />
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
