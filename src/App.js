import "./App.css";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import HomePage from "./pages/HomePage";
import Luxarious from "./pages/Luxarious";

function App() {
	return (
		<div className="App">
			<HomePage />
			<AboutUs />
			<Luxarious />
			<ContactUs />
		</div>
	);
}

export default App;
