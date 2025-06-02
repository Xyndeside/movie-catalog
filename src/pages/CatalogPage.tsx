import MovieCard from '../components/MovieCard.tsx';

interface CatalogPageProps {
	movies: {
		id: number;
		title: string;
		year: number;
		genre: string[];
		rating: number;
		poster: string;
	}[];
}

export default function CatalogPage({ movies }: CatalogPageProps) {
	return (
		<div className="min-h-screen flex flex-col bg-gray-900 text-white px-6 py-10">
			<h2 className="text-3xl font-bold mb-8 text-center">Каталог фильмов</h2>
			<div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
				{movies.map(({ id, title, year, genre, rating, poster }) => (
					<MovieCard movie={{ id, title, year, genre, rating, poster }} key={id} />
				))}
			</div>
		</div>
	);
}
