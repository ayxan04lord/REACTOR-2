import Article from '../article/Article';
import Aside from '../aside/Aside';
import Footer from '../footer/Footer';

import Header from '../header/Header';
import Nav from '../nav/Nav';
import './App.css'


const App = () => {

    return(
        <div className="App">
           <Header/>
           <Nav/>
           <Article/>
           <Aside/>
           <Footer/>
        </div>
    )

}

export default App;