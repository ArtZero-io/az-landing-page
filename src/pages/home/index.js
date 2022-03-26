import React, {useRef, useState} from 'react'

import RoadmapItem from "../../components/RoadmapItem/RoadmapItem"
import Footer from "../../components/Footer"

const HomePage = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const airdropRef = useRef(null)
    const roadmapRef = useRef(null)
    const partnersRef = useRef(null)
    const teamRef = useRef(null)
    const subscribeRef = useRef(null)

    const scrollToAirdrop = () => airdropRef.current.scrollIntoView({behavior: "smooth"})
    const scrollToRoadmap = () => roadmapRef.current.scrollIntoView({behavior: "smooth"})
    const scrollToPartners = () => partnersRef.current.scrollIntoView({behavior: "smooth"})
    const scrollToTeam = () => teamRef.current.scrollIntoView({behavior: "smooth"})
    const scrollToSubscribe = () => subscribeRef.current.scrollIntoView({behavior: "smooth"})

    const openMenu = () => {
        document.body.style.position = 'fixed'
        setIsMenuOpen(true)
    }
    const closeMenu = () => {
        document.body.style.position = 'static'
        setIsMenuOpen(false)
    }

    return (
        <>
            {isMenuOpen ?
                <div className="menu">
                    <div className="navbar">
                        <div onClick={closeMenu} className="closeButton">
                            <img src="/assets/icon-close.svg" />
                        </div>
                        <img src='/assets/logo.png' />
                        <span className="icons" />
                    </div>

                    <a onClick={() => { closeMenu(); setTimeout(() => scrollToAirdrop(), 0) }}>AIRDROP/BOUNTY</a>
                    <a onClick={() => { closeMenu(); setTimeout(() => scrollToRoadmap(), 0) }}>ROAD MAP</a>
                    <a onClick={() => { closeMenu(); setTimeout( () => scrollToPartners(), 0) }}>PARTNERS</a>
                    <a onClick={() => { closeMenu(); setTimeout( () => scrollToTeam(), 0) }}>TEAM & ADVISORS</a>
                    <a onClick={() => { closeMenu(); setTimeout( () => scrollToSubscribe(), 0) }}>SUBSCRIBE</a>

                    <Footer/>
                </div>
            : '' }

            <img className="herobg" src="/assets/bg-hero.png" />

            <div className="navbar">
                <div onClick={openMenu} className="burger">
                    <img src='/assets/icon-burger.svg' />
                </div>

                <img src='/assets/logo.png' />

                <a onClick={scrollToAirdrop}>AIRDROP/BOUNTY</a>
                <a onClick={scrollToRoadmap}>ROAD MAP</a>
                <a onClick={scrollToPartners}>PARTNERS</a>
                <a onClick={scrollToTeam}>TEAM & ADVISORS</a>
                <a onClick={scrollToSubscribe}>SUBSCRIBE</a>

                <span className="icons">
                    <a target="_blank" rel="noopener noreferrer" href="https://t.me/artzero_io">
                        <img src="/assets/header-telegram.svg" />
                    </a>
                    <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/ArtZero_io">
                        <img src="/assets/header-twitter.svg" />
                    </a>
                    <a target="_blank" rel="noopener noreferrer" href="mailto:admin@artzero.io">
                        <img src="/assets/header-email.svg" />
                    </a>
                </span>
            </div>

            <section className="hero">
                <div className="robot">
                    { [...Array(25)].map( (e, i) => <div className='block' key={i}/> ) }

                    <div className="corner right-bottom" />
                    <div className="corner right-top" />
                    <div className="corner left-bottom" />
                    <div className="corner left-top" />
                </div>
                <div className="text">
                    <div className="heading">Discover, Create, Collect & Trade NFTs</div>
                    <div className="desc">Get quick & easy access to digital collectibles, explore & trade NFTs from different collections & artists.</div>
                    <div className="button">Coming soon on Smartnet</div>
                </div>
            </section>

            <section ref={airdropRef} id="airdrop" className="airdrop">
                <img src="/assets/stars.png" className="stars-left" />
                <img src="/assets/ufo-ellipse.svg" className="ufo-ellipse" />
                <img src="/assets/ufo.png" className="ufo" />
                <img src="/assets/stars.png" className="stars-right" />
                <img src="/assets/ground.png" className="ground" />

                <h2>Airdrop / Bounty programs</h2>
                <div className="desc">We recently announced 80 winners for our first airdrop campaign.</div>
                <div className="winners">80 WINNERS</div>
                <div className="desc follow">Follow our <a target="_blank" href="https://twitter.com/ArtZero_io">Twitter</a> & join our <a target="_blank" href="https://t.me/artzero_io">Telegram</a> For Upcoming bounty programs</div>
            </section>

            <section className="nft">
                <img className="bg" src="/assets/bg-nft.png" />
                <div className="wrapper">
                    <div className="text">
                        <h2>Create & sell your NFTs</h2>
                    </div>
                    <div className="cards">
                        <div className="card connect-wallet">
                            <img className="frame desktop" src="/assets/frame-connect-wallet.svg" />
                            <img className="frame mobile" src="/assets/frame-mobile-connect-wallet.svg" />
                            <div className="icon">
                                <img src="/assets/icon-connect-wallet.svg" />
                            </div>
                            <div className="text">
                                <h3>Connect your wallet</h3>
                                <div className="desc">ArtZero supports SubWallet and Polkadot JS wallet.</div>
                            </div>
                        </div>
                        <div className="card create-nft">
                            <img className="frame desktop" src="/assets/frame-create-nft.svg" />
                            <img className="frame mobile" src="/assets/frame-mobile-create-nft.svg" />
                            <div className="icon">
                                <img src="/assets/icon-create-nft.svg" />
                            </div>
                            <div className="text">
                                <h3>Create your NFTs</h3>
                                <div className="desc">Upload your work (image, video, audio, or 3D art), & a title & description, & customize your NFTs with properties, stats, & unlockable content.</div>
                            </div>
                        </div>
                        <div className="card create-collection">
                            <img className="frame desktop" src="/assets/frame-create-collection.svg" />
                            <img className="frame mobile" src="/assets/frame-mobile-create-collection.svg" />
                            <div className="icon">
                                <img src="/assets/icon-create-collection.svg" />
                            </div>
                            <div className="text">
                                <h3>Create your collection</h3>
                                <div className="desc">Add social links, a description, profile and banner images, and set a secondary sales fee.</div>
                            </div>
                        </div>
                        <div className="card list-nft">
                            <img className="frame desktop" src="/assets/frame-list-nft.svg" />
                            <img className="frame mobile" src="/assets/frame-mobile-list-nft.svg" />
                            <div className="icon">
                                <img src="/assets/icon-list-nft.svg" />
                            </div>
                            <div className="text">
                                <h3>List NFTs for sale</h3>
                                <div className="desc">Choose the NFT you want to sell and we help you sell them. Buyers can bid for the NFT or simply buy at fixed-price</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section ref={roadmapRef} id="roadmap" className="roadmap">
                <img src="/assets/roadmap-left.png" />
                <div className="main">
                    <img className="grid" src="/assets/roadmap-grid.svg" />
                    <h2>Roadmap</h2>
                    <div className="desc">Note: ArtZero launch will depend on Smart Contract launch on Aleph Zero's Mainnet</div>
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
                <img src="/assets/roadmap-right.png" />
            </section>

            <section ref={partnersRef} id="partners" className="partners">
                <img className="bg" src="/assets/bg-partners.png" />
                <div className="heading">
                    <h2>Partners</h2>
                    <div className="desc">Friends along for a ride</div>
                </div>
                <div className="subwallet">
                    <img src="/assets/partners-logo-subwallet.png" />
                </div>
            </section>

            <section ref={teamRef} id="team" className="team">
                <h2>Core Team</h2>
                <div className="desc">We believe in Aleph Zero</div>
                <div className="carousel">
                    <div className="member">
                        <div className="circle" />
                        <img className="brian" src="/assets/team-brian-nguyen.png" />
                        <div className="name">Brian Nguyen</div>
                        <div className="position">Founder</div>
                    </div>
                    <div className="member">
                        <img src="/assets/team-ha-vu.png" />
                        <div className="name">Ha Vu</div>
                        <div className="position">Business Development</div>
                    </div>
                    <div className="member">
                        <img src="/assets/team-frankie-kao.png" />
                        <div className="name">Frankie kao</div>
                        <div className="position">Art Director</div>
                    </div>
                    <div className="member">
                        <img src="/assets/team-albert-tran.png" />
                        <div className="name">Albert Tran</div>
                        <div className="position">Smart Contract & Back-end Developer</div>
                    </div>
                    <div className="member">
                        <img src="/assets/team-j.png" />
                        <div className="name">J.</div>
                        <div className="position">Full-Stack Developer</div>
                    </div>
                </div>
            </section>

            <section className="advisors">
                <img src="/assets/advisor-border-top.svg" />
                <div className="main">
                    <div className="heading">
                        <h2>Our Advisors</h2>
                        <div className="desc">Professional Advices from our close business friends</div>
                    </div>
                    <div className="hieu">
                        <img className="bg" src="/assets/advisor-frame-light.svg" />
                        <div className="content">
                            <img src="/assets/advisor-hieu.png" />
                            <div className="name">Hieu Dao</div>
                            <div className="desc">Co-Founder of <a href="https://subwallet.app/" target="_blank">SubWallet</a></div>
                        </div>
                    </div>
                    <div className="thong">
                        <img className="bg" src="/assets/advisor-frame.svg" />
                        <div className="content">
                            <img src="/assets/advisor-thong.png" />
                            <div className="name">Thong Tran</div>
                            <div className="desc">Founder of <a href="https://merchize.com/" target="_blank">Merchize</a></div>
                        </div>
                    </div>
                </div>
                <img src="/assets/advisor-border-bottom.svg" />
            </section>

            <section ref={subscribeRef} className="subscribe">
                <img className="bg" src="/assets/bg-subscribe.png" />
                <h2>Subscribe to us</h2>
                <div className="desc">Let’s make a great impact together</div>
                <div className="inputs">
                    <input className="email" type="text" placeholder="enter your email" />
                    <div className="button">Subscribe</div>
                </div>

                <Footer/>

            </section>


        </>
    )
}

export default HomePage

