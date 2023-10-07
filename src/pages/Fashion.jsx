import Div from '../components/Div';
import ImageModal from '../components/ImageModal';
import { f1, f2, f3, f4, f5, f6, f7 } from '../assets';

const Fashion = () => {
  return (
    <Div>
      <h1 className='py-4 text-lg lg:py-6 font-black lg:text-4xl'>Fashion</h1>
      <div className='grid grid-cols-1 md:grid-cols-4 gap-4'>
        <div className='grid gap-4'>
          <ImageModal URI={f1} ALT='Fashon' />
          <ImageModal URI={f2} ALT='Fashon' />
          <ImageModal URI={f3} ALT='Fashon' />
        </div>
        <div className='grid gap-4'>
          <ImageModal URI={f4} ALT='Fashon' />
          <ImageModal URI={f5} ALT='Fashon' />
          <ImageModal URI={f6} ALT='Fashon' />
        </div>
        <div className='grid gap-4'>
          <ImageModal URI={f7} ALT='Fashon' />
          <ImageModal URI={f3} ALT='Fashon' />
          <ImageModal URI={f1} ALT='Fashon' />
        </div>
        <div className='grid gap-4'>
          <ImageModal URI={f1} ALT='Fashon' />
          <ImageModal URI={f2} ALT='Fashon' />
          <ImageModal URI={f4} ALT='Fashon' />
        </div>
      </div>
    </Div>
  );
};

export default Fashion;
