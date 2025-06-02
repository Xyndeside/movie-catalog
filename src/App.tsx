import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage.tsx";
import CatalogPage from "./pages/CatalogPage.tsx";
import DetailsPage from "./pages/DetailsPage.tsx";
import Layout from "./layout.tsx";
import {movies} from "./data.ts";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<HomePage />} />
					<Route path="catalog" element={<CatalogPage movies={movies} />} />
					<Route path="details/:id" element={<DetailsPage />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
