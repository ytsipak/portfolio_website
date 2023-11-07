import js_icon from '../assets/images/js_icon.svg';

const SkillsButton = ({language, description}) => {
  return (
    <button
      className={`flex justify-center items-center bg-white/70 text-black p-3 rounded-full gap-[10px] ${description === 'hard' ? 'w-[calc((100%-1.25rem)/2)]' : 'w-full'}`}
    >
      <img src={js_icon} alt="Java Script Icon" />
      <p className="uppercase font-semibold">{language}</p>
    </button>
  );
};

export default SkillsButton;
