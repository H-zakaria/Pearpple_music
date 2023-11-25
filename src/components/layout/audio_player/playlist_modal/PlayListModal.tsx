import React, { useState } from "react";
import "./playlist_modal.scss";

interface Props {
  showPlaylistModal: boolean;
  toggleModal: () => void;
  songs: string[];
}
const PlayListModal: React.FC<Props> = ({
  showPlaylistModal,
  toggleModal,
  songs,
}) => {
  console.log(songs);
  return (
    <div id="play_lister" className={showPlaylistModal ? "active" : ""}>
      <div className="relative">
        <div className="blurred"></div>
        <div className="playlist_container">
          <h1 className="title">Up Next</h1>

          <div className="playlist">
            {songs.length > 0 && songs !== undefined ? (
              songs.map((song) => <h4 key={song}>{song}</h4>)
            ) : (
              <div className="no_songs">
                <span>No upcomming songs</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayListModal;
