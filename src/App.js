import "./style.css";
import MoviePlaylist from "./componenets/MoviePlaylist";
import SongPlaylist from "./componenets/SongPlaylist";
import { resetMovie,resetSong } from "./store";
import { useDispatch } from "react-redux";

export default function App() {
  const dispatch = useDispatch()
  const handleResetClick = () => {
    //
    dispatch(resetMovie())
    dispatch(resetSong())
  };

  return (
    <div className="container is-fluid">
      <button onClick={() => handleResetClick()} className="button is-danger">
        Reset Both Playlists
      </button>
      <hr />
      <MoviePlaylist />
      <hr />
      <SongPlaylist />
    </div>
  );
}
