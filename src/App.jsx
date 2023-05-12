import "./App.css";
import Navbar from "./component/Navbar";
import SongDetail from "./component/SongDetail";
import ListSong from "./component/ListSong";
import { useSelector } from "react-redux";
import MusicPlayer from "./component/MusicPlayer";

function App() {
  const { activeSong } = useSelector((state) => state.player);

  return (
    <div className="App relative">
      <Navbar />
      <div className="grid grid-cols-3 mt-24 pb-24 h-[100vh]">
        <SongDetail />
        <ListSong />
      </div>

      {activeSong?.trackId && (
        <div className="fixed h-28 bottom-0 left-0 right-0 flex animate-slideup bg-gradient-to-br from-white/80 to-gray-400 backdrop-blur-lg rounded-t-3xl z-10">
          <MusicPlayer />
        </div>
      )}
    </div>
  );
}

export default App;
