function ContentMain() {
  const items = ['sm-1', 'sm-2', 'sm-3', 'sm-4', 'sm-5', 'sm-6', 'sm-7'];
  return (
    <div className='text-white flex-1 max-less-600:pl-20 max:pr-24'>
      <h1 className='font-cinzel 2xl:text-[6.25rem] 2xl:leading-snug text-[3.125rem] leading-[4.1875rem] mt-5'>
        Small Plates
      </h1>
      <div className='flex flex-wrap'>
        {items.map((item, i) => (
          <div
            key={item}
            className={`w-2/4 flex flex-col 2xl:flex-row py-16 lg:items-center border-b border-white ${
              items.length - 1 === i ? 'border-none' : ''
            } ${i % 2 === 0 ? 'items-start' : 'items-end'}`}
          >
            <div className='w-[98%] md:w-[18.9375rem] 2xl:w-[20.8125rem]'>
              <img className='w-full' src={`assets/${item}.png`} alt='small-plates-img' />
            </div>
            <div className='2xl:w-1/2 text-center 2xl:text-left flex 2xl:flex-col flex-col-reverse 2xl:pl-10 mt-5 2xl:mt-0 md:w-[18.9375rem] w-[98%] lg:w-auto'>
              <span className='font-cinzel font-normal text-2xl xl:text-[2.5rem] xl:leading-[3.375rem] 2xl:max-w-xs tracking-widest'>
                Avocado Salad
              </span>
              <span className='font-raleway font-light text-2xl xl:text-3xl mt-5'>BHD 4.800</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ContentMain;
