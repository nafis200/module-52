import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const Breakingnews = () => {
    return (
        <div className="flex">
            <button className="btn btn-secondary">Breaking news</button>
            <Marquee pauseOnClick={true} speed={100}>
          I <Link to="https://www.google.com/search?q=tailwind+css&oq=&gs_lcrp=EgZjaHJvbWUqCQgBECMYJxjqAjIJCAAQIxgnGOoCMgkIARAjGCcY6gIyDwgCEC4YJxjHARjqAhjRAzIJCAMQIxgnGOoCMgkIBBAjGCcY6gIyCQgFECMYJxjqAjIJCAYQIxgnGOoCMg8IBxAuGCcYxwEY6gIY0QPSAQkxNTI1ajBqMTWoAgiwAgE&sourceid=chrome&ie=UTF-8" className="mr-12">tailwind css.</Link>
          <Link>Lorem, ipsum.</Link>
         </Marquee>
        </div>
    );
};

export default Breakingnews;

