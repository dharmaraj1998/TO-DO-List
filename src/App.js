import "./style.css";
import MoviePlaylist from "./componenets/MoviePlaylist";
import SongPlaylist from "./componenets/SongPlaylist";

export default function App() {
  const handleResetClick = () => {
    //
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
