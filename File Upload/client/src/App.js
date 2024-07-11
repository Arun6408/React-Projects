import './App.css';
import FileUpload from './components/FileUpload';

const App=()=><div className="conatiner mt-4 d-flex flex-column justify-content-around align-content-center">
  <div className="display-4 text-center mb-4">
    <i className="fab fa-react"></i>React Image Uploader
  </div>
  <FileUpload/>
</div>

export default App;
