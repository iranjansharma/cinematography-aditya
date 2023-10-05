import { Link } from 'react-router-dom';
import Div from '../components/Div';


const Photography = () => {
  return (
    <Div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 autofill:grid justify-center items-center my-6 ">
            <div className="text-center w-full h-[500px] lg:w-[500px] lg:h-[600px]  bg-red-500 rounded-xl"><Link to='/photography/fashion' className="inline items-center">Fashion</Link></div>
            <div className="text-center w-full h-[500px] lg:w-[500px] lg:h-[600px] bg-green-500  rounded-xl"><Link to='/photography/portrait' className="inline items-center">Portrait</Link></div>
            <div className="text-center w-full h-[500px] lg:w-[500px] lg:h-[600px] bg-yellow-500 rounded-xl"><Link to='/photography/automobile' className="inline items-center">Automobile</Link></div>
            <div className="text-center w-full h-[500px] lg:w-[500px] lg:h-[600px] bg-violet-500 rounded-xl"><Link to='/photography/ecom' className="inline items-center">E-comm</Link></div>
            <div className="text-center w-full h-[500px]  lg:w-[500px] lg:h-[600px] bg-cyan-500 rounded-xl"><Link to='/photography/product' className="inline items-center">Product</Link></div>
            <div className="text-center w-full h-[500px] lg:w-[500px] lg:h-[600px] bg-green-700 rounded-xl"><Link to='/photography/events' className="inline items-center">Events</Link></div>
        </div>
    </Div>
  )
}

export default Photography