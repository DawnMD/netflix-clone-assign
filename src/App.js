import Header from './components/Header';
import Movies from './pages/Movies';
import Detail from './pages/Detail';
import { Redirect, Route, Switch } from 'react-router';
import { useDispatch } from 'react-redux';
import {
	fetchDiscoverMovies,
	fetchPopularMovies,
	fetchTopRatedMovies,
} from './redux/slice/movieSlice';
import { useEffect } from 'react';

function App() {
	//genreLink = https://api.themoviedb.org/3/genre/movie/list?api_key=ed8703f3f7f3eb8eab6620b68091e297&language=en-US
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(fetchDiscoverMovies());
		dispatch(fetchPopularMovies());
		dispatch(fetchTopRatedMovies());
	}, [dispatch]);
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
