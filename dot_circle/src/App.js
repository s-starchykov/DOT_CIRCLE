import {Route} from "react-router-dom";
import s from './App.module.scss'
import About from './layout/about/about'
import Header from './layout/menu/menu';
import WelcomePage from "./layout/welcome_page/welcome_page";
import NoPage from "./layout/common/no_page/no_page";
import Useful from "./layout/useful/useful";
import Webinars from "./layout/webinars/webinars";
import DreamTeam from "./layout/dream_team/dream_team";
import Consulting from "./layout/consalting/consulting";

import PhotoGallery from "./layout/gallery/gallery";
import Footer from "./layout/footer/footer";
import IndividualConsulting from "./layout/consalting/individual_consalting/individual_consalting";
import BusinessTrainings from "./layout/business_trainings/business_trainings";
import TimeManagement from "./layout/business_trainings/time_management/time management";
import StressManagement from "./layout/business_trainings/stres_management/stress.management";


const App = () => {
    return (
        <div className={s.app}>
            <Header/>
            <div className={s.appContent}>
                <Route exact path={'/'} render={() => <About/>}/>
                <Route exact path={'/trainings'} render={() => <BusinessTrainings name={'Business trainings'}/>}/>
                <Route exact path={'/open_programs'} render={() => <NoPage name={'Open programs'}/>}/>
                <Route exact path={'/team'} render={() => <DreamTeam name={'Team'}/>}/>
                <Route exact path={'/consulting'} render={() => <Consulting name={'Consulting'}/>}/>
                <Route exact path={'/webinars'} render={() => <Webinars name={'Webinars'}/>}/>
                <Route exact path={'/useful'} render={() => <Useful name={'Useful'}/>}/>
                <Route exact path={'/gallery'} render={() => <PhotoGallery name={'Gallery'}/>}/>
                <Route exact path={'/individual_consulting'} render={() => <IndividualConsulting name={'Individual_consulting'}/>}/>
                <Route exact path={'/time_management'} render={() => <TimeManagement name={'Time_management'}/>}/>
                <Route exact path={'/stress_management'} render={() => <StressManagement name={'Stress_management'}/>}/>
                <Footer/>
            </div>
            <Route path={'/welcome'} render={() => <WelcomePage/>}/>
        </div>
    )
};

export default App;