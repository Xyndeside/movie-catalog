import { Outlet } from 'react-router-dom';
import Header from "./components/Header.tsx";
import Footer from "./components/Footer.tsx";

function Layout() {
	return (
		<div className="min-h-screen flex flex-col bg-gray-900 text-white">
			<Header />

			<main className="flex-grow px-4 py-6">
				<Outlet />
			</main>

			<Footer />
		</div>
	);
}

export default Layout;
