import { useState } from 'react';
import { FirstSectionHome } from './section1';

import { TiStarFullOutline } from "react-icons/ti";
import { useNavigate } from 'react-router-dom';


export const SecondSectionHome = () => {
    const [search, setsearch] = useState('')

    const [db, setdb] = useState([
        {
            title : "The shawshank redemption",
            cover : require("../../../assets/images/shawshank-Redemption.jpg"),
            rate : 9.5,
            description : "In the near future, as technology advances and society grapples with the consequences of its own progress, unfolds in a world where memories can be recorded, altered, and even erased. The story revolves around Alex Mercer, a brilliant neuroscientist, who stumbles upon a groundbreaking discovery that allows individuals to relive and manipulate their past experiences.",
            genre : "prison"
        },
        {
            title : "A silent voice",
            cover : require("../../../assets/images/a-silent-voice.jpg"),
            rate : 9.4,
            description : "In the near future, as technology advances and society grapples with the consequences of its own progress, unfolds in a world where memories can be recorded, altered, and even erased. The story revolves around Alex Mercer, a brilliant neuroscientist, who stumbles upon a groundbreaking discovery that allows individuals to relive and manipulate their past experiences.",
            genre : "Anime"
        },
        {
            title : "The dark knight",
            cover : require("../../../assets/images/batman.jpg"),
            rate : 9.1,
            description : "In the near future, as technology advances and society grapples with the consequences of its own progress, unfolds in a world where memories can be recorded, altered, and even erased. The story revolves around Alex Mercer, a brilliant neuroscientist, who stumbles upon a groundbreaking discovery that allows individuals to relive and manipulate their past experiences.",
            genre : "Action"
        },
        {
            title : "Fight club",
            cover : require("../../../assets/images/fight-club.jpg"),
            rate : 9.2,
            description : "In the near future, as technology advances and society grapples with the consequences of its own progress, unfolds in a world where memories can be recorded, altered, and even erased. The story revolves around Alex Mercer, a brilliant neuroscientist, who stumbles upon a groundbreaking discovery that allows individuals to relive and manipulate their past experiences.",
            genre : "suspense"
        },
        {
            title : "Good will hunting",
            cover : require("../../../assets/images/good-will-hunting.jpg"),
            rate : 9.1,
            description : "In the near future, as technology advances and society grapples with the consequences of its own progress, unfolds in a world where memories can be recorded, altered, and even erased. The story revolves around Alex Mercer, a brilliant neuroscientist, who stumbles upon a groundbreaking discovery that allows individuals to relive and manipulate their past experiences.",
            genre : "drama"
        },
        {
            title : "The wolf of the wall street",
            cover : require("../../../assets/images/thewolf-of-wall-street.jpg"),
            rate : 9.5,
            description : "In the near future, as technology advances and society grapples with the consequences of its own progress, unfolds in a world where memories can be recorded, altered, and even erased. The story revolves around Alex Mercer, a brilliant neuroscientist, who stumbles upon a groundbreaking discovery that allows individuals to relive and manipulate their past experiences.",
            genre : "Adventure"
        },
        {
            title : "Who am i",
            cover : require("../../../assets/images/who-am-i.jpg"),
            rate : 9.5,
            description : "In the near future, as technology advances and society grapples with the consequences of its own progress, unfolds in a world where memories can be recorded, altered, and even erased. The story revolves around Alex Mercer, a brilliant neuroscientist, who stumbles upon a groundbreaking discovery that allows individuals to relive and manipulate their past experiences.",
            genre : "suspense"
        },
        {
            title : "Parasite",
            cover : require("../../../assets/images/parasite.jpg"),
            rate : 9.5,
            description : "In the near future, as technology advances and society grapples with the consequences of its own progress, unfolds in a world where memories can be recorded, altered, and even erased. The story revolves around Alex Mercer, a brilliant neuroscientist, who stumbles upon a groundbreaking discovery that allows individuals to relive and manipulate their past experiences.",
            genre : "Drama"
        },
        {
            title : "The imitation game",
            cover : require("../../../assets/images/the-imitation-game.jpg"),
            rate : 9.2,
            description : "In the near future, as technology advances and society grapples with the consequences of its own progress, unfolds in a world where memories can be recorded, altered, and even erased. The story revolves around Alex Mercer, a brilliant neuroscientist, who stumbles upon a groundbreaking discovery that allows individuals to relive and manipulate their past experiences.",
            genre : "suspense"
        },
    ])


    const navigate = useNavigate()
    
    
    const filter = db.filter((element) =>{
        return element.title.toLowerCase().includes(search.toLowerCase())
    })

    // const history = history();

    // function handleClick() {
    //     history.push('/my-page', { db });
    // }

    return (
        <div className="flex flex-wrap bg-slate-900 h-fit py-9 w-100 px-20 gap-4">
            <FirstSectionHome chercher={setsearch} />
            {
                filter.map((element, index) => 
                    <div onClick={() => navigate("/about")} key={index} className="group flex flex-wrap hover:scale-105 duration-700 relative  overflow-hidden">
                        <img className='hover:opacity-30' width={"320px"} src={element.cover} alt={`image-${index + 1}`} />
                        <div className="absolute bottom-[-100%]  bg-black bg-opacity-50 h-[30%] left-0 w-full text-center flex flex-wrap items-center justify-around group-hover:bottom-0 transition-all delay-200">
                            <h3 className="text-white w-50">{element.title}</h3>
                        </div>
                        <div className="absolute top-5 h-[20%] left-[-40%] group-hover:left-5 transition-all delay-200 ">
                            <h5 className='text-white flex justify-center text-center rounded-full bg-yellow-400'><TiStarFullOutline />{element.rate} </h5>
                            <h5 className='text-white w-fit py-1 px-3  rounded-full bg-slate-600'>{element.genre}</h5>
                        </div>
                    </div>
                )
            }
        </div>
    );
}
