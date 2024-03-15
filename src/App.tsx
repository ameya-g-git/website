import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './build.css'
import Root from './routes/Root'
import Home from './routes/HomePage'
import Projects from './routes/ProjectsPage'
import Portfolio from './routes/PortfolioPage'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "/projects",
        element: <Projects />
      },
      {
        path: "/portfolio",
        element: <Portfolio />
      }
    ]
  }
])

export default function App() {
  return (
    <RouterProvider router={router} />
  )
}