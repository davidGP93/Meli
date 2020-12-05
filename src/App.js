import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Home from "./pages/home";
import SearchResults from './pages/searchResults';
import DetailProduct from './pages/detailProduct';
import NotFound from './pages/notFound';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/items' component={SearchResults} />
        <Route exact path='/items/:id' component={DetailProduct} />
        <Route exact path='*' component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
