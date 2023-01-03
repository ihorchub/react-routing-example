import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { SharedLayout } from './SharedLayout';

const About = lazy(() => import('pages/About/About'));
const Home = lazy(() => import('pages/Home/Home'));
const ProductDetails = lazy(() =>
  import('pages/ProductDetails/ProductDetails')
);
const Products = lazy(() => import('pages/Products/Products'));
const Mission = lazy(() => import('./Mission'));
const Team = lazy(() => import('./Team'));
const Reviews = lazy(() => import('./Reviews'));
const NotFound = lazy(() => import('pages/NotFound/NotFound'));
const Login = lazy(() => import('pages/Login/Login'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />}>
          <Route path="mission" element={<Mission />} />
          <Route path="team" element={<Team />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="/products" element={<Products />} />
        <Route path="/login" element={<Login />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};
