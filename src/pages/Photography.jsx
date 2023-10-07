import Div from '../components/Div';
import PhotographyCard from '../components/PhotographyCard';

const Photography = () => {
  return (
    <Div>
      <h1 className='container mx-auto mt-4 text-center text-2xl underline uppercase lg:py-6 lg:text-left font-black lg:text-4xl'>
        Photography
      </h1>
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-10 autofill:grid justify-center items-center my-6 '>
        <PhotographyCard
          URI='/photography/fashion'
          URL='https://github.com/iranjansharma/cinematography-aditya/blob/main/src/assets/Fashion.jpg?raw=true'
          alt='Fashion'
        />
        <PhotographyCard
          URI='/photography/portrait'
          URL='https://github.com/iranjansharma/cinematography-aditya/blob/main/src/assets/Portrait.jpg?raw=true'
          alt='Portrait'
        />
        <PhotographyCard
          URI='/photography/automobile'
          URL='https://github.com/iranjansharma/cinematography-aditya/blob/main/src/assets/Automobile.jpg?raw=true'
          alt='automobile'
        />
        <PhotographyCard
          URI='/photography/product'
          URL='https://github.com/iranjansharma/cinematography-aditya/blob/main/src/assets/Product.jpg?raw=true'
          alt='Product'
        />
        <PhotographyCard
          URI='/photography/ecom'
          URL='https://github.com/iranjansharma/cinematography-aditya/blob/main/src/assets/Ecom.jpg?raw=true'
          alt='ecommerce'
        />
        <PhotographyCard
          URI='/photography/events'
          URL='https://github.com/iranjansharma/cinematography-aditya/blob/main/src/assets/Events.jpg?raw=true'
          alt='Events'
        />
      </div>
    </Div>
  );
};

export default Photography;
