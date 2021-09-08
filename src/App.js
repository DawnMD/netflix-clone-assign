import Header from './components/Header';
import Movies from './pages/Movies';
import Detail from './pages/Detail';
import { Redirect, Route, Switch } from 'react-router';

function App() {
	//genreLink = https://api.themoviedb.org/3/genre/movie/list?api_key=ed8703f3f7f3eb8eab6620b68091e297&language=en-US
	return (
		<div className='flex flex-col gap-8'>
			<Header />
			<Switch>
				{/* switching to movies page on load */}
				<Route exact path='/'>
					<Redirect to='/movies' />
				</Route>
				{/* actual movies page */}
				<Route exact path='/movies' component={Movies} />
				<Route path='/movies/:id' component={Detail} />
			</Switch>
		</div>
	);
}

export default App;
