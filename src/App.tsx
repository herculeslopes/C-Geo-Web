import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "./Pages/Home"
import { Provider } from "react-redux";
import { store } from "./store";


function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
    }
  ]);

  return (
    <>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </>
  )
}

export default App
