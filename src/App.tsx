import { createBrowserRouter, RouterProvider, Navigate } from "react-router";
import DashboardLayout from "./layouts/DashboardLayout";
import { patientNavigation } from "./config/navigation";
import DashboardPage from "./pages/patient/DashboardPage";
import AppointmentsPage from "./pages/patient/AppointmentsPage";
import DoctorsPage from "./pages/patient/DoctorsPage";

const router = createBrowserRouter([
  {
    path: "/patient",
    element: (
      <DashboardLayout
        items={patientNavigation}
        userName="Rahul Sharma"
        userRole="Patient"
      />
    ),

    children: [
      {
        index: true,
        element: <Navigate to="dashboard" replace />,
      },
      {
        path: "dashboard",
        element: <DashboardPage />,
      },
      {
        path: "appointments",
        element: <AppointmentsPage />,
      },
      {
        path: "doctors",
        element: <DoctorsPage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
