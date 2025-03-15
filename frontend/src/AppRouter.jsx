import { Routes, Route } from "react-router-dom";
import Landing from "./pages/public/Landing";
import Login from "./pages/public/Login";
import Error404 from "./pages/public/Error404";
import MainLayout from "./components/layout/MainLayout";
import ProtectedRoute from "./components/layout/ProtectedRoute";
import Home from "./pages/protected/Home";

const AppRouter = () => {
	return (
		<Routes>
			<Route path="/" element={<Landing />} />
		  <Route path="/login" element={<Login />} />
  
			{/* Ruta protegida con layout */}
			<Route
				element={
					<ProtectedRoute>
						<MainLayout />
					</ProtectedRoute>
				}
			>
				<Route path="/home" element={<Home />} />
			</Route>

			<Route path="*" element={<Error404 />} />
		</Routes>
	);
};

export default AppRouter;
