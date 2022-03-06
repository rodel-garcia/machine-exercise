import FooterLeftSection from './FooterLeftSection';
import FooterRightSection from './FooterRightSection';

function Footer() {
  return (
    <footer className='max-w-app-width m-auto bg-app-black lg:px-[6.5rem] lg:pt-[10.75rem] lg:pb-[14.375rem] p-12 flex justify-between flex-col 2xl:flex-row'>
      <FooterLeftSection />
      <FooterRightSection />
    </footer>
  );
}

export default Footer;
