function HeaderNavBar() {
  const navigations = ['Book a chef', 'Partner with Us', 'FAQs', 'Contact'];
  return (
    <div className='flex justify-center 2xl:justify-between items-center px-20 pt-[3.125rem] text-white text-3xl'>
      <div className='w-[12.3125rem] xl:w-[20.4375rem]'>
        <img className='w-full' src='assets/logo.svg' alt='app-logo' />
      </div>
      <nav className='hidden 2xl:block'>
        {navigations.map((nav, i) => (
          <a href='#' key={nav} className={`font-raleway font-medium tracking-wider ${i !== 0 ? 'pl-[3.75rem]' : ''}`}>
            {nav}
          </a>
        ))}
      </nav>
    </div>
  );
}

export default HeaderNavBar;
