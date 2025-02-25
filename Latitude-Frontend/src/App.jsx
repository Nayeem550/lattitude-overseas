import { Outlet } from 'react-router-dom';
import Footer from './Sections/Footer';
import Header from './Sections/Header';

function App() {
    return (
        <>
        

            <Header />
            <Outlet />
            <Footer />
        </>
    );
}

export default App;
