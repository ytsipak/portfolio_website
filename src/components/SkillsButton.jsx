import js_icon from '../assets/images/js_icon.svg';

const SkillsButton = ({language, description, img}) => {
  return (
    <button
      className={`flex justify-center items-center bg-white/70 text-black p-3 rounded-full gap-[10px] ${description === 'hard' ? 'w-[calc((100%-1.25rem)/2)]' : 'w-full'} max-sm:p-2 max-sm:text-base`}
    >
      <svg className="w-12 h-12">
        <use href={img} />
      </svg>
      <p
        className={`uppercase font-semibold ${description === 'hard' ? 'max-sm:hidden' : 'max-sm:block'}`}
      >
        {language}
      </p>
    </button>
  );
};

export default SkillsButton;
