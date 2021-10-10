import Header from './components/Header';
import Movies from './pages/Movies';
import Detail from './pages/Detail';
import { Redirect, Route, Switch } from 'react-router';
import ScrollToTop from './components/HOC/ScrollToTop';

function App() {
  return (
    <div className='flex flex-col'>
      <Header />
      <ScrollToTop />
      <Switch>
        {/* switching to movies page on load */}
        <Route exact path='/'>
          <Redirect to='/movies' />
        </Route>
        {/* actual movies page */}
        <Route exact path='/movies' component={Movies} />
        {/* <Route path='/movies/:id' component={Detail} /> */}
      </Switch>
    </div>
  );
}

export default App;
