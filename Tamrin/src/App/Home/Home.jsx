import Aboutus from "../../Aboutus/Aboutus";
import Questions from "../../Questions/Questions";
import Reserve from "../../Reserve/Reserve";
// import Reserve from "../../Reserve/Reserve";
import Service from "../../Service/Service";
import Homefirst from "../Homefirst/Homefirst";


function Home() {
    return (
        <div>
            <Homefirst />
            <Service />
            <Aboutus />
            <Questions />
            <Reserve />
        </div>
    )
}

export default Home;