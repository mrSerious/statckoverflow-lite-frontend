import React, { Fragment, Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { persistor, store } from './store/store';
import NotFound from './components/404/NotFound';
import routes from './routes';

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
            </Fragment>
          </Router>
        </PersistGate>
      </Provider>
    );
  }
}

export default App;
