import { Route, RouterProvider, Routes, createBrowserRouter, createRoutesFromElements } from "react-router-dom"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { HelmetProvider } from "react-helmet-async"
import { AuthContextProvider } from "./Features/Auth/AuthContext"
import LandingPage from "./Pages/LandingPage"
import Layout from "./Components/Layout/Layout"
import ErrorPage from "./Pages/ErrorPage"
import Login from "./Features/Auth/Login"
import Register from "./Features/Auth/Register"
import Settings from "./Features/Settings/Settings"
import DashboardLayout from "./Components/Dashboard/DashBoardLayout.jsx/DashboardLayout"
import Projects from "./Features/Project/Projects"
import Tasks from "./Features/Tasks/Tasks"
import AddProjectForm from "./Features/Project/AddProjectForm"
import AddTaskForm from "./Features/Tasks/AddTaskForm"
import RequireAuth from "./helper/RequireAuth"
import EditProjectForm from "./Features/Project/EditProjectForm"
import EditTaskForm from "./Features/Tasks/EditTaskForm"


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Layout />}>
        <Route index element={<LandingPage />} />
        <Route path='login' element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="*" element={<ErrorPage />}/>
      </Route>
      <Route element={<RequireAuth />}>
          <Route path="/dashboard" element={<DashboardLayout />}>
            <Route index element={<Projects />} />
            <Route path=":projectId" element={<Tasks />}/>
            <Route path="settings" element={<Settings />} />
            <Route path="addproject" element={<AddProjectForm />} />
            <Route path=":projectId/addtask" element={<AddTaskForm />} />
            <Route path=":projectId/edit" element={<EditProjectForm />} />
            {/* <Route path=':projectId/:taskName/edit' element={<EditTaskForm />} /> */}
          </Route>
        </Route>
    </Route>
  )
)

const queryClient = new QueryClient()

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