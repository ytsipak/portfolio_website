import {Button} from '../components';
import {contactIcons} from '../constants';

const Contact = () => {
  return (
    <section id="Contact">
      <div className="wrapper">
        <h2 className="title text-center mb-52">
          Get
          <span className="text-primary-pink"> in Touch</span>
          <br />
          with <span className="text-primary-blue"> Me</span>
        </h2>
        <div className="flex justify-between items-center">
          <p className="uppercase font-muscle text-3xl">ytsipak</p>
          <p className="text-center text-secondary-grey capitalize">
            &copy; Copyright 2023 Yuriy Tsipak. All right reserved.
          </p>
          <ul className="flex items-center gap-5">
            {contactIcons.map (item => (
              <li
                key={item.path}
                className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-primary-yellow p-5"
              >
                <a href={item.href}>
                  <svg
                    className={`fill-${item.fill}`}
                    width="30px"
                    height="30px"
                  >
                    <use href={item.path} />
                  </svg>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Contact;
