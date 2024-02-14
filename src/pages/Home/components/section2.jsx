/* eslint-disable jsx-a11y/img-redundant-alt */
import { useEffect, useState } from 'react';
import { FirstSectionHome } from './section1';

import { TiStarFullOutline } from "react-icons/ti";
import { useNavigate } from 'react-router-dom';


export const SecondSectionHome = (props) => {
    const [search, setsearch] = useState('')

    
    const DB = props.DB
    
    useEffect(()=> {
        console.log("hola")
    },[search])

    const navigate = useNavigate()
    
    
    const filter = DB.filter((element) =>{
        return element.title.toLowerCase().includes(search.toLowerCase())
    })

    
    return (
        <div className="flex flex-wrap bg-slate-900 h-fit py-9 w-100 px-20 gap-4">
            <FirstSectionHome chercher={setsearch} />
            {
                filter.map((element, index) => 
                    <div onClick={() => navigate(`/about/${element.title}`)} key={index} className="group flex flex-wrap hover:scale-105 duration-700 relative  overflow-hidden">
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
