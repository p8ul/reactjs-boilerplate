import LandingPage from '../views/Landingpage';
import Login from '../views/Login';
import SignUp from '../views/SignUp';

const indexRoutes = [
  {
    path: '/',
    name: 'Landing Page',
    component: LandingPage,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/signup',
    name: 'SignUp',
    component: SignUp,
  },
];

export default indexRoutes;
