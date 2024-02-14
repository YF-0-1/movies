// import { FirstSectionHome } from './components/section1.jsx'
import { SecondSectionHome } from './components/section2.jsx'

export const Home = (props) => {
    return (
        <>  
            {/* <FirstSectionHome/> */}
            <SecondSectionHome DB={props.DB} setDB={props.setDB}/>
        </>
    )
}
