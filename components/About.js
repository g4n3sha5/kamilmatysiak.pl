// import React from "react";
import Image from 'next/image';
// import card from '../public/assets/img/personal_info.png'

// import techcity from "/techcity.webp";
import Developer from "../public/Developer.svg";
// import mySVG from "/undraw_svg.svg";
// import Linkedin from "/linkedin.svg";

function About() {
    return (
        <section id="about">
            <div className="container  pt-4 overflow-hidden pb-4  px-3 px-lg-4 pb-3">
                {/*<img src={card} alt="Personal info illustration"/>*/}
                <h1 className="header1 ">O mnie</h1>
                {/*<div className="row">*/}

                <div className=" row ">
                    <div className="col order-lg-2 d-flex justify-content-center mt-3 mt-lg-0  mb-5 mb-lg-0">
                        <div className="aboutProfile">
                            <img src="/profile.jpg" alt="Profile picture"/>
                        </div>
                    </div>

                    <article className="col-lg-8 col-12">
                        <p className="paragraph1">
                            Jestem osobą nastawioną na rozwiązywanie problemów, z dużym
                            opanowaniem i&nbsp;umysłem analitycznym. Te cechy sprawiają, że
                            świetnie odnajduję się w branży IT.
                            <br/>
                            Pierwszą styczność z tworzeniem stron miałem w roku 2019, nauczyłem się wielu rzeczy, jednak traktowałem to jako hobby.
                            Bazując na tych podstawach, w&nbsp;2022r. podjąłem decyzję, aby powrócić do webdevu na
                            poważnie i&nbsp;tworząc nowe projekty konsekwentnie rozwijam swoją
                            wiedzę i&nbsp;umiejętności.
                        </p>
                    </article>
                </div>
                <div className="row mt-lg-3">
                    <div className="col-lg-3 aboutCard d-flex pt-lg-4 justify-content-center mx-2">
                        <Developer
                            width="290px"
                            height="245px"
                            alt="Developer illustration"
                        />


                    </div>
                    <article className="col-lg-8">
                        <p className="paragraph1">
                            Jestem entuzjastą nowych technologii,  od zawsze fascynowały mnie
                            komputery, elektronika i&nbsp;ich sposób działania. Zakres moich
                            zainteresowań jest szeroki, jednak moją największą pasją są sztuki
                            walki, które nauczyły mnie wielu rzeczy m.in konsekwencji
                            i&nbsp;wartości małych ulepszeń zarówno na treningu jak i w naszym życiu  (kaizen) wszystkie te dziedziny wnoszą wiele nauk,
                            które z sukcesem odnoszę do swojego życia. <br/>
                            Codziennie czytam, oprócz książek o himalaiźmie, buddyźmie i duchowości, filozofii czy historii,
                             interesuję się  fizyką i&nbsp;kosmosem, dzięki wszystkim tym zainteresowaniom i&nbsp;pasjom,
                            regularnie uświadamiam sobie, że

                        </p>
                        <h1 className="rajdhani font-700 my-1 text-center possible">
                            wszystko jest możliwe.
                        </h1>
                    </article>
                </div>
                <hr className="line1"/>
                {/*<div className="techCity w-100 d-flex justify-content-center">*/}
                {/*  <img src={techcity} alt="Tech illustration" />*/}
                {/*</div>*/}
            </div>
        </section>
    );
}

export default About;
