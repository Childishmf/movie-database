import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageAbout from "./pages/page-about"
import PageHome from "./pages/page-home"

function AppRouter() {
	return (
		<BrowserRouter>
			<div className="wrapper">
				<main>
					<Routes>
						<Route path="/" exact element={<PageHome />} />	
						<Route path="/about" element={<PageAbout />} />
					</Routes>
				</main>
			</div>
		</BrowserRouter>
	);
}

export default AppRouter;
