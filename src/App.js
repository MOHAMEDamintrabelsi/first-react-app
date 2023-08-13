import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBare from './Components/NavBare';
import { Forms } from './Components/Forms';
import Array from './Components/Array';
import photo from "./photo.jpg"



function App() {
  return (
    <div className="App">
      <h1 className='HE' >Hello </h1>
      <img src={photo} alt="" />
      <img src="/pice.jpg" alt="" />
      <img src="https://cdn.hashnode.com/res/hashnode/image/upload/v1610093815826/jvmbLIxJv.png?border=1,CCCCCC&auto=compress&auto=compress,format&format=webp" alt="pic" />
      <NavBare/>
      <NavBare/>
      <NavBare/>
      <NavBare/>
      <NavBare/>
      <NavBare/>
      <NavBare/>
      <NavBare/>
      <Forms/>
      <Array/>
   
    </div>
  );
}

export default App;
