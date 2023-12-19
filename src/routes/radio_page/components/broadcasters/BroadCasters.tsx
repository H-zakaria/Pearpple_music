import React, { Fragment, useEffect, useState } from "react";
import "./broadcaster.scss";
import { RxDotsHorizontal } from "react-icons/rx";
import EmblaCarousel from "../../../../components/EmblaCarousel/EmblaCarousel";

const BroadCasters: React.FC = () => {
  const [broadcasters, setBroadcasters] = useState<Array<
    Array<JSX.Element>
  > | null>(null);

  const BoadcastItem = ({ index }: { index: number }) => {
    return (
      <div className="broadcast_item">
        <div className="image_container">
          <img
            src={`https://source.unsplash.com/random/?broadcaster/600x400?sig=${index}`}
            alt="broadcaster_logo"
          />
        </div>

        <div className="text">
          <h4 className="broadcaster_name">name name name</h4>
          <span className="description">
            description description description description
          </span>
        </div>

        <span className="icon">
          <RxDotsHorizontal size={20} />
        </span>
      </div>
    );
  };
  function createBroacastElements(amount: number) {
    let list: Array<Array<JSX.Element>> = [];
    const iterations = Math.ceil(amount / 2);

    for (let i = 0; i < iterations; i++) {
      let column = [];
      if (i === iterations - 1) {
        column.push(
          <Fragment key={i * 10}>
            <BoadcastItem index={i * 10} />
          </Fragment>
        );
      } else {
        for (let y = 0; y < 2; y++) {
          column.push(
            <Fragment key={i + y}>
              <BoadcastItem index={i + y} />
            </Fragment>
          );
        }
      }
      list.push(column);
    }

    return list;
  }

  useEffect(() => {
    setBroadcasters(createBroacastElements(9));
  }, []);

  return (
    <div className="broadcasters">
      {broadcasters && (
        <div className="section">
          <EmblaCarousel sectionTitle="Broadcasters">
            {broadcasters.map((column, index) => (
              <Fragment key={index}>{column}</Fragment>
            ))}
          </EmblaCarousel>
        </div>
      )}
      {broadcasters && (
        <div className="section">
          <EmblaCarousel sectionTitle="Broadcasters">
            {broadcasters.map((column, index) => (
              <Fragment key={index}>{column}</Fragment>
            ))}
          </EmblaCarousel>
        </div>
      )}
    </div>
  );
};

export default BroadCasters;
