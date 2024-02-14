import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home/home.jsx';
import { AboutUs } from './pages/AboutUs/aboutUs.jsx';
import { ContactUs } from './pages/ContactUs/contactUs.jsx';
import Header from './layouts/Header.jsx';
import { useState } from 'react';


function App() {

    const [DB, setDB] = useState([
        {
            title : "The shawshank redemption",
            cover : require("../src/assets/images/shawshank-Redemption.jpg"),
            rate : 9.5,
            description : "In the near future, as technology advances and society grapples with the consequences of its own progress, unfolds in a world where memories can be recorded, altered, and even erased. The story revolves around Alex Mercer, a brilliant neuroscientist, who stumbles upon a groundbreaking discovery that allows individuals to relive and manipulate their past experiences.",
            genre : "Action"
        },
        {
            title : "A silent voice",
            cover : require("../src/assets/images/a-silent-voice.jpg"),
            rate : 9.4,
            description : "In the near future, as technology advances and society grapples with the consequences of its own progress, unfolds in a world where memories can be recorded, altered, and even erased. The story revolves around Alex Mercer, a brilliant neuroscientist, who stumbles upon a groundbreaking discovery that allows individuals to relive and manipulate their past experiences.",
            genre : "Anime"
        },
        {
            title : "The dark knight",
            cover : require("../src/assets/images/batman.jpg"),
            rate : 9.1,
            description : "In the near future, as technology advances and society grapples with the consequences of its own progress, unfolds in a world where memories can be recorded, altered, and even erased. The story revolves around Alex Mercer, a brilliant neuroscientist, who stumbles upon a groundbreaking discovery that allows individuals to relive and manipulate their past experiences.",
            genre : "Action"
        },
        {
            title : "Fight club",
            cover : require("../src/assets/images/fight-club.jpg"),
            rate : 9.2,
            description : "In the near future, as technology advances and society grapples with the consequences of its own progress, unfolds in a world where memories can be recorded, altered, and even erased. The story revolves around Alex Mercer, a brilliant neuroscientist, who stumbles upon a groundbreaking discovery that allows individuals to relive and manipulate their past experiences.",
            genre : "suspense"
        },
        {
            title : "Good will hunting",
            cover : require("../src/assets/images/good-will-hunting.jpg"),
            rate : 9.1,
            description : "In the near future, as technology advances and society grapples with the consequences of its own progress, unfolds in a world where memories can be recorded, altered, and even erased. The story revolves around Alex Mercer, a brilliant neuroscientist, who stumbles upon a groundbreaking discovery that allows individuals to relive and manipulate their past experiences.",
            genre : "drama"
        },
        {
            title : "The wolf of the wall street",
            cover : require("../src/assets/images/thewolf-of-wall-street.jpg"),
            rate : 9.5,
            description : "In the near future, as technology advances and society grapples with the consequences of its own progress, unfolds in a world where memories can be recorded, altered, and even erased. The story revolves around Alex Mercer, a brilliant neuroscientist, who stumbles upon a groundbreaking discovery that allows individuals to relive and manipulate their past experiences.",
            genre : "drama"
        },
        {
            title : "Who am i",
            cover : require("../src/assets/images/who-am-i.jpg"),
            rate : 9.5,
            description : "In the near future, as technology advances and society grapples with the consequences of its own progress, unfolds in a world where memories can be recorded, altered, and even erased. The story revolves around Alex Mercer, a brilliant neuroscientist, who stumbles upon a groundbreaking discovery that allows individuals to relive and manipulate their past experiences.",
            genre : "suspense"
        },
        {
            title : "Parasite",
            cover : require("../src/assets/images/parasite.jpg"),
            rate : 9.5,
            description : "In the near future, as technology advances and society grapples with the consequences of its own progress, unfolds in a world where memories can be recorded, altered, and even erased. The story revolves around Alex Mercer, a brilliant neuroscientist, who stumbles upon a groundbreaking discovery that allows individuals to relive and manipulate their past experiences.",
            genre : "drama"
        },
        {
            title : "The imitation game",
            cover : require("../src/assets/images/the-imitation-game.jpg"),
            rate : 9.2,
            description : "In the near future, as technology advances and society grapples with the consequences of its own progress, unfolds in a world where memories can be recorded, altered, and even erased. The story revolves around Alex Mercer, a brilliant neuroscientist, who stumbles upon a groundbreaking discovery that allows individuals to relive and manipulate their past experiences.",
            genre : "suspense"
        },
    ])


    return (
        <>  
            <Header/>
            <Routes>

                <Route path="/" element={<Home DB={DB} setDB={setDB}  />} />
                <Route path="/about/:id" element={<AboutUs DB={DB} setDB={setDB}/>} />
                <Route path="/contact" element={<ContactUs />} />

            </Routes>
        </>
    );
}

export default App;
