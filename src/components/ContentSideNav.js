import { useState } from 'react';
import FilterNav from './FilterNav';

function ContentSideNav() {
  const [filters, setFilters] = useState([
    { text: 'All', selected: false },
    { text: 'Chef`s Picks', selected: false },
    { text: 'Small Plates', selected: false },
    { text: 'Large Plates', selected: false },
    { text: 'Pasta & Pizza', selected: false },
    { text: 'Slide & Extras', selected: false },
    { text: 'Desserts', selected: false },
    { text: 'Ramadan Package', selected: false },
  ]);

  function setSelectedFilters(index) {
    const newSet = [...filters];
    newSet[index].selected = !filters[index].selected;
    setFilters(newSet);
  }

  return (
    <aside className='max-less-300:w-[32.5rem] w-96 flex-0 mt-[3.75rem] max:ml-28 bg-white hidden max-less-600:block pb-20'>
      <h3 className='font-cinzel font-normal text-app-neutral max-less-300:text-5xl text-3xl pt-10 px-9 pb-[6.75rem] text-center'>
        FOOD SELECTIONS
      </h3>
      <FilterNav list={filters} clickHandler={setSelectedFilters} />
    </aside>
  );
}

export default ContentSideNav;
