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
  return (
    <div id="play_lister" className={showPlaylistModal ? "active" : ""}>
      <div className="relative">
        <div className="blurred"></div>
        <div className="playlist_container">
          <h1 className="title">Up Next</h1>

          {songs.length > 0 && songs !== undefined && (
            <div className="playlist">
              {songs.map((song) => (
                <h4 key={song}>{song}</h4>
              ))}
            </div>
          )}
          <div className="no_songs">
            <span>No upcomming songs</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayListModal;
