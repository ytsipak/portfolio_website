import {About, Skills, Projects, Contact, Hero} from './sections';
import Nav from './components/Nav';

export default function App () {
  return (
    <main className="relative bg-gradient-to-b from-secondary-black via-secondary-black to-secondary-darkgrey to-60%">
      <Nav />
      <section className="bg-secondary-black">
        <Hero />
      </section>
      <section className="section rounded-t-[70px] max-sm:rounded-t-[20px]">
        <About />
      </section>
      <section className="section pb-12">
        <Skills />
      </section>
      <section className="section pt-12">
        <Projects />
      </section>
      <section className="section bg-secondary-black rounded-t-[70px] bg-[url('./assets/images/grid.png')] bg-cover bg-no-repeat pb-12">
        <Contact />
      </section>
    </main>
  );
}
// bg-gradient-to-b from-secondary-black via-secondary-black to-secondary-darkgrey
