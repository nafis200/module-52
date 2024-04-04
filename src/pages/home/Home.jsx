import { useLoaderData } from "react-router";
import Header from "../share/header/Header";
import Leftside from "../share/leftside/Leftside";
import Navbar from "../share/navabr/Navbar";
import Right from "../share/rightside/Right";
import Breakingnews from "./Breakingnews";
import News from "./News";



const Home = () => {
    const news = useLoaderData()
    console.log(news);
    return (
        <div>
            <Header></Header>
            <Breakingnews></Breakingnews>
            <Navbar></Navbar>
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mt-5">
                <div>
                    <Leftside></Leftside>
                </div>
                <div className="col-span-2 ">
                 {
                    news.map(aNews => <News newes={aNews}></News> )
                 }
                </div>
                <div className="">
                    <Right></Right>
                </div>
            </div>
        </div>
    );
};

export default Home;