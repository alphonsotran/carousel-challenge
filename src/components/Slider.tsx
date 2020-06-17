import React from "react";

export interface Props {
  url: string;
}

const Slider = ({ url }: Props) => {
  return (
    <div>
      <img src={require(`${url}`)} alt="" />
    </div>
  );
};

export default Slider;
