import Image from 'next/image';
import Link from 'next/link';

const DemoItem = ({ title, link, img }) => {
  return (
    <>
      {/* <!-- DEMO ITEM START --> */}
      <div className='sm:p-8 p-4 rounded-lg bg-secondary shadow-xl group'>
        <div className='relative'>
          <Image
            src={img}
            alt={title}
            className='h-full max-h-[400px] w-full rounded-lg border-2 border-solid border-gray-600 object-top object-cover group-hover:object-bottom transition-all duration-[10s] ease-linear'
            width={500}
            height={500}
          />
          <div className='absolute inset-0 w-full h-full bg-black bg-opacity-50 grid place-items-center scale-0 opacity-0 invisible group-hover:opacity-100 group-hover:scale-100 group-hover:visible transition-all duration-500 ease-in-out'>
            <Link
              href={link}
              className='text-white bg-primary border-2 border-transparent border-solid hover:bg-orange-500 font-medium rounded-full text-2xl px-8 py-2.5 text-center mr-2 mb-2 transition-all duration-400 ease-in-out'
            >
              View Demo
            </Link>
          </div>
        </div>
        <Link
          href={link}
          className='sm:text-2xl text-xl text-gray-100 font-semibold text-center mt-8 hover:text-primary transition-all duration-300 block'
        >
          {title}
        </Link>
      </div>
      {/* <!-- DEMO ITEM END --> */}
    </>
  );
};

export default DemoItem;
