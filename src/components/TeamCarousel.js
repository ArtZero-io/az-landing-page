import React from "react";
import { ScrollingCarousel } from "@trendyol-js/react-carousel";

function TeamCarousel({ size }) {
  const showNumber = size?.width >= 600 ? 5 : 2;
  return (
    <>
      <div
        data-aos="fade-up"
        data-aos-delay="200"
        data-aos-duration="1000"
        style={{
          maxWidth: "1186px",
          margin: "0 auto",
          padding: "0 24px 194px 24px ",
        }}
      >
        <ScrollingCarousel
          className="team-carousel team-scrolling-carousel"
          show={showNumber}
          slide={1}
          responsive={true}
          swiping={true}
          infinite={false}
          leftArrow={<div className="" />}
          rightArrow={<div className="" />}
        >
          {teams.map(({ isFounder, src, name, position, position2 }) => (
            <>
              <div key={name} className={`${src} member`}>
                {isFounder && <div className={`${src} circle`} />}
                <img
                  className={src}
                  alt="team-brian"
                  src={`/assets/${src}.png`}
                />
                <div className="name" style={{ marginBottom: "8px" }}>
                  {name}
                </div>
                <div className="position">{position}</div>
                {position2 && <div className="position2">{position2}</div>}
              </div>
            </>
          ))}
        </ScrollingCarousel>
      </div>
    </>
  );
}

export default TeamCarousel;

const teams = [
  {
    isFounder: true,
    src: "team-brian-nguyen",
    name: "Brian Nguyen",
    position: "Founder",
  },
  // {
  //   isFounder: true,
  //   src: "team-ha-vu",
  //   name: "Ha Vu",
  //   position: "Business",
  //   position2: "Development",
  // },
  {
    isFounder: true,
    src: "team-phoebe-hoang",
    name: "Phoebe Hoang",
    position: "CMO",
    position2: "",
  },
  {
    isFounder: true,
    src: "team-frankie-kao",
    name: "Frankie kao",
    position: "Art Director",
  },
  {
    isFounder: true,
    src: "team-albert-tran",
    name: "Albert Tran",
    position: "Smart Contract &",
    position2: "Back-end Developer",
  },
  {
    isFounder: true,
    src: "team-j",
    name: "J.",
    position: "Full-Stack",
    position2: "Developer",
  },
];
