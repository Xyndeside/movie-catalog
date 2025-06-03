import MovieCard from '../components/MovieCard.tsx';
import type { Movie } from '../data.ts';
import SearchInput from '../components/SearchInput.tsx';
import { useState } from 'react';

interface CatalogPageProps {
	movies: Movie[];
}

export default function CatalogPage({ movies }: CatalogPageProps) {
	const [filteredMovies, setFilteredMovies] = useState(movies);

	return (
		<div className="min-h-screen flex flex-col bg-gray-900 text-white px-6 py-10">
			<h2 className="text-3xl font-bold mb-8 text-center">Каталог фильмов</h2>

			<SearchInput movies={movies} onSearch={setFilteredMovies} />

			<div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
				{filteredMovies.map(({ id, title, year, genre, rating, poster }) => (
					<MovieCard movie={{ id, title, year, genre, rating, poster }} key={id} />
				))}
			</div>
		</div>
	);
}
