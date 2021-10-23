import {Route} from "react-router-dom";
import s from './App.module.css'
import About from './layout/about/about'
import Header from './layout/header/header';
import WelcomePage from "./layout/welcome_page/welcome_page";


const App = () => {
    return (
        <div className={s.app}>
            <Header/>
            <div className={s.appContent}>
                <Route exact path={'/'} render={() => <About/>}/>
                {/*<Footer/>*/}
            </div>
            <Route path={'/welcome'} render={() => <WelcomePage/>}/>
        </div>
    )
};

export default App;