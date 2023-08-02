import Image from 'next/image';

const Footer = () => {
  return (
    <>
      <footer className='p-8 bg-gray-800'>
        {/* <!-- FOOTER SECTION START --> */}
        <div className='container px-8 mx-auto'>
          <div className='flex sm:justify-between justify-center text-center items-center gap-6 flex-wrap text-gray-100'>
            <a href='#'>
              <Image width={100} height={100} src='/img/nav-logo.png' alt='' />
            </a>

            <div>
              <p>
                Copyright &copy; 2023
                <a href='https://thimcloud.com' className='text-primary underline'>
                  ThimCloud
                </a>{' '}
                . All Right Reserved
              </p>
            </div>
          </div>
        </div>
        {/* <!-- FOOTER SECTION END --> */}
      </footer>
    </>
  );
};

export default Footer;
