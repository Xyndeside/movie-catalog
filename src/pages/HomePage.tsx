import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function HomePage() {
	const [animate, setAnimate] = useState(false);
	const navigate = useNavigate();

	useEffect(() => {
		const timer = setTimeout(() => setAnimate(true), 100);
		return () => clearTimeout(timer);
	}, []);

	return (
		<div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
			<h1
				className={`text-4xl md:text-6xl font-bold text-white mb-8 transition-all duration-700 ease-out
          		${animate ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}
			>
				Добро пожаловать на <span className="text-pink-700">FilmFinder</span>!
			</h1>

			<button
				onClick={() => navigate('/catalog')}
				className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3
							rounded-lg shadow-lg transition-colors duration-300 cursor-pointer"
			>
				Перейти в каталог
			</button>
		</div>
	);
}
