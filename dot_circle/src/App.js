import Content from './Components/Content/Content.jsx'
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import {BrowserRouter} from "react-router-dom";


const App = () => {
    return (
        // Wrap App component with BrowserRouter to use Route
        <BrowserRouter>
            <div>
                <Header/>
                <Content/>
                <Footer/>
            </div>
        </BrowserRouter>
    )
};

export default App;
