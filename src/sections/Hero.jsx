import {Button} from '../components';

const Hero = () => {
  return (
    <section
      id="home"
      className="w-full flex flex-col text-center justify-center h-screen hero-gradient bg-[url('./assets/images/grid.png')] bg-cover bg-no-repeat"
    >
      <div className="z-10">
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
