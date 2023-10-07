import Div from '../components/Div';
import ImageModal from '../components/ImageModal';
import {
  pb1,
  pb2,
  pb3,
  pj1,
  pj2,
  pj3,
  pt1,
  pt2,
  pt3,
  pt4,
  pt5,
  pt6,
  pt7,
  pt8,
} from '../assets';

const Portrait = () => {
  return (
    <Div>
      <h1 className='py-4 text-lg lg:py-6 font-black lg:text-4xl'>Portraits</h1>
      <div className='grid grid-cols-1 md:grid-cols-4 gap-4'>
        <div className='grid gap-4'>
          <ImageModal URI={pb1} ALT='Portraits' />
          <ImageModal URI={pb2} ALT='Portraits' />
          <ImageModal URI={pb3} ALT='Portraits' />
        </div>
        <div className='grid gap-4'>
          <ImageModal URI={pj1} ALT='Portraits' />
          <ImageModal URI={pj2} ALT='Portraits' />
          <ImageModal URI={pj3} ALT='Portraits' />
        </div>
        <div className='grid gap-4'>
          <ImageModal URI={pt1} ALT='Portraits' />
          <ImageModal URI={pt2} ALT='Portraits' />
          <ImageModal URI={pt3} ALT='Portraits' />
        </div>
        <div className='grid gap-4'>
          <ImageModal URI={pt4} ALT='Portraits' />
          <ImageModal URI={pb1} ALT='Portraits' />
          <ImageModal URI={pt6} ALT='Portraits' />
        </div>
        <div className='grid gap-4'>
          <ImageModal URI={pt7} ALT='Portraits' />
        </div>
        <div className='grid gap-4'>
          <ImageModal URI={pb1} ALT='Portraits' />
        </div>
        <div className='grid gap-4'>
          <ImageModal URI={pt1} ALT='Portraits' />
        </div>
        <div className='grid gap-4'>
          <ImageModal URI={pj2} ALT='Portraits' />
        </div>
      </div>
    </Div>
  );
};

export default Portrait;
