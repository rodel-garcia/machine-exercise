import HeaderNavBar from './HeaderNavBar';
import HeaderPromotion from './HeaderPromotion';
import { ArrowCircleDownIcon } from '@heroicons/react/outline';

function Header() {
  return (
    <header className='xl:h-desktop-header xl:bg-desktop-banner xl:bg-app-header-position h-mobile-header bg-mobile-banner bg-right-bottom max-w-app-width bg-cover m-auto relative'>
      <HeaderNavBar />
      <HeaderPromotion />
      <div className='hidden 2xl:flex justify-center items-center absolute w-full bottom-14'>
        <ArrowCircleDownIcon className='h-[5.625rem] w-[5.625rem] text-[#edac2c]/[0.3] hover:text-[#edac2c] cursor-pointer' />
      </div>
    </header>
  );
}

export default Header;
