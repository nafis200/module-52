import { Outlet } from "react-router";



const Roots = () => {
    return (
        <div className="max-w-6xl mx-auto font-poppins">
            <Outlet></Outlet>
        </div>
    );
};

export default Roots;

