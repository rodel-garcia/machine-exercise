import { useState } from 'react';
import ContentHeader from './ContentHeader';
import ContentMain from './ContentMain';
import ContentSideNav from './ContentSideNav';
import MobileSlideOver from './MobileSlideOver';

function Content() {
  const [open, setOpen] = useState(false);

  return (
    <main className='max-w-app-width m-auto bg-app-neutral'>
      <MobileSlideOver open={open} setOpen={setOpen} />
      <div className='max:px-[8.75rem] px-12'>
        <ContentHeader openSlideOverHandler={setOpen} />
        <div className='flex items-start'>
          <ContentSideNav />
          <ContentMain />
        </div>
      </div>
    </main>
  );
}

export default Content;
