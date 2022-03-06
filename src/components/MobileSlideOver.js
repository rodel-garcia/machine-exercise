import { Fragment, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';

import FilterNav from './FilterNav';

function MobileSlideOver({ open, setOpen }) {
  const [categories, setCategories] = useState([
    { text: 'All', selected: false },
    { text: 'Chef`s Picks', selected: false },
    { text: 'Small Plates', selected: false },
    { text: 'Large Plates', selected: false },
    { text: 'Pasta & Pizza', selected: false },
    { text: 'Slide & Extras', selected: false },
    { text: 'Desserts', selected: false },
    { text: 'Ramadan Package', selected: false },
  ]);

  const [foodTypes, setFoodTypes] = useState([
    { text: 'Vegan', selected: false },
    { text: 'Vegetarian', selected: false },
    { text: 'Low Carb', selected: false },
    { text: 'Gluten Free', selected: false },
  ]);

  function setSelectedCategory(index) {
    const newSet = [...categories];
    newSet[index].selected = !categories[index].selected;
    setCategories(newSet);
  }

  function setSelectedFoodTypes(index) {
    const newSet = [...foodTypes];
    newSet[index].selected = !foodTypes[index].selected;
    setFoodTypes(newSet);
  }

  function clearAllFilters() {
    const newCat = [...categories];
    const newFts = [...foodTypes];
    newCat.forEach((cat) => (cat.selected = false));
    newFts.forEach((ft) => (ft.selected = false));
    setCategories(newCat);
    setFoodTypes(newFts);
  }

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as='div' className='fixed inset-0 overflow-hidden' onClose={setOpen}>
        <div className='absolute inset-0 overflow-hidden'>
          <Transition.Child
            as={Fragment}
            enter='ease-in-out duration-500'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-in-out duration-500'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <Dialog.Overlay
              className='absolute inset-0 bg-app-neutral bg-opacity-40 transition-opacity'
              onClick={() => setOpen(false)}
            />
          </Transition.Child>
          <div className='pointer-events-none fixed inset-y-0 left-0 flex max-w-full'>
            <Transition.Child
              as={Fragment}
              enter='transform transition ease-in-out duration-200 sm:duration-500'
              enterFrom='-translate-x-full'
              enterTo='translate-x-0'
              leave='transform transition ease-in-out duration-200 sm:duration-500'
              leaveFrom='translate-x-0'
              leaveTo='-translate-x-full'
            >
              <div className='pointer-events-auto relative w-screen max-w-[32.0625rem]'>
                <div className='flex h-full flex-col overflow-y-auto bg-white shadow-xl'>
                  <Dialog.Title className='text-[3.125rem] leading-[4.1875rem] font-cinzel font-normal text-app-black text-center pt-11 pb-12'>
                    FILTER SEARCH
                  </Dialog.Title>
                  <h4 className='font-raleway font-semibold text-[2.5rem] leading-[2.9375rem] text-app-black tracking-[0.23em] px-[4.625rem] mb-5'>
                    CATEGORY
                  </h4>
                  <FilterNav list={categories} clickHandler={setSelectedCategory} />
                  <h4 className='font-raleway font-semibold text-[2.5rem] leading-[2.9375rem] text-app-black tracking-[0.23em] px-[4.625rem] mb-5 mt-10'>
                    FOOD TYPE
                  </h4>
                  <FilterNav list={foodTypes} clickHandler={setSelectedFoodTypes} />
                  <div className='mt-[4.5rem] flex flex-col justify-center items-center mb-12'>
                    <button
                      onClick={() => setOpen(false)}
                      className='outline-none text-[1.375rem] leading-[1.625rem] text-app-neutral font-raleway font-medium tracking-[0.1em] py-5 px-28 bg-app-yellow/80 rounded-lg'
                    >
                      APPLY FILTERS
                    </button>
                    <button
                      onClick={() => clearAllFilters()}
                      className='outline-none text-[1.375rem] leading-[1.625rem] text-app-neutral font-raleway font-medium tracking-[0.1em] py-5'
                    >
                      CLEAR FILTERS
                    </button>
                  </div>
                </div>
              </div>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}

export default MobileSlideOver;
