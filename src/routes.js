import Home from './components/home/HomePage';
import ResultsPage from './components/results/ResultsPage';
import SignupPage from './components/signup/SignupPage';

const routes = [
  {
    path: '/',
    component: Home,
    exact: true
  },
  {
    path: '/results',
    component: ResultsPage,
    exact: true
  },
  {
    path: '/signup',
    component: SignupPage,
    exact: true
  }
];

export default routes;
