import { useParams } from "react-router";
import Header from "../share/header/Header";
import Right from "../share/rightside/Right";
import Navbar from "../share/navabr/Navbar";



const Newspage = () => {
    const {id} = useParams();
    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <div className="grid grid-cols-4">
                 <div className="col-span-3">
                    <h2 className="text-5xl">News Details</h2>
                    <p>{id}</p>
                 </div>
                 <div>
                    <Right></Right>
                 </div>
            </div>
            
        </div>
    );
};

export default Newspage;