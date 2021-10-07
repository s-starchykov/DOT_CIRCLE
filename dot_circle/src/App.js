
import style from './App.module.css'
import Content from './Components/Content/Content.jsx'
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';


const App = () => {
    return (
        <div className={style.app}>
            <Header/>
            <Content/>
            <Footer/>

        </div>
    )
};

export default App;
