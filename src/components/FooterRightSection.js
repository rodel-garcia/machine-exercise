function FooterRightSection(props) {
  return (
    <section className='text-white font-raleway mt-20 max:w-[66.875rem] max-less-600:w-[49%] 2xl:w-[48%]'>
      <p className='lg:text-4xl text-2xl tracking-wider'>Get the latest from DINE IN</p>
      <div className='flex justify-between pt-8 lg:pb-36 pb-14'>
        <input
          className='max-less-300:text-3xl max-less-600:text-2xl lg:text-xl text-lg border-white border-2 tracking-[0.285em] leading-tight bg-app-black font-light rounded-none lg:py-7 lg:px-10 py-4 px-6 w-[68%] outline-none'
          placeholder='YOUR EMAIL ADDRESS'
        />
        <button className='max-less-300:text-3xl max-less-600:text-2xl lg:text-xl text-lg lg:leading-10 tracking-[0.235em] text-white font-medium outline-none lg:py-7 w-[30%] border-2 border-app-yellow bg-app-yellow'>
          SUBSCRIBE
        </button>
      </div>
      <a className='lg:text-3xl text-lg font-normal tracking-[0.14em]' href='mailto:customerservice@dinein.me'>
        customerservice@dinein.me
      </a>
      <p className='lg:text-3xl text-lg font-normal tracking-[0.14em] lg:mt-9 mt-3'>
        We are located in Seef District, Manama, Bahrain
      </p>
    </section>
  );
}

export default FooterRightSection;
