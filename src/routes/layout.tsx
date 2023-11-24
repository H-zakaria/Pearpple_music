import { Outlet } from "react-router-dom";
import Navigation from "../components/navigation/Navigation";
import AudioPlayer from "../components/layout/audio_player/AudioPlayer";
import { useEffect, useState } from "react";
import AudioPlayerModal from "../components/layout/audio_player/audio_modal/AudioPlayerModal";
import { useMediaQuery } from "react-responsive";

export default function Layout() {
  const [showPlayerModal, setShowPlayerModal] = useState(false);
  const [noTransitions, setNoTransitions] = useState(false);
  const isTablet = useMediaQuery({
    query: "(min-width: 483px)",
  });
  //empeche transition du player_modal quand on passe de tablet && modal active à mobile puis retour sur tablet
  useEffect(() => {
    if (isTablet) {
      setShowPlayerModal(false);
    }
  }, [isTablet]);

  return (
    <div id="app">
      <Navigation />
      <div id="main_content">
        <AudioPlayer setShowPlayerModal={setShowPlayerModal} />
        <AudioPlayerModal
          showPlayerModal={showPlayerModal}
          setShowPlayerModal={setShowPlayerModal}
        />
        <div id="page">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
