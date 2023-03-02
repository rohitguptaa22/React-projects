import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Home from "./components/Home";
import Product from "./components/Product";
import "./styles/App.css";
const App = () => {
	return (
		<Router>
			<Header />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/about' element={<About />} />
				<Route path='/contact' element={<Contact />} />
				{/* <Route path='/product/:id' element={<Product />} /> */}
				<Route path='*' element={<div>Page not found 404</div>} />
			</Routes>
		</Router>
	);
};

export default App;
