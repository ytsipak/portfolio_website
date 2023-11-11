import cv from '../documents/SOON.txt';

const Button = () => {
  return (
    <button className="flex justify-center items-center bg-primary-yellow max-w-2xl rounded-full text-[#171817] font-muscle text-6xl uppercase shadow-lg [box-shadow:_10px_10px_#F5995B] border-2 border-black my-0 mx-auto px-20 py-10 caramel-background cursor-pointer z-10 max-sm:text-3xl max-sm:px-10 max-sm:py-7 max-sm:[box-shadow:_3px_3px_#F5995B] animate-slowPulse">
      <a href={cv} download={'CV.txt'}>Download CV</a>
    </button>
  );
};

export default Button;
