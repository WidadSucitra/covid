import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// import pages
import Global from './Containers/Global/Global'
import Countries from './Containers/Countries/Countries'

function App() {
    return (
        <div> 
            <Global/>
            <Countries/>
        </div>
        

    );
}

export default App;