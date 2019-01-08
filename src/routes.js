import Home from './components/home/HomePage';
import ResultsPage from './components/results/ResultsPage';

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
  }
];

export default routes;
