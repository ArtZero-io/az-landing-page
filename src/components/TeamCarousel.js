import React from "react";
import { Carousel } from "@trendyol-js/react-carousel";

function TeamCarousel({ size }) {
  const showNumber = size?.width >= 600 ? 5 : 2;
  return (
    <div
      style={{
        maxWidth: "1186px",
        margin: "0 auto",
        padding: "0 24px 194px 24px ",
      }}
    >
      <Carousel
        className="team-carousel"
        show={showNumber}
        slide={1}
        responsive={true}
        swiping={true}
        infinite={false}
        leftArrow={<div className="arrow left" />}
        rightArrow={<div className="arrow right" />}
      >
        {teams.map(({ isFounder, src, name, position }) => (
          <>
            <div className="member">
              {isFounder && <div className="circle" />}
              <img
                className={isFounder ? "brian" : ""}
                alt="team-brian"
                src={`/assets/${src}`}
              />
              <div className="name">{name}</div>
              <div className="position">{position}</div>
            </div>
          </>
        ))}
      </Carousel>
    </div>
  );
}

export default TeamCarousel;
const teams = [
  {
    isFounder: true,
    src: "team-brian-nguyen.png",
    name: "Brian Nguyen",
    position: "Founder",
  },
  {
    isFounder: false,
    src: "team-ha-vu.png",
    name: "Ha Vu",
    position: "Business Development",
  },
  {
    isFounder: false,
    src: "team-frankie-kao.png",
    name: "Frankie kao",
    position: "Art Director",
  },
  {
    isFounder: false,
    src: "team-albert-tran.png",
    name: "Albert Tran",
    position: "Smart Contract & Back-end Developer",
  },
  {
    isFounder: false,
    src: "team-j.png",
    name: "J.",
    position: "Full-Stack Developer",
  },
];
