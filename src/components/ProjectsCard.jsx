import {projectsInfo, showcaseDetails} from '../constants';
import icons from '../assets/icons/icons.svg';

const ProjectsCard = () => {
  return (
    <div className="grid grid-cols-2 gap-4 overflow-hidden max-lg:grid-cols-1">
      {projectsInfo.map ((item, index) => (
        <article
          key={item.title}
          className={`h-80 max-sm:h-auto rounded-3xl p-5 flex justify-center items-center text-black flex-col relative overflow-hidden ${index === 2 ? 'col-span-2  max-lg:col-span-1' : 'col-span-1'} bg-gradient-to-t from-transparent via-opacity-70 to-black`}
        >
          <img
            className={`absolute ${index === 1 ? '-top-44 max-lg:-top-8' : index === 2 ? '-top-32 max-lg:-top-0' : 'top-0'} bottom-0 left-0 right-0 h-auto ${index === 1 ? 'max-sm:h-auto' : 'max-sm:h-full'} w-full rounded-3xl opacity-30 hover:scale-110 hover:opacity-40 transition-all duration-500`}
            src={item.imgUrl}
            alt={item.alt}
          />
          <div className="z-10 flex flex-col items-center">
            <h3 className="text-3xl font-black mb-2 text-white text-center max-sm:text-2xl">
              {item.title}
            </h3>
            <p className=" max-w-[15rem] text-center text-white mb-2 max-sm:text-sm">
              {item.description}
            </p>

            <div className="flex flex-row gap-1 mb-4">
              {item.langIcons &&
                item.langIcons.map ((langIcon, langIndex) => (
                  <svg key={langIndex} className="w-12 h-12 rounded-full">
                    <use href={langIcon.url} />
                  </svg>
                ))}
            </div>
            {/* optimize */}
            <div className="flex justify-center items-center gap-4">
              <a href={item.github} target="_blank">
                <button className="text-black font-semibold flex justify-center items-center gap-2 py-2 px-4 bg-white/40 rounded-3xl hover:bg-white/50 transition-colors duration-300">
                  Code
                  <svg className="w-4 h-4 fill-black">
                    <use href={icons + '#icon-github-simple'} />
                  </svg>
                </button>
              </a>
              <a href={item.liveUrl} target="_blank">
                <button className="text-black font-semibold flex justify-center items-center gap-2 py-2 px-4 bg-white/40 rounded-3xl hover:bg-white/50 transition-colors duration-300">
                  Live Demo
                  <svg className="w-4 h-4 fill-black">
                    <use href={icons + '#icon-share'} />
                  </svg>
                </button>
              </a>
            </div>
            {/* optimize */}
          </div>
        </article>
      ))}
    </div>
  );
};
export default ProjectsCard;
