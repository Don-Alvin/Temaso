import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
import LandingPage from "./Pages/LandingPage"
import Layout from "./Components/Layout/Layout"
import Dashboard from "./Pages/Dashboard"
import { AuthContextProvider } from "./Features/Auth/AuthContext"
import ErrorPage from "./Pages/ErrorPage"
import { HelmetProvider } from "react-helmet-async"
import Login from "./Features/Auth/Login"
import Register from "./Features/Auth/Register"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import Projects from "./Components/Dashboard/Projects"
import Settings from "./Components/Dashboard/Settings"
import Teams from "./Components/Dashboard/Teams"
import DashboardLayout from "./Components/Dashboard/DashBoardLayout.jsx/DashboardLayout"


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Layout />}>
        <Route index element={<LandingPage />} />
        <Route path='login' element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="dashboard" element={<DashboardLayout />}>
          <Route index element={<Projects />} />
          <Route path="teams" element={<Teams />} />
          <Route path="settings" element={<Settings />} /> 
        </Route>
        <Route path="*" element={<ErrorPage />}/>
      </Route>
    </Route>
  )
)

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0
    }
  }
})

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools />
      <AuthContextProvider>
        <HelmetProvider>
          <RouterProvider router={router} />
        </HelmetProvider>
      </AuthContextProvider>
      <ToastContainer
          position="top-center"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
    </QueryClientProvider>
    
  )
}

export default App