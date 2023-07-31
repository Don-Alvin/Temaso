import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom"
import LandingPage from "./Pages/LandingPage"


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Layout />}>
        <Route index element={<LandingPage />} />
        <Route path="account"></Route>
      </Route>
    </Route>
  )
)

const App = () => {
  return (
    <div>App</div>
  )
}

export default App