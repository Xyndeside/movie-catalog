import { useParams, useNavigate } from 'react-router-dom';
import { movies } from '../data.ts';
import MovieDetails from '../components/MovieDetails.tsx';

export default function MoviePage() {
	const { id } = useParams();
	const navigate = useNavigate();

	const movie = movies.find((m) => m.id === Number(id));

	if (!movie) {
		return (
			<div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white p-4">
				<h2 className="text-3xl font-bold mb-4">Фильм не найден</h2>
				<button
					onClick={() => navigate('/catalog')}
					className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded"
				>
					Вернуться в каталог
				</button>
			</div>
		);
	}

	const {
		title,
		year,
		genre,
		rating,
		poster,
		description,
		director,
		cast,
		duration,
		language,
		country,
		trailer,
	} = movie;

	return (
		<div className="min-h-screen flex flex-col bg-gray-900 text-white">
			<div className="max-w-5xl mx-auto p-6">
				<button
					onClick={() => navigate(-1)}
					className="mb-6 text-blue-400 hover:text-blue-600 transition"
				>
					← Назад
				</button>

				<div className="flex flex-col md:flex-row gap-6">
					<img
						src={poster}
						alt={title}
						className="w-full md:w-1/3 rounded-lg shadow-lg object-cover"
					/>

					<MovieDetails
						title={title}
						year={year}
						rating={rating}
						genre={genre}
						description={description}
						director={director}
						cast={cast}
						duration={duration}
						language={language}
						country={country}
						trailer={trailer}
					/>
				</div>
			</div>
		</div>
	);
}
