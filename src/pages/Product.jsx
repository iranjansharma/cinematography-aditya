import Div from '../components/Div';
import ImageModal from '../components/ImageModal';
import { p1, p2, p3, p4, p5, p6, p7, p8, p9, p10 } from '../assets';

const Product = () => {
  return (
    <Div>
      <h1 className='py-4 text-lg lg:py-6 font-black lg:text-4xl'>Products</h1>
      <div className='grid grid-cols-1 md:grid-cols-4 gap-4'>
        <div className='grid gap-4'>
          <ImageModal URI={p1} ALT='Products' />
          <ImageModal URI={p2} ALT='Products' />
          <ImageModal URI={p3} ALT='Products' />
        </div>
        <div className='grid gap-4'>
          <ImageModal URI={p4} ALT='Products' />
          <ImageModal URI={p5} ALT='Products' />
          <ImageModal URI={p6} ALT='Products' />
        </div>
        <div className='grid gap-4'>
          <ImageModal URI={p7} ALT='Products' />
          <ImageModal URI={p8} ALT='Products' />
          <ImageModal URI={p9} ALT='Products' />
        </div>
        <div className='grid gap-4'>
          <ImageModal URI={p10} ALT='Products' />
          <ImageModal URI={p1} ALT='Products' />
          <ImageModal URI={p2} ALT='Products' />
        </div>
      </div>
    </Div>
  );
};

export default Product;
