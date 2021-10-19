import {Route, BrowserRouter, withRouter} from "react-router-dom";
import s from './App.module.css'
import About from './layout/about/about'
import Header from './layout/header/header';
import Footer from './layout/footer/footer';


const App = () => {
    return (
        <BrowserRouter>
            <div className={s.app}>
                <Header/>
                <div className={s.appContent}>
                    <Route path={'/about'} render={() =>  <About/>}/>

                    {/*<Footer/>*/}
                </div>
            </div>
        </BrowserRouter>
    )
};

export default App;