import React from 'react';
import './input.css';
import Header from "./comp/header";
import Footer from "./comp/footer";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {Landing} from "./comp/landing_page";
import AboutPage from "./about/about";
import PageInProgress from "./comp/mintancesite/progresspage";

function App() {
    return (
        <Router>
            <div>
                <Header />
                <Routes>
                    <Route path="/" element={<Landing />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/PageInProgress" element={<PageInProgress />} />
                    <Route path="*" element={
                        <div className="min-h-screen flex items-center justify-center">
                            <h1 className="text-4xl font-bold">404 - Page Not Found</h1>
                        </div>
                    } />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
