const ImageModal = ({ URI, ALT }) => {
  return (
    <div>
      <img
        className='h-auto max-w-full rounded-lg'
        src={URI}
        alt={ALT}
        draggable='false'
      />
    </div>
  );
};

export default ImageModal;
