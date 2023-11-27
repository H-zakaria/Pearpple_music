import React, { useEffect, useState } from "react";
import "./loader.scss";
const Loader: React.FC = () => {
  type Petal = {
    angle: number;
    id: number;
    active: boolean;
  };
  const [petals, setPetals] = useState<Array<Petal>>([]);
  const [isAnimating, setIsAnimating] = useState(false);
  let petalsList: Array<Petal> = [];
  let nbPetals = 11;
  let intervalId;
  let animationTime = 0.8;
  let activeTime = animationTime / nbPetals;

  useEffect(() => {
    petalsList = [];
    for (let i = 0; i < nbPetals; i++) {
      let angle = (360 / nbPetals) * (i + 1);
      petalsList.push({ angle: angle, id: i, active: false });
    }
    setPetals(petalsList);
  }, []);

  useEffect(() => {
    if (!isAnimating && petals.length > 0) {
      startAnimation(petals);
    }
  }, [petals]);

  let animationIndex = 0;

  function startAnimation(petals: Array<Petal>) {
    setIsAnimating(true);
    intervalId = setInterval(function () {
      let currentPetals = petals.map((petal) => {
        petal.id === animationIndex
          ? (petal.active = true)
          : (petal.active = false);
        return petal;
      });
      animationIndex++;
      if (animationIndex === nbPetals) {
        animationIndex = 0;
      }

      setPetals(currentPetals);
    }, activeTime * 1000);
  }

  return (
    <div id="loader">
      {petals.length > 0
        ? petals.map((petal) => (
            <div
              className={petal.active ? "petal active" : "petal"}
              key={petal.id}
              style={{ transform: `rotate(${petal.angle}deg) translateY(60%)` }}
            ></div>
          ))
        : null}
    </div>
  );
};

export default Loader;
