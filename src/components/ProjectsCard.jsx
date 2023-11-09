import {projectsInfo, langIcons, langIconsTop} from '../constants';
import icons from '../assets/icons/icons.svg';

const ProjectsCard = () => {
  return (
    <div className="grid grid-cols-2 gap-4 overflow-hidden">
      {projectsInfo.map ((item, index) => (
        <article
          key={item.title}
          className={`h-80 rounded-3xl p-5 flex justify-center items-center text-black flex-col relative overflow-hidden ${index === 2 ? 'col-span-2' : 'col-span-1'} bg-gradient-to-t from-transparent via-opacity-70 to-black `}
        >
          <img
            className={`absolute ${index === 1 ? '-top-44' : index === 2 ? '-top-32' : 'top-0'} bottom-0 left-0 right-0 h-auto w-full rounded-3xl opacity-30 hover:scale-110 hover:opacity-40 transition-all duration-500`}
            src={item.imgUrl}
            alt={item.alt}
          />
          <div className="z-10 flex flex-col items-center">
            <h3 className="text-3xl font-black mb-2 text-white">
              {item.title}
            </h3>
            <p className=" max-w-[15rem] text-center text-white mb-2">
              {item.description}
            </p>
            <div className="flex flex-row gap-1 mb-4">
              {index === 2
                ? langIcons.map (item => (
                    <svg key={item.lang} className="w-12 h-12 rounded-full">
                      <use href={item.url} />
                    </svg>
                  ))
                : langIconsTop.map (item => (
                    <svg key={item.lang} className="w-12 h-12 rounded-full">
                      <use href={item.url} />
                    </svg>
                  ))}
            </div>
            <div className="flex justify-center items-center gap-4">
              <a href="#">
                <button className="text-black font-semibold flex justify-center items-center gap-2 py-2 px-4 bg-white/40 rounded-3xl hover:bg-white/50 transition-colors duration-300">
                  Code
                  <svg className="w-4 h-4 fill-black">
                    <use href={icons + '#icon-github-simple'} />
                  </svg>
                </button>
              </a>
              <a href="#">
                <button className="text-black font-semibold flex justify-center items-center gap-2 py-2 px-4 bg-white/40 rounded-3xl hover:bg-white/50 transition-colors duration-300">
                  Live Demo
                  <svg className="w-4 h-4 fill-black">
                    <use href={icons + '#icon-share'} />
                  </svg>
                </button>
              </a>;

            </div>
          </div>
        </article>
      ))}
    </div>
  );
};
export default ProjectsCard;
