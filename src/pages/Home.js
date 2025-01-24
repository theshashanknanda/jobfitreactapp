import About from "../components/About";
import Faq from "../components/Faq";
import Features from "../components/Features";
import Landing from "../components/Landing";
import NavBar from "../components/NavBar";

function Home(){
    return (
    <div>
        <NavBar></NavBar>
        <Landing></Landing>
        <About></About>
        <Faq></Faq>
        <Features></Features>
    </div>)
}

export default Home;