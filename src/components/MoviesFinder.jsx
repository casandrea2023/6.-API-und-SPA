import { Route, Link } from 'wouter';
import SearchPage from './SearchPage';
import ContactPage from './ContactPage';
import Movie from './Movie';

export default function MoviesFinder() {
	return (
		<div className="movies-finder">
			<nav className="main-navigation">
				<Link to="/">Start</Link>
				<Link to="/kontakt">Kontakt</Link>
			</nav>
			<Route path="/" component={SearchPage} />
			<Route path="/kontakt" component={ContactPage} />
			<Route path="/movie/:id" component={Movie} />
		</div>
	);
}
