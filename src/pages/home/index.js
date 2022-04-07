import React, { useRef, useState, useEffect } from "react";
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
          <div className="menu" style={{ overflow: "auto" }}>
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

        <a onClick={scrollToAirdrop}>AIRDROP/BOUNTY</a>
        <a onClick={scrollToRoadmap}>ROAD MAP</a>
        <a onClick={scrollToTokenomics}>tokenomics</a>
        <a onClick={scrollToPartners}>PARTNERS</a>
        <a onClick={scrollToTeam}>TEAM & ADVISORS</a>
        <a onClick={scrollToSubscribe}>SUBSCRIBE</a>

        <ul className="icons">
          <li className="icons-div">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://t.me/artzero_io"
            >
              <img alt="header-telegram" src="/assets/header-telegram.svg" />
            </a>
          </li>
          <li className="icons-div">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://twitter.com/ArtZero_io"
            >
              <img alt="header-twitter" src="/assets/header-twitter.svg" />
            </a>
          </li>
          <li className="icons-div">
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

      <section className="hero">
        <div className="robot">
          {[...Array(25)].map((e, i) => (
            <div className="block" key={i} />
          ))}

          <div className="corner right-bottom" />
          <div className="corner right-top" />
          <div className="corner left-bottom" />
          <div className="corner left-top" />
        </div>
        <div className="text">
          <div className="heading">Discover, Create, Collect & Trade NFTs</div>
          <div className="desc">
            Get quick & easy access to digital collectibles, explore & trade
            NFTs from different collections & artists.
          </div>
          <div className="button">Coming soon on Smartnet</div>
        </div>
      </section>

      <section ref={airdropRef} id="airdrop" className="airdrop">
        <img alt="stars.png" src="/assets/stars.png" className="stars-left" />
        <img
          alt="ufo-ellipse"
          src="/assets/ufo-ellipse.svg"
          className="ufo-ellipse"
        />
        <img alt="ufo.png" src="/assets/ufo.png" className="ufo" />
        <img alt="stars.png" src="/assets/stars.png" className="stars-right" />
        <div className="ground" />

        <h2>Airdrop / Bounty programs</h2>
        <div className="desc">
          We recently announced 80 winners for our first airdrop campaign.
        </div>
        <div className="winners">80 WINNERS</div>
        <div className="desc follow">
          Follow our{" "}
          <a
            target="_blank"
            rel="noreferrer"
            href="https://twitter.com/ArtZero_io"
          >
            Twitter
          </a>{" "}
          & join our{" "}
          <a target="_blank" rel="noreferrer" href="https://t.me/artzero_io">
            Telegram
          </a>{" "}
          For Upcoming bounty programs
        </div>
      </section>

      <section className="nft">
        <div className="bg" />
        <div className="wrapper">
          <div className="text">
            <h2>Create & sell your NFTs</h2>
          </div>
          <div className="cards">
            <div className="card connect-wallet">
              <img
                className="frame"
                alt="frame-connect"
                src="/assets/frame-connect-wallet.svg"
              />
              <div className="icon">
                <img alt="icon-connect" src="/assets/icon-connect-wallet.svg" />
              </div>
              <div className="text">
                <h3>Connect your wallet</h3>
                <div className="desc">
                  ArtZero supports SubWallet and Polkadot JS wallet.
                </div>
              </div>
            </div>
            <div className="card create-nft">
              <div className="icon">
                <img alt="icon-create" src="/assets/icon-create-nft.svg" />
              </div>
              <div className="text">
                <h3>Create your NFTs</h3>
                <div className="desc">
                  Upload your work (image, video, audio, or 3D art), & a title &
                  description, & customize your NFTs with properties, stats, &
                  unlockable content.
                </div>
              </div>
            </div>
            <div className="card create-collection">
              <div className="icon">
                <img
                  alt="icon-create"
                  src="/assets/icon-create-collection.svg"
                />
              </div>
              <div className="text">
                <h3>Create your collection</h3>
                <div className="desc">
                  Add social links, a description, profile and banner images,
                  and set a secondary sales fee.
                </div>
              </div>
            </div>
            <div className="card list-nft">
              <div className="icon">
                <img alt="icon-list" src="/assets/icon-list-nft.svg" />
              </div>
              <div className="text">
                <h3>List NFTs for sale</h3>
                <div className="desc">
                  Choose the NFT you want to sell and we help you sell them.
                  Buyers can bid for the NFT or simply buy at fixed-price
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
            src="/assets/roadmap-grid.svg"
          />
          <h2>Roadmap</h2>
          <div className="desc">
            Note: ArtZero launch will depend on Smart Contract launch on Aleph
            Zero's Mainnet
          </div>
          <div className="cards">
            <div className="q1">
              <h3>Q1 - 2022</h3>
              <RoadmapItem text="Public Smartnet version" />
              <RoadmapItem text="Announce NFT Winners" />
            </div>
            <div className="q2">
              <h3>Q2 - 2022</h3>
              <RoadmapItem text="Public Testnet version" />
              <RoadmapItem text="Code Audit and Review" />
              <RoadmapItem text="Incentive programs for contributors" />
            </div>
            <div className="q3">
              <h3>Q3 Q4 - 2022</h3>
              <RoadmapItem text="Mainnet launch" />
              <RoadmapItem text="Multi-chain support" />
            </div>
          </div>
        </div>
        <img alt="roadmap-right" src="/assets/roadmap-right.png" />
      </section>

      <section ref={tokenomicsRef} id="tokenomics" className="tokenomics">
        <div className="bg" />
        <h2>tokenomics</h2>

        <div className="desc">PASSIVE GROWTH FOR NFT HODLERS</div>

        <div className="wrapper">
          <div className="chart">
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

          <div className="cards">
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
        <div id="staking" className="staking">
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
                    <span className="desc2">transaction fee</span>
                  </div>
                </div>
                <div className="level">
                  <span className="percent">50%</span>
                  <div className="desc">
                    <div className="desc1">off</div>
                    <span className="desc2">transaction fee</span>
                  </div>
                </div>
                <div className="level">
                  <span className="percent">66%</span>
                  <div className="desc">
                    <div className="desc1">off</div>
                    <span className="desc2">transaction fee</span>
                  </div>
                </div>
                <div className="level">
                  <span className="percent">80%</span>
                  <div className="desc">
                    <div className="desc1">off</div>
                    <span className="desc2">transaction fee</span>
                  </div>
                </div>
                <div className="level">
                  <span className="percent">90%</span>
                  <div className="desc">
                    <div className="desc1">off</div>
                    <span className="desc2">transaction fee</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section ref={partnersRef} id="partners" className="partners">
        <div className="bg" />
        <div className="heading">
          <h2>Partners</h2>
          <div className="desc">Friends along for a ride</div>
        </div>
        <div className="subwallet">
          <img alt="partners-logo" src="/assets/partners-logo-subwallet.png" />
        </div>
        <div className="ventures32">
          <img alt="partners-logo" src="/assets/partners-logo-32ventures.png" />
        </div>
      </section>

      <section ref={teamRef} id="team" className="team">
        <h2>Core Team</h2>
        <div className="desc">We believe in Aleph Zero</div>
        <TeamCarousel style={{ maxWidth: "1186px" }} size={size} />
      </section>

      <section className="advisors">
        <div className="wrapper">
          <div className="border top" />

          <div className="main">
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
        <h2>Subscribe to us</h2>
        <div className="desc">Let’s make a great impact together</div>
        <div className="inputs" style={{ height: "60px" }}>
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
