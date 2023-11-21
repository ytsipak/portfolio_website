import {computerCharacter} from '../assets/images';

const About = () => {
  return (
    <section className="w-full" id="About">
      <div className="wrapper relative">
        <h2 className="title max-sm:mb-2">
          Get to {''}
          <br />
          <span className=" text-primary-yellow">know</span>{' '}me
        </h2>
        <p className="normal-case max-w-md text-xl font-semibold max-sm:text-base max-sm:text-center max-sm:my-0 max-sm:mx-auto">
          I'm Yuriy Tsipak, a 19-year-old Ukrainian Front-end / ReactJS developer. I'm a creative soul who
          {' '}
          <span className="bg-primary-pink rounded-sm text-secondary-black px-1">
            enjoys crafting unique experiences
          </span>
          {' '}
          with web technologies. I have a passion for solving design challenges, crafting intuitive user interfaces, and envisioning engaging interactions to build dynamic web experiences and applications.
        </p>
        <img
          className="w-[600px] h-[600px] absolute top-0 right-0 max-lg:hidden"
          src={computerCharacter}
          alt="Hero Section Image"
        />
      </div>
    </section>
  );
};

export default About;
