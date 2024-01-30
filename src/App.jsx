import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home/home.jsx';
import { AboutUs } from './pages/AboutUs/aboutUs.jsx';
import { ContactUs } from './pages/ContactUs/contactUs.jsx';
import Header from './layouts/Header.jsx';


function App() {
    return (
        <>  
            <Header/>
            <Routes>

                <Route path="/" element={<Home />} />
                <Route path="/about" element={<AboutUs />} />
                <Route path="/contact" element={<ContactUs />} />

            </Routes>
        </>
    );
}

export default App;
