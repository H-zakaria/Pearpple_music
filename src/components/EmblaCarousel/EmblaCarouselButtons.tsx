import * as React from "react";

import { IoChevronForward, IoChevronBack } from "react-icons/io5";

export const PrevButton = ({
  enabled,
  onClick,
  buttonSize = 30,
}: {
  enabled: boolean;
  onClick(): void;
  buttonSize?: number;
}) => (
  <button
    className="embla__button embla__button--prev"
    onClick={onClick}
    disabled={!enabled}
  >
    <IoChevronBack size={buttonSize} />
  </button>
);

export const NextButton = ({
  enabled,
  onClick,
  buttonSize = 30,
}: {
  enabled: boolean;
  onClick(): void;
  buttonSize?: number;
}) => (
  <button
    className="embla__button embla__button--next"
    onClick={onClick}
    disabled={!enabled}
  >
    <IoChevronForward size={buttonSize} />
  </button>
);
