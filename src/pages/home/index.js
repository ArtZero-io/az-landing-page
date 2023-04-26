import React, { useRef, useState, useEffect } from "react";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import RoadmapItem from "../../components/RoadmapItem/RoadmapItem";
import Footer from "../../components/Footer";
import FooterMenuMobile from "../../components/FooterMenuMobile";
import TeamCarousel from "../../components/TeamCarousel";
import toast from "react-hot-toast";

function useWindowSize() {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Call handler right away so state gets updated with initial window size
    handleResize();

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount

  return windowSize;
}

const HomePage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const airdropRef = useRef(null);
  const roadmapRef = useRef(null);
  const tokenomicsRef = useRef(null);
  const partnersRef = useRef(null);
  const teamRef = useRef(null);
  const subscribeRef = useRef(null);

  const [subEmail, setSubEmail] = useState("");
  const scrollToAirdrop = () =>
    airdropRef.current.scrollIntoView({ behavior: "smooth" });
  const scrollToRoadmap = () =>
    roadmapRef.current.scrollIntoView({ behavior: "smooth" });
  const scrollToTokenomics = () =>
    tokenomicsRef.current.scrollIntoView({ behavior: "smooth" });
  const scrollToPartners = () =>
    partnersRef.current.scrollIntoView({ behavior: "smooth" });
  const scrollToTeam = () =>
    teamRef.current.scrollIntoView({ behavior: "smooth" });
  const scrollToSubscribe = () =>
    subscribeRef.current.scrollIntoView({ behavior: "smooth" });

  const openMenu = () => {
    document.body.style.position = "fixed";
    setIsMenuOpen(true);
  };
  const closeMenu = () => {
    document.body.style.position = "static";
    setIsMenuOpen(false);
  };
  /* eslint-disable */

  const size = useWindowSize();

  var form = !!size.width && document?.querySelector(".pageclip-form");

  !!size.width &&
    Pageclip?.form(form, {
      onSubmit: function (event) {},
      onResponse: function (error, response) {
        error?.message && toast.error(error?.message);
        response?.data &&
          toast.success("Subscribe successful. Thank you!", {
            style: {
              borderRadius: 0,
              padding: "16px",
              color: "#000",
              background: "#7AE7FF",
            },
          });
        setSubEmail("");
      },
    });

  /* eslint-disable */

  return (
    <React.Fragment>
      <>
        {isMenuOpen ? (
          <div className="mobile-menu" style={{ overflow: "auto" }}>
            <div className="navbar">
              <div onClick={closeMenu} className="closeButton">
                <img
                  alt="icon-close"
                  src="/assets/icon-close.svg"
                  style={{ height: "35px" }}
                />
              </div>
              <img alt="logo.png" src="/assets/logo.png" />
              <span className="icons" />
            </div>

            <div className="menu">
              <a
                onClick={() => {
                  closeMenu();
                  setTimeout(() => scrollToAirdrop(), 0);
                }}
              >
                AIRDROP/BOUNTY
              </a>
              <a
                onClick={() => {
                  closeMenu();
                  setTimeout(() => scrollToRoadmap(), 0);
                }}
              >
                ROAD MAP
              </a>
              <a
                onClick={() => {
                  closeMenu();
                  setTimeout(() => scrollToTokenomics(), 0);
                }}
              >
                tokenomics
              </a>
              <a
                onClick={() => {
                  closeMenu();
                  setTimeout(() => scrollToPartners(), 0);
                }}
              >
                PARTNERS
              </a>
              <a
                onClick={() => {
                  closeMenu();
                  setTimeout(() => scrollToTeam(), 0);
                }}
              >
                TEAM & ADVISORS
              </a>
              <a
                onClick={() => {
                  closeMenu();
                  setTimeout(() => scrollToSubscribe(), 0);
                }}
              >
                SUBSCRIBE
              </a>
            </div>

            <FooterMenuMobile />
          </div>
        ) : (
          ""
        )}
      </>

      <div className="hero-bg" />

      <div className="navbar">
        <div onClick={openMenu} className="burger">
          <img
            alt="icon-burger"
            src="/assets/icon-burger.svg"
            style={{ height: "35px" }}
          />
        </div>

        <img alt="logo.png" src="/assets/logo.png" />

        <div className="primary-menu">
          <a className="hover-underline-animation" onClick={scrollToAirdrop}>
            AIRDROP/BOUNTY
          </a>
          <a className="hover-underline-animation" onClick={scrollToRoadmap}>
            ROAD MAP
          </a>
          <a className="hover-underline-animation" onClick={scrollToTokenomics}>
            TOKENOMICS
          </a>
          <a className="hover-underline-animation" onClick={scrollToPartners}>
            PARTNERS
          </a>
          <a className="hover-underline-animation" onClick={scrollToTeam}>
            TEAM & ADVISORS
          </a>
          <a className="hover-underline-animation" onClick={scrollToSubscribe}>
            SUBSCRIBE
          </a>
        </div>

        <ul className="icons">
          <li className="icons-div icons-animation">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://t.me/artzero_io"
            >
              <img alt="header-telegram" src="/assets/header-telegram.svg" />
            </a>
          </li>
          <li className="icons-div icons-animation">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://twitter.com/ArtZero_io"
            >
              <img alt="header-twitter" src="/assets/header-twitter.svg" />
            </a>
          </li>
          <li className="icons-div icons-animation">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://medium.com/@artzero_io"
            >
              <img alt="header-medium" src="/assets/header-medium.svg" />
            </a>
          </li>
          <li className="icons-div icons-animation">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://discord.gg/wzkZ2JTvN4"
            >
              <img alt="header-discord" src="/assets/header-discord.svg" />
            </a>
          </li>
          <li className="icons-div icons-animation">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="mailto:admin@artzero.io"
            >
              <img alt="header-email" src="/assets/header-email.svg" />
            </a>
          </li>
        </ul>
      </div>

      <section className="hero container">
        <div className="robot">
          {[...Array(25)].map((e, i) => (
            <div className="block" key={i} />
          ))}

          <div className="corner right-bottom" />
          <div className="corner right-top" />
          <div className="corner left-bottom" />
          <div className="corner left-top" />
        </div>
        <div
          className="text"
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-duration="1000"
        >
          <div className="heading">Discover, Create, Collect & Trade NFTs</div>
          <div className="desc">
            Get quick & easy access to digital collectibles, explore & trade
            NFTs from different collections & artists.
          </div>
          <div className="testnet-button-wrapper-4">
            <div className="testnet-button-wrapper">
              <a
                href="https://a0.artzero.io/"
                className="button button-animation"
              >
                <span className="button-text">Aleph Zero Mainnet</span>
              </a>
            </div>

            <div className="testnet-button-wrapper">
              <a
                href="https://alephzero.artzero.io"
                className="button button-animation"
              >
                <span className="button-text">Aleph Zero Testnet</span>
              </a>
            </div>

            <div className="testnet-button-wrapper">
              <a
                href="https://astar.artzero.io/"
                className="button button-animation"
              >
                <span className="button-text">Astar Mainnet</span>
              </a>
            </div>

            <div className="testnet-button-wrapper">
              <a
                href="https://shibuya.artzero.io/"
                className="button button-animation"
              >
                <span className="button-text">Shibuya Testnet Demo</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section ref={airdropRef} id="airdrop" className="airdrop">
        <img alt="stars.png" src="/assets/stars.png" className="stars-left" />
        <img
          alt="ufo-ellipse"
          src="/assets/ufo-ellipse.svg"
          className="ufo-ellipse"
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-duration="1000"
        />
        <img
          alt="ufo.png"
          src="/assets/ufo.png"
          className="ufo"
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-duration="1000"
        />
        <img alt="stars.png" src="/assets/stars.png" className="stars-right" />
        <div className="ground" />

        <h2 data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
          Airdrop / Bounty programs
        </h2>
        <div
          className="desc"
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-duration="1000"
        >
          we recently announced 101 winners for airdrop & 5 winners for bounty
          program
        </div>
        <div
          className="winners"
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-duration="1000"
        >
          <VisibilitySensor>
            {({ isVisible }) => (
              <div style={{ height: 120 }}>
                {isVisible ? (
                  <CountUp
                    end={101}
                    suffix=" WINNERS"
                    duration="1.5"
                    redraw={true}
                  />
                ) : null}
              </div>
            )}
          </VisibilitySensor>
        </div>
        <div
          className="desc follow"
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-duration="1000"
        >
          follow our{" "}
          <a
            target="_blank"
            rel="noreferrer"
            href="https://twitter.com/ArtZero_io"
          >
            twitter
          </a>{" "}
          & join our{" "}
          <a target="_blank" rel="noreferrer" href="https://t.me/artzero_io">
            telegram
          </a>{" "}
          for latest updates{" "}
        </div>
      </section>

      <section className="nft">
        <div className="bg" />
        <div
          className="wrapper container"
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-duration="1000"
        >
          <div className="text">
            <div className="inner">
              <h2>create & sell your NFTs</h2>
              <div className="desc">
                discover, collect, and sell extraordinary NFTs
              </div>
            </div>
          </div>
          <div className="cards">
            <div className="card card-animation connect-wallet">
              <div className="icon">
                <img alt="icon-connect" src="/assets/icon-connect-wallet.svg" />
              </div>
              <div className="text">
                <h3>connect your wallet</h3>
                <div className="card__desc">
                  artzero supports subwallet and polkadot js wallet.
                </div>
              </div>
            </div>
            <div className="card card-animation create-nft">
              <div className="icon">
                <img alt="icon-create" src="/assets/icon-create-nft.svg" />
              </div>
              <div className="text">
                <h3>create your NFTs</h3>
                <div className="card__desc">
                  upload your work (image, video, audio, or 3D art), & a title &
                  description, & customize your NFTs with properties, stats, &
                  unlockable content.
                </div>
              </div>
            </div>
            <div className="card card-animation create-collection">
              <div className="icon">
                <img
                  alt="icon-create"
                  src="/assets/icon-create-collection.svg"
                />
              </div>
              <div className="text">
                <h3>create your collection</h3>
                <div className="card__desc">
                  add social links, a description, profile and banner images,
                  and set a secondary sales fee.
                </div>
              </div>
            </div>
            <div className="card card-animation list-nft">
              <div className="icon">
                <img alt="icon-list" src="/assets/icon-list-nft.svg" />
              </div>
              <div className="text">
                <h3>List NFTs for sale</h3>
                <div className="card__desc">
                  choose the NFT you want to sell and we help you sell them.
                  buyers can bid for the NFT or simply buy at fixed-price
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section ref={roadmapRef} id="roadmap" className="roadmap">
        <img alt="roadmap-left" src="/assets/roadmap-left.png" />
        <div className="main">
          <img
            className="grid"
            alt="roadmap-grid"
            src="/assets/roadmap-grid2.svg"
          />
          <div className="grid-lines">
            <div className="grid-line one"></div>
            <div className="grid-line two"></div>
            <div className="grid-line three"></div>
            <div className="grid-line four"></div>
            <div className="grid-line five"></div>
            <div className="grid-line six"></div>
            <div className="grid-line seven"></div>
          </div>
          <h2 data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
            Roadmap
          </h2>
          <div
            className="desc"
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="1000"
          >
            note: artzero launch will depend on smart contract launch on aleph
            zero's mainnet
          </div>
          <div className="cards">
            <div
              className="q1"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="1000"
            >
              <div className="inner">
                <h3>Q1, Q2 – 2022</h3>

                <RoadmapItem text="Project launched with core team" />
                <RoadmapItem text="Created 10K NFT Collection featuring Praying Mantis Predators" />
                <RoadmapItem text="Launched Early Contribution Program" />
                <RoadmapItem text="Launched First Airdrop Program" />
                <RoadmapItem text="Launched Smartnet Demo for public test" />
                <RoadmapItem text="Bug Bounty Program" />
                <RoadmapItem text="Closed Early Contribution Program with upgraded incentives for contributors" />
              </div>
            </div>

            <div
              className="q2"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="1000"
            >
              <div className="inner">
                <h3>Q3, Q4 - 2022</h3>

                <RoadmapItem text="Testnet Demo for Public Test" />
                <RoadmapItem text="Re-stage: Deploy Launchpad in Q3 2022 instead of 2023" />
                <RoadmapItem text="Set up Validator Node" />
                <RoadmapItem text="Start Code Audit & Review" />
                <RoadmapItem text="NFT Staking MVP" />
                <RoadmapItem text="Focus on Business Development while perfecting the platform" />
              </div>
            </div>

            <div
              className="q3"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="1000"
            >
              <div className="inner">
                <h3>Q1, Q2 - 2023</h3>

                <RoadmapItem text="Complete Code Audit & Review" />
                <RoadmapItem text="Mainnet Launch" />
                <RoadmapItem text="Launch NFT staking" />
                <RoadmapItem text="Launch NFT marketplace on Astar Network" />
                <RoadmapItem text="Create fund to support NFT projects" />
              </div>
            </div>
          </div>
        </div>
        <img alt="roadmap-right" src="/assets/roadmap-right.png" />
      </section>

      <section ref={tokenomicsRef} id="tokenomics" className="tokenomics">
        <div className="bg" />
        <h2 data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
          tokenomics
        </h2>

        <div
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-duration="1000"
          className="desc"
        >
          PASSIVE GROWTH FOR NFT HODLERS
        </div>

        <div className="wrapper container">
          <div
            className="chart"
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="1000"
          >
            <div className="chart-title">
              <h3>AZERO Distribution</h3>
              <h3>from TGE</h3>
            </div>
            <div className="chart-wrapper">
              <div className="percent-30">
                <div className="title">30%</div>
                <div className="text">platform development and expansion</div>
              </div>

              <img
                className="frame"
                alt="frame-connect"
                src="/assets/tokenomics-circle-chart.png"
              />
              <div className="percent-70">
                <div className="title">70%</div>
                <div className="text">
                  run validator node to support the network
                </div>
              </div>
            </div>
          </div>

          <div
            className="cards"
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="1000"
          >
            <div className="nft-supply">
              <img
                className="frame"
                alt="frame-connect"
                src="/assets/frame-nft-supply.svg"
              />
              <div className="title">
                <h3>10k total nft supply</h3>
              </div>

              <div className="text">
                <div className="icon">
                  <img alt="icon-connect" src="/assets/tokenomics-bullet.svg" />
                </div>
                <span className="desc">
                  Private/Seed Sale: A maximum amount of 2500 NFTs
                </span>
              </div>

              <div className="text">
                <div className="icon">
                  <img alt="icon-connect" src="/assets/tokenomics-bullet.svg" />
                </div>
                <span className="desc">
                  Public Sale: A maximum amount of 5000 NFTs
                </span>
              </div>

              <div className="text">
                <div className="icon">
                  <img alt="icon-connect" src="/assets/tokenomics-bullet.svg" />
                </div>
                <span className="desc">
                  Airdrop/Bounty/Partners: A maximum amount of 500 NFTs
                </span>
              </div>

              <div className="text">
                <div className="icon">
                  <img alt="icon-connect" src="/assets/tokenomics-bullet.svg" />
                </div>
                <span className="desc">
                  Foundation Team and Founders: A fixed amount of 2000 NFTs
                </span>
              </div>
            </div>
            <div className="desc-bottom">
              profits from running validator node will be distributed back to
              nft stakers
            </div>
          </div>
        </div>

        {/* Staking */}
        <div
          id="staking"
          className="staking"
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-duration="1000"
        >
          <div className="main">
            <div className="card">
              <img
                className="frame"
                alt="frame-connect"
                src="/assets/frame-staking.svg"
              />
              <div className="title">
                <h3>nft stakers benefits</h3>
              </div>

              <div className="text">
                <div className="icon">
                  <img alt="icon-connect" src="/assets/tokenomics-bullet.svg" />
                </div>
                <span className="desc">
                  30% share of the platform’s profit{" "}
                  <span style={{ color: "white" }}>(1)</span>
                </span>
              </div>
              <div className="text">
                <div className="icon">
                  <img alt="icon-connect" src="/assets/tokenomics-bullet.svg" />
                </div>
                <span className="desc">
                  50% share of profit from running validator node{" "}
                  <span style={{ color: "white" }}>(2)</span>
                </span>
              </div>
              <div className="spacer"> </div>
              <div className="desc-bottom-title">staker share:</div>
              <div className="desc-bottom-text">
                <span style={{ color: "#7AE7FF" }}>[</span>0.3{" "}
                <span style={{ color: "#7AE7FF" }}>x (</span> profit 1
                <span style={{ color: "#7AE7FF" }}>) + (</span>0.5{" "}
                <span style={{ color: "#7AE7FF" }}>x (</span>profit 2
                <span style={{ color: "#7AE7FF" }}>)] x</span> number of staked
                nfts <span style={{ color: "#7AE7FF" }}>/</span> TOTAL STAKED
                NFTS
              </div>
            </div>

            <div className="info-cols">
              <div className="info-1">
                <div className="title">
                  <h3>stakers</h3>
                </div>

                <div className="text">
                  <span className="desc">1 NFT</span>
                  <div className="icon">
                    <img
                      alt="icon-connect"
                      src="/assets/staking-nft-level-1.svg"
                    />
                  </div>
                </div>
                <div className="text">
                  <span className="desc">5 NFTs</span>
                  <div className="icon">
                    <img
                      alt="icon-connect"
                      src="/assets/staking-nft-level-2.svg"
                    />
                  </div>
                </div>
                <div className="text">
                  <span className="desc">7 NFTs</span>
                  <div className="icon">
                    <img
                      alt="icon-connect"
                      src="/assets/staking-nft-level-3.svg"
                    />
                  </div>
                </div>
                <div className="text">
                  <span className="desc">9 NFTs</span>
                  <div className="icon">
                    <img
                      alt="icon-connect"
                      src="/assets/staking-nft-level-4.svg"
                    />
                  </div>
                </div>
                <div className="text">
                  <span className="desc">20 NFTs</span>
                  <div className="icon">
                    <img
                      alt="icon-connect"
                      src="/assets/staking-nft-level-5.svg"
                    />
                  </div>
                </div>
              </div>

              <div className="info-2">
                <div className="title">
                  <h3>trade discount</h3>
                </div>

                <div className="level">
                  <span className="percent">30%</span>
                  <div className="desc">
                    <div className="desc1">off</div>
                    <span className="desc2">trade fee</span>
                  </div>
                </div>
                <div className="level">
                  <span className="percent">50%</span>
                  <div className="desc">
                    <div className="desc1">off</div>
                    <span className="desc2">trade fee</span>
                  </div>
                </div>
                <div className="level">
                  <span className="percent">66%</span>
                  <div className="desc">
                    <div className="desc1">off</div>
                    <span className="desc2">trade fee</span>
                  </div>
                </div>
                <div className="level">
                  <span className="percent">80%</span>
                  <div className="desc">
                    <div className="desc1">off</div>
                    <span className="desc2">trade fee</span>
                  </div>
                </div>
                <div className="level">
                  <span className="percent">90%</span>
                  <div className="desc">
                    <div className="desc1">off</div>
                    <span className="desc2">trade fee</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section ref={partnersRef} id="partners" className="partners">
        <div className="bg" />
        <div
          className="heading"
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-duration="1000"
        >
          <h2>Partners</h2>
          <div className="desc">Friends along for a ride</div>
        </div>
        <div
          className="partner subwallet"
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-duration="1000"
        >
          <div className="inner">
            <img
              alt="partners-logo"
              src="/assets/partners-logo-subwallet.png"
            />
          </div>
        </div>
        <div
          className="partner ventures32"
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-duration="1000"
        >
          <div className="inner">
            <img
              alt="partners-logo"
              src="/assets/partners-logo-32ventures.png"
            />
          </div>
        </div>
      </section>

      <section ref={teamRef} id="team" className="team">
        <h2 data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
          Core Team
        </h2>
        <div
          className="desc"
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-duration="1000"
        >
          We believe in NFT
        </div>
        <TeamCarousel style={{ maxWidth: "1186px" }} size={size} />
      </section>

      <section className="advisors">
        <div className="wrapper">
          <div className="border top" />

          <div
            className="main"
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="1000"
          >
            <div className="heading">
              <h2>Our Advisors</h2>
              <div className="desc">
                Professional Advices from our close business friends
              </div>
            </div>
            <div className="persons">
              <div className="person hieu">
                <img
                  className="bg desktop"
                  alt="advisor-frame"
                  src="/assets/advisor-frame-light.svg"
                />
                <img
                  className="bg mobile"
                  alt="advisor-mobile"
                  src="/assets/advisor-mobile-frame.svg"
                />
                <div className="content">
                  <img alt="advisor-hieu" src="/assets/advisor-hieu.png" />
                  <div className="name">Hieu Dao</div>
                  <div className="desc">
                    Co-Founder of{" "}
                    <a
                      href="https://subwallet.app/"
                      rel="noreferrer"
                      target="_blank"
                    >
                      SubWallet
                    </a>
                  </div>
                </div>
              </div>
              <div className="person thong">
                <img
                  className="bg mobile"
                  alt="advisor-mobile"
                  src="/assets/advisor-mobile-frame.svg"
                />
                <div className="content">
                  <img alt="advisor-thong" src="/assets/advisor-thong.png" />
                  <div className="name">Thong Tran</div>
                  <div className="desc">
                    Founder of{" "}
                    <a
                      href="https://merchize.com/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Merchize
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="border bottom" />
        </div>
      </section>

      <section ref={subscribeRef} className="subscribe">
        <div className="bg" />
        <h2 data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
          Subscribe to us
        </h2>
        <div
          className="desc"
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-duration="1000"
        >
          Let’s make a great impact together
        </div>
        <div
          className="inputs"
          style={{ height: "60px" }}
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-duration="1000"
        >
          <form
            className="pageclip-form"
            method="post"
            action="https://send.pageclip.co/zqaVEbuvCPviRe5ho1vL42Drc3GyedOG/subscribe"
          >
            <input
              style={{ height: "60px" }}
              value={subEmail}
              onChange={({ target }) => setSubEmail(target.value)}
              type="text"
              name="email"
              placeholder="enter your email"
              required
              pattern=".+@.+."
            />

            <button
              className="button pageclip-form__submit"
              type="submit"
              style={{ border: 0 }}
            >
              <span>SUBSCRIBE</span>
            </button>
          </form>
        </div>

        <Footer />
      </section>
    </React.Fragment>
  );
};

export default HomePage;
