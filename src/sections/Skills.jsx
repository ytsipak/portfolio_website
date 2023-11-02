import SkillsButton from '../components/SkillsButton';

const Skills = () => {
  return (
    <section>
      <div className="wrapper">
        <p className="title text-center">
          Expertise <br />
          {' '}
          <span className="bg-primary-yellow rounded-3xl p-5">
            <span className="title-border text-black">Showcase</span>
          </span>
        </p>

        <div>
          <ul className="flex justify-center items-center">
            <li>
              <article className="bg-primary-blue w-96 h-96">
                <h3>Hard Skills</h3>
                <SkillsButton language="html" />
              </article>
            </li>
            <li>
              <article className="bg-primary-pink w-96 h-96">
                <h3 className=" text-[30px]">Hard Skills</h3>
                <SkillsButton language="css" />
              </article>
            </li>

          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;
