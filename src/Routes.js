import Home from './components/Pages/Home'
import ShoppingCart from './components/Pages/ShoppingCart'
import UserSettings from './components/Pages/UserSettings';
import WishList from './components/Pages/WishList';

export default [
     {path: '/', component: Home},
     {path: '/shopping', component: ShoppingCart},
     {path: '/usersettings', component: UserSettings},
     {path: '/wishlist', component: WishList},
 ]