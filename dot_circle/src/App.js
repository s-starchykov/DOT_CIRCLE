import style from './App.module.css'
import Content from './layout/content/content'
import Header from './layout/header/header';
import Footer from './layout/footer/footer';
import {BrowserRouter} from "react-router-dom";


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