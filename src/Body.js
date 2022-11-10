import React from "react";
import "./Body.css";
import Header from "./Header";
import { useStateValue } from "./StateProvider";
import SongRow from "./SongRow";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";

function Body({ spotify }) {
  const [{ discover_weekly }, dispatch] = useStateValue();

  const playPlaylist = (id) => {
    spotify
      .play({
        context_uri: `spotify:playlist:37i9dQZEVXcJZyENOWUFo7`,
      })
      .then((res) => {
        spotify.getMyCurrentPlayingTrack().then((r) => {
          dispatch({
            type: "SET_ITEM",
            item: r.item,
          });
          dispatch({
            type: "SET_PLAYING",
            playing: true,
          });
        });
      });
  };

  const playSong = (id) => {
    spotify
      .play({
        uris: [`spotify:track:${id}`],
      })
      .then((res) => {
        spotify.getMyCurrentPlayingTrack().then((r) => {
          dispatch({
            type: "SET_ITEM",
            item: r.item,
          });
          dispatch({
            type: "SET_PLAYING",
            playing: true,
          });
        });
      });
  };

  return (
    <div className="body">
      <Header spotify={spotify} />

      <div className="body__info">
        <img src="https://newjams-images.scdn.co/image/ab676477000033ad/dt/v3/discover-weekly/xZ6U6VmlRlBAxMFGqqxRIZlBQjCtXxxOM6XH8BPouleKcszTh4-k9S8IugswModiaP06JtNs5t6pHmPDZdI2oxjrfhViNsK-PgKzq_ReaIl3kfKb_omaP5EMo04-Bxjj274UnpJPN5Q3Ks5vUYtLBOQ9ehEGgzurG4NN6pBGxRHkPLM5kmYjyHyxS3xeYdyBdVQTSxgiOrouu27RejKDvjwmoBwGSMLRYJcRNQBp_q5sNnWKn6sK3BWMYLi2598-mUjQK-CFp7IC22hlNhhMjUuRSSxmaooDM6v1bUot1mcRb5Mtew8Ko1VbM_tYoAiBeK3S-WtdO2_A1iPQRLGEqShT5tSdZYe4h_ftAlkPvTGK6dOrTbBAczUEnsToofkvA-PMyF0uFKyl-VjYfTB8OagLuEZCS8jWnzWgItEsfg8=/OTA6OTU6NjFUNDEtNjAtMg==" alt="" />
        <div className="body__infoText">
          <strong>PLAYLIST</strong>
          <h2>Discover Weekly</h2>
          <p>{discover_weekly?.description}</p>
        </div>
      </div>

      <div className="body__songs">
        <div className="body__icons">
          <PlayCircleFilledIcon
            className="body__shuffle"
            onClick={playPlaylist}
          />
          <FavoriteIcon fontSize="large" />
          <MoreHorizIcon />
        </div>

        {discover_weekly?.tracks.items.map((item) => (
          <SongRow playSong={playSong} track={item.track} />
        ))}
      </div>
    </div>
  );
}

export default Body;
