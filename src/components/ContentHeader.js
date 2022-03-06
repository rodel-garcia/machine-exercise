import { SearchIcon } from '@heroicons/react/outline';

function ContentHeader({ openSlideOverHandler }) {
  return (
    <div className='flex 2xl:justify-between items-center max:pl-28 lg:pt-[8.75rem] lg:pb-[3.75rem] py-10 lg:border-b lg:border-white'>
      <button className='max-less-600:hidden mr-6' onClick={() => openSlideOverHandler(true)}>
        <svg width='70' height='70' viewBox='0 0 70 70' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <circle cx='35' cy='35' r='35' fill='#FAFAFA' />
          <path
            d='M32.25 44.5H38.75V41.3333H32.25V44.5ZM20.875 25.5V28.6667H50.125V25.5H20.875ZM25.75 36.5833H45.25V33.4167H25.75V36.5833Z'
            fill='#EDAC2C'
          />
        </svg>
      </button>
      <div className='max-less-300:w-[32.5rem] max-less-600:w-96 lg:w-[32.5rem] flex flex-1 2xl:flex-none items-center bg-white py-5 px-10 rounded-full mr-auto'>
        <SearchIcon className='text-app-yellow h-[1.75rem] w-[1.75rem]' />
        <input
          className='flex-1 text-black outline-none text-xl font-raleway font-normal px-6'
          placeholder='What`s your craving?'
        />
      </div>
      <div className='px-12 py-6 hidden 2xl:block bg-white rounded-full max:mr-7 cursor-pointer'>
        <svg width='31' height='27' viewBox='0 0 31 27' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <path
            d='M22.6638 10.3751L16.6413 1.35509C16.5126 1.17297 16.3414 1.02511 16.1424 0.92444C15.9435 0.823771 15.7229 0.773353 15.5 0.77759C15.06 0.77759 14.62 0.970091 14.3588 1.36884L8.33625 10.3751H1.75C0.99375 10.3751 0.375 10.9938 0.375 11.7501C0.375 11.8738 0.38875 11.9976 0.43 12.1213L3.9225 24.8676C4.23875 26.0226 5.2975 26.8751 6.5625 26.8751H24.4375C25.7025 26.8751 26.7613 26.0226 27.0913 24.8676L30.5838 12.1213L30.625 11.7501C30.625 10.9938 30.0063 10.3751 29.25 10.3751H22.6638ZM11.375 10.3751L15.5 4.32509L19.625 10.3751H11.375ZM15.5 21.3751C13.9875 21.3751 12.75 20.1376 12.75 18.6251C12.75 17.1126 13.9875 15.8751 15.5 15.8751C17.0125 15.8751 18.25 17.1126 18.25 18.6251C18.25 20.1376 17.0125 21.3751 15.5 21.3751Z'
            fill='black'
          />
        </svg>
      </div>
    </div>
  );
}

export default ContentHeader;
