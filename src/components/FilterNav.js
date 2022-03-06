function FilterNav({ list, clickHandler }) {
  return (
    <nav className='text-app-black flex flex-col font-raleway font-medium box-border'>
      {list.map((nav, i) => (
        <button
          onClick={() => clickHandler(i)}
          key={nav.text}
          className={`text-2xl text-left py-6 px-16 border-b-[0.4px] border-[#c4c4c4]/60 border-l-white border-l-[10px] ${
            i === 0 ? `border-t` : ''
          } ${nav.selected ? `bg-app-yellow/30 border-l-app-yellow` : ''}`}
        >
          {nav.text}
        </button>
      ))}
    </nav>
  );
}

export default FilterNav;
