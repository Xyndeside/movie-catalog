import Trailer from './Trailer';

interface MovieDetailsProps {
	title: string;
	year: number;
	rating: number;
	genre: string[];
	description: string;
	director: string;
	cast: string[];
	duration: number;
	language: string;
	country: string;
	trailer?: string;
}

export default function MovieDetails({
	title,
	year,
	rating,
	genre,
	description,
	director,
	cast,
	duration,
	language,
	country,
	trailer,
}: MovieDetailsProps) {
	return (
		<div className="flex-1">
			<h1 className="text-4xl font-bold mb-2">
				{title} ({year})
			</h1>
			<p className="text-yellow-400 font-semibold mb-2">Рейтинг: {rating}</p>
			<p className="text-gray-400 mb-4">Жанр: {genre.join(', ')}</p>
			<p className="mb-4">{description}</p>

			<ul className="mb-4 space-y-1 text-gray-300">
				<li>
					<strong>Режиссёр:</strong> {director}
				</li>
				<li>
					<strong>В главных ролях:</strong> {cast.join(', ')}
				</li>
				<li>
					<strong>Длительность:</strong> {duration} мин.
				</li>
				<li>
					<strong>Язык:</strong> {language}
				</li>
				<li>
					<strong>Страна:</strong> {country}
				</li>
			</ul>

			{trailer && <Trailer trailerUrl={trailer} title={title} />}
		</div>
	);
}
