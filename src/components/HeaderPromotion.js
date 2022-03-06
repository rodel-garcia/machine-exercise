import { ClockIcon } from '@heroicons/react/outline';

function HeaderPromotion() {
  return (
    <section className='xl:w-[56rem] lg:w-[48.75rem] w-full lg:h-[23.75rem] xl:bg-app-neutral absolute left-0 max-less-300:bottom-[6.25rem] 2xl:bottom-44 xl:bottom-[6.25rem] bottom-0 text-white font-normal'>
      <div className='lg:py-10 xl:pl-[7.375rem] xl:pr-[6.875rem] px-12'>
        <span className='text-2xl block lg:hidden font-raleway font-semibold tracking-[0.15em]'>WELCOME TO</span>
        <h3 className='font-cinzel lg:text-[6.25rem] text-6xl lg:leading-tight leading-[5rem]'>Masso</h3>
        <address className='font-raleway lg:font-medium not-italic lg:text-3xl text-xl leading-6 font-light w-[27.375rem] lg:w-auto'>
          Manama - Bld Number: 404, Road Number: 382 Block Number 338, Adliya
        </address>
        <div className='flex justify-between items-center mt-5 font-raleway font-normal lg:text-3xl text-xl'>
          <span className='flex items-center'>
            <ClockIcon className='lg:h-8 lg:w-8 w-6 h-6 mr-1' />
            40 - 50 mins
          </span>
          <span className='mr-20 md:mr-[10.25rem] lg:mr-0'>BHD 15,000 minimum order</span>
        </div>
      </div>
    </section>
  );
}

export default HeaderPromotion;
