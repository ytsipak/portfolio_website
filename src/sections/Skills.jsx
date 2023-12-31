import SkillsButton from '../components/SkillsButton';
// import {hardSkills, softSkills} from '../constants';
import {skillsArray} from '../constants';

const Skills = () => {
  return (
    <section id="Skills">
      <div className="wrapper">
        <h2 className="title text-center mb-14 max-sm:leading-[3.5rem] max-sm:mb-6">
          Expertise <br />
          <span className="bg-primary-yellow rounded-xl p-5 max-sm:p-2 flex justify-center max-w-min my-0 mx-auto">
            <span className="title-border text-black max-sm:text-4xl max-sm:text-[3rem]">
              Showcase
            </span>
          </span>
        </h2>
        <div>
          <ul className="flex justify-center items-center gap-5 max-lg:flex-col">
            {skillsArray.map ((item, index) => (
              <li key={index}>
                <article
                  className={`${index === 0 ? 'bg-primary-blue sunshineBlue' : 'bg-primary-pink sunshinePink'} w-[500px] rounded-3xl px-8 py-10  bg-cover bg-no-repeat max-sm:w-full`}
                >
                  <h3 className="text-[30px] text-secondary-black font-black mb-3">
                    {item.title}
                  </h3>
                  <div className="flex flex-wrap gap-5 items-center max-sm:gap-3">
                    {item.skillsInfo &&
                      item.skillsInfo.map ((skillsItem, skillsIndex) => (
                        <SkillsButton
                          key={skillsIndex}
                          language={skillsItem.language}
                          description={skillsItem.skill}
                          img={skillsItem.iconUrl}
                        />
                      ))}
                  </div>
                </article>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;
