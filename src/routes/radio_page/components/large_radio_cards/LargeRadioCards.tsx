import React, { useEffect, useState } from "react";
import "./large_radio_cards.scss";
import { IoCalendar } from "react-icons/io5";
import { BiSolidPear } from "react-icons/bi";
import { RxDotFilled } from "react-icons/rx";

const LargeRadioCards: React.FC = () => {
  const [radioCards, setRadioCards] = useState<null | Array<JSX.Element>>(null);

  const cards = [
    {
      name: "radio Freedom",
      theme: "clouds",
      headerDescription: "Spread your wings",
      liveTime: "10AM - 12PM",
      specificTitle: "Feeling windy today?",
      bottomDescription: "Sky is the limit, if you don't own a rocketship ",
    },
    {
      name: "Binge dancing podcast",
      theme: "ballet",
      headerDescription: "Feet hurtin feels good",
      liveTime: "10PM - 4AM",
      specificTitle: "DJs furry",
      bottomDescription: "Bring energy drinks, big toes energy",
    },
    {
      name: "All about Ducks FM",
      theme: "duck",
      headerDescription: "Take a Quick Quack!",
      liveTime: "6AM - 2PM",
      specificTitle: "Lets ruffle some feathers",
      bottomDescription: "Join the dunking ducks!",
    },
  ];

  interface RadioCardProps {
    name: string;
    theme: string;
    headerDescription: string;
    liveTime: string;
    specificTitle: string;
    bottomDescription: string;
  }
  const RadioCard: React.FC<RadioCardProps> = ({
    name,
    theme,
    headerDescription,
    liveTime,
    specificTitle,
    bottomDescription,
  }) => {
    const [img_src, setImg_src] = useState("");
    useEffect(() => {
      setImg_src(`https://source.unsplash.com/random/?${theme}/600x400`);
    }, [theme]);
    return (
      <div className="radio_card">
        <div className="header">
          <div className="text">
            <h4 className="radio_title">
              <BiSolidPear size={16} />
              {name}
            </h4>
            <span className="description">{headerDescription}</span>
          </div>
          <span className="calendar">
            <IoCalendar size={16} />
          </span>
        </div>
        <div className="image_container">
          <img src={img_src} alt="radio_image" />
          <div className="bottom">
            <span className="live_time">
              LIVE{" "}
              <span className="dot_icon">
                <RxDotFilled size={10} />
              </span>{" "}
              {liveTime}
            </span>
            <span className="specific_title">{specificTitle}</span>
            <span className="description">{bottomDescription}</span>
          </div>
        </div>
      </div>
    );
  };

  useEffect(() => {
    setRadioCards(makeCards());
  }, []);
  function makeCards() {
    const rcards: any[] = [];
    cards.map((card, i) => {
      rcards.push(<RadioCard {...card} key={i} />);
    });
    return rcards;
  }

  return (
    <div className="large_radio_cards">
      <h1 className="page_title">Radio</h1>

      {radioCards && (
        <div className="list">
          {radioCards.map((card, i) => (
            <div key={i} className="container">
              {card}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default LargeRadioCards;
