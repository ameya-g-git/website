import { RouterProvider, Navigate, createBrowserRouter } from "react-router-dom";
import "./build.css";
import Root from "./routes/Root";
import Home, { loader as HomeLoader } from "./routes/HomePage";
import Projects, { loader as ProjectsLoader } from "./routes/ProjectsPage";
import PortfolioPage from "./routes/PortfolioPage";
import PortfolioGFX from "./routes/PortfolioGFX";
import PortfolioUI from "./routes/PortfolioUI";
import NotFound from "./routes/NotFound";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Root />,
		children: [
			{ index: true, element: <Home />, loader: HomeLoader },
			{
				path: "/projects",
				element: <Projects />,
				loader: ProjectsLoader,
				children: [
					{ path: "/projects/*", element: <Navigate to="/projects/" replace={true} /> },
				],
			},
			{
				path: "/portfolio",
				element: <PortfolioPage />,
				children: [
					{ index: true, path: "/portfolio/gfx", element: <PortfolioGFX /> },
					{ path: "/portfolio/ui", element: <PortfolioUI /> },
					{ path: "/portfolio/*", element: <Navigate to="/404" /> },
				],
			},
			{
				path: "/*",
				element: <Navigate to="/404" />,
			},
			{
				path: "/404",
				element: <NotFound />,
			},
		],
	},
]);

export default function App() {
	return <RouterProvider router={router} />;
}
