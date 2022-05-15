import './App.css';
import Navbar         from './components/navbar';
import Notifications  from './components/notifications';
import Options        from './components/options';
import VideoPlayer    from './components/videoPlayer';

function App() {
  return (
    <div className="wrapper">
        <Navbar />
        <VideoPlayer />
        <Options>
            <Notifications />
        </Options>  
    </div>
  );
}

export default App;
