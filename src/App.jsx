import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
import { ToastContainer } from "react-toastify"
import LandingPage from "./Pages/LandingPage"
import Layout from "./Components/Layout/Layout"
import AccountPage from "./Pages/AccountPage"
import { AuthContextProvider } from "./Features/Auth/AuthContext"
import ErrorPage from "./Pages/ErrorPage"
import { HelmetProvider } from "react-helmet-async"
import Login from "./Features/Auth/Login"
import Register from "./Features/Auth/Register"


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Layout />}>
        <Route index element={<LandingPage />} />
        <Route path="account" element={<AccountPage />}></Route>
        <Route path='login' element={<Login />} />
        <Route path="register" element={<Register />} />
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
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
      </AuthContextProvider>
    </QueryClientProvider>
    
  )
}

export default App