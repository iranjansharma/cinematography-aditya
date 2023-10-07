import Div from '../components/Div';
import ImageModal from '../components/ImageModal';
import { a1, a2, a3, a4, a5, a6, a7, a8, a9 } from '../assets';

const Automobile = () => {
  return (
    <Div>
      <h1 className='py-4 text-lg lg:py-6 font-black lg:text-4xl'>
        Automobile
      </h1>
      <div className='grid grid-cols-1 md:grid-cols-4 gap-4'>
        <div className='grid gap-4'>
          <ImageModal URI={a1} ALT='Automobiles' />
          <ImageModal URI={a2} ALT='Automobiles' />
          <ImageModal URI={a3} ALT='Automobiles' />
        </div>
        <div className='grid gap-4'>
          <ImageModal URI={a4} ALT='Automobiles' />
          <ImageModal URI={a5} ALT='Automobiles' />
          <ImageModal URI={a6} ALT='Automobiles' />
        </div>
        <div className='grid gap-4'>
          <ImageModal URI={a7} ALT='Automobiles' />
          <ImageModal URI={a8} ALT='Automobiles' />
          <ImageModal URI={a9} ALT='Automobiles' />
        </div>
        <div className='grid gap-4'>
          <ImageModal URI={a1} ALT='Automobiles' />
          <ImageModal URI={a5} ALT='Automobiles' />
          <ImageModal URI={a6} ALT='Automobiles' />
        </div>
      </div>
    </Div>
  );
};

export default Automobile;
