import { lazy, Suspense } from 'react';
import { Routes as Router, Route } from 'react-router-dom';

import { Loader } from './atoms';
import { Layout } from './components/layout';
import { Home } from './pages/home';
import { Login } from './pages/login';
import { Register } from './pages/register';
import Profile from './pages/profile';
import { NoMatch } from './pages/NoMatch';
import * as routes from './utils/routePaths';

const Products = lazy(() => import('./pages/products'));
const ShoppingCart = lazy(() => import('./pages/shopping-cart'));

export const Routes = () => {
  return (
    <Router>
      <Route element={<Layout />}>
        <Route path={routes.HOME_PATH} index element={<Home />} />
        <Route
          path={routes.PRODUCTS_PATH}
          element={
            <Suspense fallback={<Loader message="Products Loading..." />}>
              <Products />
            </Suspense>
          }
        />
        <Route
          path={routes.SHOPPING_CART_PATH}
          element={
            <Suspense fallback={<Loader message="Shopping Cart Loading..." />}>
              <ShoppingCart />
            </Suspense>
          }
        />
        <Route path={routes.PROFILE_PATH} element={<Profile title="Page title" />} />
        <Route path={routes.LOGIN_PATH} element={<Login />} />
        <Route path={routes.REGISTER_PATH} element={<Register />} />

        <Route path={routes.NO_MATCH_PATH} element={<NoMatch />} />
      </Route>
    </Router>
  );
};

Routes.displayName = 'AppRoutes';
