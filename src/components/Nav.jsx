import {navLinks} from '../constants';

const Nav = () => {
  return (
    <header className="w-full z-10 absolute py-5">
      <nav>
        <ul className="flex justify-center items-center gap-20">
          {navLinks.map ((item, index) => (
            <li
              className={`${index === 2 ? 'text-white font-softsoul text-3xl' : ' text-secondary-grey text-lg font-actor'}`}
              key={item.label}
            >
              <a href={item.href}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
