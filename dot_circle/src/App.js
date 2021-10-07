import style from './App.module.css'
import Content from './Components/Content/Content.jsx'
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import {BrowserRouter, Route} from "react-router-dom";


const App = () => {
    return (
        <BrowserRouter>
            <div className={style.app}>
                <Header/>
                <Content/>
                <Footer/>
            </div>
        </BrowserRouter>
    )
};

export default App;
