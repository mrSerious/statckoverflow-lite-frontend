import Home from './components/home/HomePage';
import ResultsPage from './components/results/ResultsPage';
import SignupPage from './components/signup/SignupPage';
import LoginPage from './components/login/LoginPage';
import PostQuestionPage from './components/post-question/PostQuestionPage';

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
  },
  {
    path: '/login',
    component: LoginPage,
    exact: true
  },
  {
    path: '/post-question',
    component: PostQuestionPage,
    exact: true
  }
];

export default routes;
