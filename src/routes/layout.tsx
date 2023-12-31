import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Navigation from "../components/navigation/Navigation";
import AudioPlayer from "../components/audio_player/AudioPlayer";
import { useEffect, useState } from "react";
import AudioPlayerModal from "../components/audio_player/audio_modal/AudioPlayerModal";
import { useMediaQuery } from "react-responsive";
import PlayListModal from "../components/audio_player/playlist_modal/PlayListModal";
import Banner from "../components/banner/Banner";
import MobileAudioPlayer from "../components/audio_player/mobile/MobileAudioPlayer";

export default function Layout() {
  const [showPlayerModal, setShowPlayerModal] = useState(false);
  const [showPlaylistModal, setShowPlaylistModal] = useState(false);
  const isTablet = useMediaQuery({
    query: "(min-width: 483px)",
  });
  const isDesktop = useMediaQuery({
    query: "(min-width: 1010px)",
  });
  let playListSongs: string[] = [];
  //empeche transition du player_modal quand on passe de tablet && modal active à mobile puis retour sur tablet
  useEffect(() => {
    if (!isTablet) {
      setShowPlayerModal(false);
    }
    if (!isDesktop) {
      setShowPlaylistModal(false);
    }
  }, [isTablet, isDesktop]);

  const { pathname } = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    if (pathname === "/") {
      navigate("/listen_now");
    }
  }, [pathname]);

  function toggleModal() {
    setShowPlaylistModal(!showPlaylistModal);
  }
  return (
    <div id="app">
      <Navigation />
      <div id="main_content">
        <AudioPlayer
          setShowPlayerModal={setShowPlayerModal}
          toggleModal={toggleModal}
        />
        <AudioPlayerModal
          showPlayerModal={showPlayerModal}
          setShowPlayerModal={setShowPlayerModal}
        />
        <PlayListModal
          showPlaylistModal={showPlaylistModal}
          songs={playListSongs}
        />
        <div id="content">
          <Outlet />
        </div>
        <Banner />
        <MobileAudioPlayer setShowPlayerModal={setShowPlayerModal} />
      </div>
    </div>
  );
}
