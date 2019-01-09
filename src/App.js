import React, { Fragment, Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import ReduxToastr from 'react-redux-toastr';
import { persistor, store } from './store/store';
import NotFound from './components/404/NotFound';
import routes from './routes';
import HeaderComponent from './components/common/header/Header';
import Footer from './components/common/footer/Footer';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <Router>
            <Fragment>
              <HeaderComponent />
              <Switch>
                {
                  routes.map(route => (
                    <Route
                      exact={route.exact}
                      path={route.path}
                      key={route.path}
                      component={route.component}
                      />
                  ))
                }
                <Route component={NotFound} />
              </Switch>
              <Footer />
              <ReduxToastr
                timeOut={6000}
                newestOnTop
                preventDuplicates
                position="top-right"
                transitionIn="fadeIn"
                transitionOut="fadeOut"
                progressBar
                closeOnToastrClick
              />
            </Fragment>
          </Router>
        </PersistGate>
      </Provider>
    );
  }
}

export default App;
