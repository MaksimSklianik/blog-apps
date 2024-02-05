import logo from './logo.svg';
import './App.css';
import {Header} from "./coponents/Header/Header";
import {BlogContent} from "./coponents/BlogContent/BlogContent";
import {Footer} from "./coponents/Footer/Footer";

export function App() {
    return (<div className="App">
        <Header/>
        <main>
            <BlogContent></BlogContent>
        </main>
        <Footer/>
    </div>);
}


