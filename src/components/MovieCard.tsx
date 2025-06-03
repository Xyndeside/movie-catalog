import { useNavigate } from 'react-router-dom';
import type {Movie} from "../data.ts";

interface MovieCardProps {
	movie: Movie;
}

export default function MovieCard({ movie }: MovieCardProps) {
	const { id, title, year, genre, rating, poster } = movie;
	const navigate = useNavigate();

	return (
		<div
			className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow cursor-pointer transform transition-transform duration-300 hover:scale-105"
			onClick={() => navigate(`/details/${id}`)}
		>
			<img src={poster} alt={title} className="w-full h-64 object-cover" />
			<div className="p-4">
				<h3 className="text-xl font-semibold mb-1">
					{title} ({year})
				</h3>
				<p className="text-gray-400 text-sm mb-1">Жанр: {genre.join(', ')}</p>
				<p className="text-yellow-400 font-semibold">Рейтинг: {rating}</p>
			</div>
		</div>
	);
}
