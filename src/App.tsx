import { BrowserRouter as Router, Routes } from 'react-router-dom';
import { createRoute, routes } from './router';
import { Provider } from 'react-redux';
import { store } from './redux/store';

const App = () => (
  <Provider store={store}>
    <Router>
      <Routes>{routes.map(createRoute)}</Routes>
    </Router>
  </Provider>
);

export default App;
