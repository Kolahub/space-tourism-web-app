import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Destination, { Loader as destinationLoader } from "./pages/Destination";
import Crew, { Loader as crewLoader } from "./pages/Crew";
import Technology, {Loader as technologyLoader} from "./pages/Technology";
import RootLayout from "./pages/RootLayout";
import Error from "./pages/Error";

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <Error />,
    children: [
      {index: true, element: <Home /> },
      {path: 'destination', element: <Destination />, loader: destinationLoader},
      {path: 'crew', element: <Crew />, loader: crewLoader},
      {path: 'technology', element: <Technology />, loader: technologyLoader}
    ]
  }
])

function App() {
  return <RouterProvider router={router} />
}

export default App;
