import Header from "../share/header/Header";
import Leftside from "../share/leftside/Leftside";
import Navbar from "../share/navabr/Navbar";
import Right from "../share/rightside/Right";



const Home = () => {
    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mt-5">
                <div>
                    <Leftside></Leftside>
                </div>
                <div className="col-span-2 ">
                 <h2 className="text-4xl">News coming soon.....</h2>
                </div>
                <div className="">
                    <Right></Right>
                </div>
            </div>
        </div>
    );
};

export default Home;