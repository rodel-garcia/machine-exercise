import FooterSocialLink from './FooterSocialLink';

function FooterLeftSection() {
  const navigations = ['About Us', 'Partner With Us', 'Join Our Team', 'FAQs', 'Press'];
  return (
    <section className='text-white font-raleway max:w-[64.375rem] max-less-600:w-[49%] 2xl:w-[48%] mb-20 max-less-600:mb-0'>
      <div className='2xl:w-[28.5625rem] w-[14rem]'>
        <img className='w-full' src='assets/logo.svg' alt='app-logo' />
      </div>
      <nav className='max:text-4xl max-less-600:text-3xl lg:text-4xl md:text-xl text-lg font-semibold flex justify-between mt-16 mb-14'>
        {navigations.map((nav) => (
          <a key={nav} href='#'>
            {nav}
          </a>
        ))}
      </nav>
      <FooterSocialLink />
      <nav className='text-white font-raleway font-normal max:text-4xl max-less-600:text-3xl lg:text-4xl md:text-xl text-lg mr-6 pt-11 flex justify-between border-t-2 border-white'>
        <a href='#'>Wellness Policy</a>
        <a href='#'>Privacy Policy</a>
        <a href='#'>Terms & Conditions</a>
      </nav>
    </section>
  );
}

export default FooterLeftSection;
