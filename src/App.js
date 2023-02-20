import {BrowserRouter, Routes, Route} from 'react-router-dom'

// components:
import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";

//user components:
import RoutesWithUserChatComponent from "./components/user/RoutesWithUserChatComponent";

// publicly available pages:
import CartPage from './pages/CartPage';
import HomePage from "./pages/HomePage";
import LoginPage from './pages/LoginPage';
import ProductDetailsPage from './pages/ProductDetailsPage';
import ProductListPage from './pages/ProductListPage';
import RegisterPage from './pages/RegisterPage';

//protected user page
import ProtectedRoutesComponent from '../src/components/ProtectedRoutesComponent';
import UserProfilePage from '../src/pages/user/UserProfilePage';
import UserOrdersPage from '../src/pages/user/UserOrdersPage';
import UserOrderDetailsPage from '../src/pages/user/UserOrderDetailsPage';
import UserCartDetailsPage from '../src/pages/user/UserCartDetailsPage';

//protected admin page
import AdminUsersPage from './pages/admin/AdminUsersPage';
import AdminProductsPage from './pages/admin/AdminProductsPage';
import AdminOrdersPage from './pages/admin/AdminOrdersPage';
import AdminOrderDetailsPage from './pages/admin/AdminOrderDetailsPage';
import AdminEditUserPage from './pages/admin/AdminEditUserPage';
import AdminEditProductPage from './pages/admin/AdminEditProductPage';
import AdminCreateProductPage from './pages/admin/AdminCreateProductPage';
import AdminChatsPage from './pages/admin/AdminChatsPage';
import AdminAnalyticsPage from './pages/admin/AdminAnalyticsPage';



function App() {
  return (
<BrowserRouter>
      <HeaderComponent />
      <Routes>
        <Route element={<RoutesWithUserChatComponent />}>
          {/* publicly available routes: */}
          <Route path="/" element={<HomePage />} />
          <Route path="/product-list" element={<ProductListPage />} />
          <Route path="/product-details" element={<ProductDetailsPage />} />
          <Route path="/product-details/:id" element={<ProductDetailsPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="*" element="Page not exists 404" />
        </Route>
        
         {/* user protected routes: */}
        <Route element={<ProtectedRoutesComponent admin={false} />}>
          <Route path="/user" element={<UserProfilePage />} />
          <Route path="/user/my-orders" element={<UserOrdersPage />} />
          <Route path="/user/cart-details" element={<UserCartDetailsPage />} />
          <Route
            path="/user/order-details"
            element={<UserOrderDetailsPage />}
          />
        </Route>

        {/* admin protected routes: */}
        <Route element={<ProtectedRoutesComponent admin={true} />}>
          <Route path="/admin/users" element={<AdminUsersPage />} />
          <Route path="/admin/edit-user" element={<AdminEditUserPage />} />
          <Route path="/admin/products" element={<AdminProductsPage />} />
          <Route
            path="/admin/create-new-product"
            element={<AdminCreateProductPage />}
          />
          <Route
            path="/admin/edit-product"
            element={<AdminEditProductPage />}
          />
          <Route path="/admin/orders" element={<AdminOrdersPage />} />
          <Route
            path="/admin/order-details"
            element={<AdminOrderDetailsPage />}
          />
          <Route path="/admin/chats" element={<AdminChatsPage />} />
          <Route path="/admin/analytics" element={<AdminAnalyticsPage />} />
        </Route>
      </Routes>
      <FooterComponent />
    </BrowserRouter>
    
  );
}

export default App;
