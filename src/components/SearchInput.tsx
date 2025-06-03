import {type ChangeEvent, useState} from "react";
import type {Movie} from "../data.ts";

interface SearchProps {
    movies: Movie[];
    onSearch: (results: Movie[]) => void;
}

export default function SearchInput({ movies, onSearch }: SearchProps) {
    const [query, setQuery] = useState('');

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setQuery(value);

        const filtered = movies.filter(movie =>
            movie.title.toLowerCase().includes(value.toLowerCase())
        );

        onSearch(filtered);
    };

    return (
        <div className="mb-4">
            <input
                type="text"
                value={query}
                onChange={handleChange}
                placeholder="Поиск по названию..."
                className="w-full p-2 rounded border border-gray-600 bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
        </div>
    );
}