import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageAbout from "./pages/page-about"
import PageHome from "./pages/page-home"
import PageDetails from "./pages/page-details";
import PageFavourites from "./pages/page-favourites";

function AppRouter() {
	return (
		<BrowserRouter>
			<div className="wrapper">
				<main>
					<Routes>
						<Route path="/" exact element={<PageHome />} />	
						<Route path="/about" element={<PageAbout />} />
						<Route path="/details" element={<PageDetails />} />
						<Route path="/favourites" element={<PageFavourites />} />
					</Routes>
				</main>
			</div>
		</BrowserRouter>
	);
}

export default AppRouter;
