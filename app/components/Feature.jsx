import Image from 'next/image';

const Feature = ({ title, img, desc }) => {
  return (
    <>
      {/* <!-- FEATURE ITEM START --> */}
      <li className='p-8 bg-gray-800 rounded-lg flex flex-col items-center text-center text-gray-200 gap-3 shadow-lg hover:bg-secondary duration-300'>
        <Image width={50} height={50} src={img} alt={title} className='max-w-[50px]' />
        <h3 className='text-2xl font-semibold'>{title}</h3>
        <p>{desc}</p>
      </li>
      {/* <!-- FEATURE ITEM END --> */}
    </>
  );
};

export default Feature;
