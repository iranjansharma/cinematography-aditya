import Div from '../components/Div';
import ImageModal from '../components/ImageModal';
import { e1, e2, e3, e4, e5, e6 } from '../assets';

const Events = () => {
  return (
    <Div>
      <h1 className='py-4 text-lg lg:py-6 font-black lg:text-4xl'>Events</h1>
      <div className='grid grid-cols-1 md:grid-cols-4 gap-4'>
        <div className='grid gap-4'>
          <ImageModal URI={e2} ALT='Events' />
          <ImageModal URI={e1} ALT='Events' />
          <ImageModal URI={e3} ALT='Events' />
        </div>
        <div className='grid gap-4'>
          <ImageModal URI={e4} ALT='Events' />
          <ImageModal URI={e5} ALT='Events' />
          <ImageModal URI={e6} ALT='Events' />
        </div>
        <div className='grid gap-4'>
          <ImageModal URI={e3} ALT='Events' />
          <ImageModal URI={e2} ALT='Events' />
          <ImageModal URI={e1} ALT='Events' />
        </div>
        <div className='grid gap-4'>
          <ImageModal URI={e5} ALT='Events' />
          <ImageModal URI={e6} ALT='Events' />
          <ImageModal URI={e4} ALT='Events' />
        </div>
      </div>
    </Div>
  );
};

export default Events;
