import { Navbar } from './components/Layout/Navbar';
import { Footer } from './components/Layout/Footer';
import { Hero } from './components/Sections/Hero';
import { About } from './components/Sections/About';
import { Skills } from './components/Sections/Skills';
import { Projects } from './components/Sections/Projects';
import { Contact } from './components/Sections/Contact';

function App() {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />

            <main className="flex-grow pt-20">
                <div className="container">
                    <Hero />
                    <About />
                    <Skills />
                    <Projects />
                    <Contact />
                </div>
            </main>

            <Footer />
        </div>
    );
}

export default App;
