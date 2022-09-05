import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AllTransactions from "./components/AllTransactions.js/AllTransactions";
import Footer from "./components/Footer";
import Layout from "./components/Layout";
import Navbar from "./components/Navbar";

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route exact path="/" element={<Layout />} />
                <Route exact path="/transactions" element={<AllTransactions />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
