import { Link } from "react-router-dom";
import Div from "../components/Div";

const Photography = () => {
  return (
    <Div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 autofill:grid justify-center items-center my-6 ">
        <div>
          <Link to="/photography/fashion">
            <img
              src="https://github.com/iranjansharma/cinematography-aditya/blob/main/src/assets/Fashion.jpg?raw=true"
              alt=""
              className="w-full h-[500px] lg:w-[500px] lg:h-[600px] rounded-xl object-cover grayscale hover:grayscale-0 ease-linear duration-300 hover:scale-105 "
            />
          </Link>
        </div>
        <div className="text-center w-full h-[500px] lg:w-[500px] lg:h-[600px] bg-green-500  rounded-xl">
          <Link to="/photography/portrait">
            <img
              src="https://github.com/iranjansharma/cinematography-aditya/blob/main/src/assets/Portrait.jpg?raw=true"
              alt=""
              className="w-full h-[500px] lg:w-[500px] lg:h-[600px] rounded-xl object-cover grayscale hover:grayscale-0 ease-linear duration-300 hover:scale-105 "
            />
          </Link>
        </div>
        <div className="text-center w-full h-[500px] lg:w-[500px] lg:h-[600px] bg-yellow-500 rounded-xl">
          <Link to="/photography/automobile">
            <img
              src="https://github.com/iranjansharma/cinematography-aditya/blob/main/src/assets/Automobile.jpg?raw=true"
              alt=""
              className="w-full h-[500px] lg:w-[500px] lg:h-[600px] rounded-xl object-cover grayscale hover:grayscale-0 ease-linear duration-300 hover:scale-105 "
            />
          </Link>
        </div>
        <div className="text-center w-full h-[500px] lg:w-[500px] lg:h-[600px] bg-violet-500 rounded-xl">
          <Link to="/photography/ecom">
            <img
              src="https://github.com/iranjansharma/cinematography-aditya/blob/main/src/assets/Ecom.jpg?raw=true"
              alt=""
              className="w-full h-[500px] lg:w-[500px] lg:h-[600px] rounded-xl object-cover grayscale hover:grayscale-0 ease-linear duration-300 hover:scale-105 "
            />
          </Link>
        </div>
        <div className="text-center w-full h-[500px]  lg:w-[500px] lg:h-[600px] bg-cyan-500 rounded-xl">
          <Link to="/photography/product">
            <img
              src="https://github.com/iranjansharma/cinematography-aditya/blob/main/src/assets/Product.jpg?raw=true"
              alt=""
              className="w-full h-[500px] lg:w-[500px] lg:h-[600px] rounded-xl object-cover grayscale hover:grayscale-0 ease-linear duration-300 hover:scale-105 "
            />
          </Link>
        </div>
        <div className="text-center w-full h-[500px] lg:w-[500px] lg:h-[600px] bg-green-700 rounded-xl">
          <Link to="/photography/events">
            <img
              src="https://github.com/iranjansharma/cinematography-aditya/blob/main/src/assets/Events.jpg?raw=true"
              alt=""
              className="w-full h-[500px] lg:w-[500px] lg:h-[600px] rounded-xl object-cover grayscale hover:grayscale-0 ease-linear duration-300 hover:scale-105 "
            />
          </Link>
        </div>
      </div>
    </Div>
  );
};

export default Photography;
