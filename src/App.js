import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./Pages/About/About";
import Home from "./Pages/Home/Home/Home";
import Login from "./Pages/Login/Login/Login";
import SignUp from "./Pages/Login/SignUp/SignUp";
import NotFound from "./Pages/Notfound/NotFound";
import ServiceDetail from "./Pages/ServiceDetail/ServiceDetail";
import Footer from "./Pages/Shared/Footer/Footer";
import Header from "./Pages/Shared/Header/Header";

function App() {
	return (
		<div>
			<Header></Header>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/home" element={<Home />} />
				<Route path="/service/:serviceId" element={<ServiceDetail />} />
				<Route path="/about" element={<About />} />
				<Route path="/login" element={<Login></Login>} />
				<Route path="/signup" element={<SignUp></SignUp>} />
				<Route path="*" element={<NotFound></NotFound>} />
			</Routes>
			<Footer></Footer>
		</div>
	);
}

export default App;
