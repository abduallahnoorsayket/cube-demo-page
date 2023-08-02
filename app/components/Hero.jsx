import Image from 'next/image';

const Hero = () => {
  return (
    <section id='#' className='min-h-[80vh] bg-gray-800  grid place-items-center'>
      {/* <!-- CONTENT START --> */}
      <div className='text-white text-center grid place-items-center gap-10 max-w-[860px] p-8'>
        <Image width={150} height={150} src='/img/nav-logo.png' alt='' className='w-36' />
        <h1 className='sm:text-5xl text-3xl font-semibold sm:leading-[65px] leading-10'>
          Cube is a Modern, Trending, & Creative agency
          <span className='text-primary'> TailwindCSS 3+</span> HTML Template
        </h1>
        <h5 className='text-primary font-semibold sm:text-3xl text-xl'>
          Multiple home version with more 11 pages included
        </h5>

        <div className='flex items-center gap-5 flex-col sm:flex-row'>
          <a
            href='#demos'
            className='text-white bg-primary border-2 border-transparent border-solid hover:border-primary hover:bg-transparent font-medium rounded-full text-2xl px-8 py-2.5 text-center transition-all duration-500 ease-in-out'
          >
            View Demos
          </a>
          <a
            href='#'
            className='text-white bg-transparent hover:bg-primary border-2 border-solid border-primary font-medium rounded-full text-2xl px-8 py-2.5 text-center transition-all duration-500 ease-in-out'
          >
            Documentations
          </a>
        </div>
      </div>
      {/* <!-- CONTENT END --> */}
    </section>
  );
};

export default Hero;
