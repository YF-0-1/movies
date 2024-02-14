/* eslint-disable jsx-a11y/img-redundant-alt */
import { Link, useParams } from 'react-router-dom';
import { TiStarFullOutline } from 'react-icons/ti';
import { useNavigate } from 'react-router-dom';


export const FirstSectionAboutUs = (props) => {
    const DB = props.DB;
    const { id } = useParams();
    let movie = DB.find((element) => element.title === id);

    const navigate = useNavigate()


    const filter = DB.filter((element) => element.genre === movie.genre && element.title !== movie.title);


    return (
        <>
            <div className="h-screen w-100 bg-slate-900 ">
                <div className="w-100 h-[7vh] bg-slate-700 flex justify-center items-center">
                    <Link className='rounded-full bg-slate-900 px-4 py-2 text-white no-underline text-3xl' to={"/"}>Home</Link>
                </div>
                <div className="w-100 h-[50vh] flex justify-center items-center pt-3">
                    <div className="bg-sky-800 w-[15%] h-[100%] rounded-s-lg">
                        <img className="w-[100%] h-[100%] rounded-s-lg" src={movie.cover} alt="" />
                    </div>
                    <div className="bg-gray-800 w-[40%] h-[100%] rounded-e-lg flex flex-col items-center justify-center">
                        <div className="w-75">
                            <h2 className="text-sky-300">Title : <span className="text-rose-500">{movie.title}</span></h2>
                            <h4 className="text-sky-300">Rate : <span className="text-rose-500">{movie.rate}</span></h4>
                            <h4 className="text-sky-300">Genre : <span className="text-rose-500">{movie.genre}</span></h4>
                        </div>
                        <p className="text-sky-300 w-75 font-bold">Description : <span className="text-rose-500 font-normal">{movie.description}</span></p>
                    </div>
                </div>
                <div className="flex flex-wrap gap-4 justify-center items-center pt-4">
                    {filter.map((element, index) => (
                        <div onClick={() => navigate(`/about/${element.title}`)} key={index} className="w-fit h-[40vh] relative overflow-hidden group">
                            <img className='hover:opacity-30 h-100' width={"200px"} src={element.cover} alt={`image-${index + 1}`} />
                            <div className="absolute bottom-[-100%] bg-black bg-opacity-50 h-[20%] left-0 w-full text-center flex flex-wrap items-center justify-around group-hover:bottom-0 transition-all delay-200">
                                <h6 className="text-white w-50">{element.title}</h6>
                            </div>
                            <div className="absolute top-5 h-[20%] right-[100%] group-hover:right-[30%] transition-all delay-200 ">
                                <h5 className='text-white flex justify-center text-center rounded-full bg-yellow-400'><TiStarFullOutline />{element.rate} </h5>
                                <h5 className='text-white w-fit py-1 px-2 rounded-full bg-slate-600'>{element.genre}</h5>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};
