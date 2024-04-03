import logo from '../../../../dragon-news-resources/assets/logo.png'
import moment from 'moment';

const Header = () => {
    return (
        <div className='text-center'>
           <img className='mx-auto' src={logo} alt="" />
           <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste, dolorum?</p>
           <p className='text-xl'>{moment().format("dddd, MMMM D, YYYY")}</p>
        </div>
    );
};


export default Header;

