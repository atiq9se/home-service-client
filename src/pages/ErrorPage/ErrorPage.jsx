import errorimg from '../../assets/error.jpg'
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='flex flex-col justify-center items-center'>
            <img src={errorimg} alt="" className='w-2/3' />
            <div className='text-center'>
               <Link to='/' className='btn bg-blue-600 border-none text-white px-20 text-center hover:bg-teal-600 mt-5'>Back to Home</Link>
            </div>
        </div>
    );
};

export default ErrorPage;