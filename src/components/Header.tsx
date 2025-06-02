import { Link } from 'react-router-dom';
import NavBar from "./NavBar.tsx";

export default function Header() {
	return (
		<header className="bg-gray-800 shadow-lg">
			<div className="container mx-auto px-4 py-4 flex justify-between items-center text-white">
				<Link to="/" className="text-2xl font-bold">
					FilmFinder
				</Link>

				<NavBar />
			</div>
		</header>
	);
}
