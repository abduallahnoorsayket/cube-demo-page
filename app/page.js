import { demoData, featureData } from '@/data';
import DemoItem from './components/DemoItem';
import Feature from './components/Feature';
import Footer from './components/Footer';
import Hero from './components/Hero';

export default function Home() {
  return (
    <>
      {/* <!-- HERO SECTION START --> */}
      <Hero />
      {/* <!-- HERO SECTION END --> */}

      {/* <!-- DEMO SECTION START --> */}
      <section id='demos' className='py-20'>
        <div className='container mx-auto px-8'>
          {/* <!-- TITLE --> */}

          <div className='flex justify-center'>
            <h2 className='text-center pb-2 mb-16 text-4xl font-semibold text-primary border-b-2 border-dashed border-primary border-0 w-fit capitalize'>
              Template Demos
            </h2>
          </div>
          {/* <!-- TITLE --> */}

          <div className='grid xl:grid-cols-3 md:grid-cols-2 lg:gap-10 gap-6'>
            {demoData.map((item, i) => (
              <DemoItem key={i} img={item.img} title={item.title} link={item.link} />
            ))}
          </div>
        </div>
      </section>
      {/* <!-- DEMO SECTION END --> */}

      {/* <!-- FEATURES SECTION START --> */}
      <section id='features' className='py-20'>
        <div className='container mx-auto px-8'>
          {/* <!-- TITLE --> */}
          <div className='flex justify-center'>
            <h2 className='text-center pb-2 mb-16 text-4xl font-semibold text-primary border-b-2 border-dashed border-primary border-0 w-fit capitalize'>
              Awesome Features
            </h2>
          </div>
          {/* <!-- TITLE --> */}

          <ul className='grid lg:grid-cols-3 sm:grid-cols-2 gap-6'>
            {featureData?.map((feature, i) => (
              <Feature key={i} title={feature.title} img={feature.img} desc={feature.desc} />
            ))}
          </ul>
        </div>
      </section>
      {/* <!-- FEATURES SECTION END --> */}

      {/* <!-- FOOTER SECTION START --> */}
      <Footer />
      {/* <!-- FOOTER SECTION END --> */}
    </>
  );
}
