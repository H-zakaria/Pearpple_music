import React, { Fragment, useEffect, useState } from "react";
import "./browsing_carousels.scss";

import img_src from "../../assets/jackets/frog.jpg";

import Card from "../../components/card/Card";
import LargeCard from "../../components/large_card/LargeCard";
import ListedSong from "../../components/listed_song/ListedSong";
import EmblaCarousel from "../../components/EmblaCarousel/EmblaCarousel";

export interface SongDetails {
  name: string;
  category: string;
  description: string;
  img_src: string;
}
type SectionTheme = {
  themeName: string;
  sectionTitle: string;
  doubleRow: boolean;
};
type Section = {
  doubleRow: boolean;
  items: Array<JSX.Element>;
  title: string;
};
const sectionThemes = [
  {
    themeName: "artist",
    sectionTitle: "new artists",
    doubleRow: false,
  },
  {
    themeName: "music",
    sectionTitle: "handmade playlists",
    doubleRow: false,
  },
  {
    themeName: "dj",
    sectionTitle: "new DJ mixes",
    doubleRow: true,
  },
  {
    themeName: "holiday",
    sectionTitle: "holiday playlists",
    doubleRow: false,
  },
  {
    themeName: "wild",
    sectionTitle: "go wild",
    doubleRow: false,
  },
];

const BrowsingCarousels: React.FC = () => {
  const [songs, setSongs] = useState<Array<SongDetails>>([]);
  const [carouselSections, setCarouselSections] =
    useState<null | Array<Section>>(null);
  const [carouselSections2, setCarouselSections2] =
    useState<null | Array<Section>>(null);
  const [bigCards, setBigCards] = useState<Array<JSX.Element> | null>(null);
  function makeSongs() {
    let songList: Array<SongDetails> = [];
    for (let i = 0; i < 20; i++) {
      songList.push({
        name: "song " + i,
        description: "song " + i + " description",
        category: "song " + i + " category",
        img_src: img_src,
      });
    }
    setSongs(songList);
  }

  useEffect(() => {
    makeSongs();
  }, []);

  function createSections(
    sectionThemes: SectionTheme[]
  ): Array<Array<Section>> {
    const sections: Array<Section> = [];

    sectionThemes.forEach((theme) => {
      const section: Section = {
        doubleRow: theme.doubleRow,
        items: [],
        title: theme.sectionTitle,
      };

      songs.forEach((_, i) => {
        section.items.push(<Card index={i} theme={theme.themeName} />);
      });

      sections.push(section);
    });
    const section_1 = sections.slice(0, Math.ceil(sections.length / 2));
    const section_2 = sections.slice(
      Math.ceil(sections.length / 2),
      sections.length
    );

    return [section_1, section_2];
  }
  function createBigCards(theme: string): Array<JSX.Element> {
    const bigCards = [];
    for (let i = 0; i < 10; i++) {
      bigCards[i] = <LargeCard index={i} theme={theme} />;
    }
    return bigCards;
  }

  function createListedSongs() {
    let listedSongs: Array<Array<JSX.Element>> = [];

    for (let i = 0; i < 4; i++) {
      let column = [];
      for (let i = 0; i < 4; i++) {
        column.push(<ListedSong index={i} />);
      }
      listedSongs.push(column);
    }
    return listedSongs;
  }
  const ListedSongs = () => {
    const [listedSongs, setListedSongs] = useState<null | Array<
      Array<JSX.Element>
    >>(null);
    useEffect(() => {
      setListedSongs(createListedSongs());
    }, []);
    return (
      <>
        {listedSongs && (
          <EmblaCarousel className="listed_songs">
            {listedSongs.map((song, index) => (
              <Fragment key={index}>{song}</Fragment>
            ))}
          </EmblaCarousel>
        )}
      </>
    );
  };
  useEffect(() => {
    if (songs) {
      setCarouselSections(createSections(sectionThemes)[0]);
      setCarouselSections2(createSections(sectionThemes)[1]);
      setBigCards(createBigCards("art"));
    }
  }, [songs]);
  return (
    <div id="browsing_carousels">
      <h1 className="page_title">Browse</h1>

      {bigCards && (
        <EmblaCarousel className="big_cards">
          {bigCards.map((bigCard, index) => (
            <Fragment key={index}>{bigCard}</Fragment>
          ))}
        </EmblaCarousel>
      )}
      {carouselSections &&
        carouselSections.map((section, i) => (
          <div key={i + 10} className="section">
            <h2 className="section_title">{section.title}</h2>
            <EmblaCarousel
              doubleRow={section.doubleRow}
              className="small_cards"
            >
              {section.items.map((item, index) => (
                <Fragment key={index}>{item}</Fragment>
              ))}
            </EmblaCarousel>
          </div>
        ))}
      <ListedSongs />
      {carouselSections2 &&
        carouselSections2.map((section, i) => (
          <div key={i + 10} className="section">
            <h2 className="section_title">{section.title}</h2>
            <EmblaCarousel
              doubleRow={section.doubleRow}
              className="small_cards"
            >
              {section.items.map((item, index) => (
                <Fragment key={index}>{item}</Fragment>
              ))}
            </EmblaCarousel>
          </div>
        ))}

      {/* {carouselSections2 &&
        carouselSections2.map((section, i) => (
          <div key={i + 10} className="section">
            <h2 className="section_title">{section.title}</h2>
            <MyCarousel
              items={section.items}
              doubleRow={section.doubleRow}
              gridGap={10}
              breakpoints={breakpoints}
            />
          </div>
        ))} */}
    </div>
  );
};

export default BrowsingCarousels;
