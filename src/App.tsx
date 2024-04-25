import './App.css';
import { Header } from './layout/header/Header';
import { Contact } from './layout/sections/contact/Contact';
import { Main } from './layout/sections/main/Main';
import { Skills } from './layout/sections/skills/Skills';
import { Slogan } from './layout/sections/slogan/Slogan';
import { Testimony } from './layout/sections/testimony/Testimony';
import { Works } from './layout/sections/works/Works';


function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Skills/>
            <Works/>
            <Testimony/>
            <Contact/>
            <Slogan/>
        </div>
    );
}

export default App;