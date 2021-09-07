import Header from './components/Header';
import { Redirect, Route } from 'react-router';

function App() {
	return (
		<div>
			<Header />
			<Route exact path='/'>
				<Redirect to='/movies' />
			</Route>
		</div>
	);
}

export default App;
