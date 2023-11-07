import {Button} from '../components';
import hero_computer from '../assets/images/hero_computer.png';
import hero_phone from '../assets/images/hero_phone.png';

const Hero = () => {
  return (
    <section
      id="Home"
      className="w-full flex flex-col text-center justify-center h-screen hero-gradient bg-[url('./assets/images/grid.png')] bg-cover bg-no-repeat"
    >
      <div className="wrapper flex flex-col justify-center items-center z-10 relative">
        <img
          className="w-[250px] h-[250px] absolute left-32 bottom-4 rotate-[20deg]"
          src={hero_computer}
          alt="Computer"
        />
        <img
          className="w-[150px] h-auto absolute right-[16rem] top-[21rem] rotate-[25deg]"
          src={hero_phone}
          alt="Computer"
        />

        {/* right: 16rem;
    width: 150px;
    top: 21rem;
    height: auto;
    transform: rotate(25deg); */}

        <p className="text-5xl uppercase font-eastbroadway text-white tracking-wider">
          &lt;Tech Enthusiast/&gt;
        </p>
        <h1 className="text-[180px] uppercase font-softsoul text-primary-yellow stroke-2 stroke-white [text-shadow:_10px_10px_#F5995B] [-webkit-text-stroke:_3px_black] leading-none mb-10">
          Ytsipak
        </h1>
        <p className="text-9xl uppercase font-muscle text-white mb-12">
          Web
          {' '}
          <span className="text-primary-blue rounded-3xl px-5 border-primary-blue border-dashed border-4">
            {' '}Developer{' '}
          </span>
        </p>
        <Button />
      </div>
    </section>
  );
};

export default Hero;
