import React, { Fragment, Component } from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { persistor, store } from './store/store';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <Fragment>
            <h1>Hello</h1>
          </Fragment>
        </PersistGate>
      </Provider>
    );
  }
}

export default App;
