import React, {useEffect, useState} from "react";
import {Myinfo} from "../Top-division-components/Top-division-components.jsx";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import "./about.css";
import {Logo, LogoSectionAbout} from "../logo-section/logoSection.jsx";
import {FirstPrize, PrizeHeading} from "../prize tracks/prizes.jsx";
import {Prizeinfo} from "../../Module/General";
import {Accordion} from "../FAQ/faq.jsx";
import {Sponsor, SponsorsHead, SponsorUS} from "../Sponsors/sponsors.jsx";

import DisplaySession from "../Session/session.jsx";
import Birds from "../Birds/birds.jsx";
import Footer from "../Footer/footer.jsx";
import {Member, JoinTeam} from "../team/team.jsx";
import pattern from "./pattern4.png";
import Media from "../media/media.jsx";

import {
  TOP_SECTION,
  TeamInfo,
  Session,
  SpeakersInfo,
  sponsorLogos,
  frequentlyAskedQuestions,
  FOOTER,
  panels
} from "../../Module/General";

// javascript Map for sponsors

function SponsorGroup(props) {
  return (
    <Row>
      {props.map(s => (
        <Col className="" sm={12} lg={4} md={6}>
          {" "}
          <Sponsor srcx={s.src} />{" "}
        </Col>
      ))}
    </Row>
  );
}

// javascript Map for sponsors end

// Prize group

function PrizeGroup(props) {
  return (
    <Row>
      {props.map(s => (
        <Col className="" sm={12} lg={4} md={6}>
          <FirstPrize icon={s.icon} type={s.type} content={s.content} />
        </Col>
      ))}
    </Row>
  );
}

// Prize group ending
function TeamMembers(props) {
  return (
    <Row className="members">
      {props.map(s => (
        <Col className="" sm={12} lg={4} md={4}>
          <Member
            name={s.Name}
            role={s.role}
            img={s.img}
            github={s.github}
            linkedin={s.linkedin}
          />
        </Col>
      ))}
    </Row>
  );
}

function FrequentlyAsked(props) {
  return (
    <Row className="sf">
      {props.map(s => (
        <Col className="" sm={12} lg={6} md={6}>
          <Accordion panels={s} />
        </Col>
      ))}
    </Row>
  );
}

function SessionWorkshops(props) {
  return (
    <Container fluid>
      {
        <Row className="members">
          {props.map(s => (
            <Col className="" sm={12} lg={4} md={4}>
              <DisplaySession params={s} />
            </Col>
          ))}
        </Row>
      }
    </Container>
  );
}

export default function HomePage(props) {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://apply.devfolio.co/v2/sdk.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="Whole_div" style={{backgroundImage: `url(${pattern})`}}>
      <div className="color_sectiom">
        <Container fluid>
          <Row className="Row info">
            <Col className="info-div" sm={12} lg={7} md={8}>
              <Myinfo />
            </Col>
            <Col className="d-image" sm={12} lg={5} md={4}>
              <img src={TOP_SECTION.IMG_SRC} />
            </Col>
          </Row>

          <Row className="mediaInfo">
            <Col className="" sm={12} lg={12} md={12}>
              <Media />
            </Col>
          </Row>
        </Container>
      </div>
      <Container fluid>
        {/* Logo section  */}
        <Row className=" logoSection">
          <Col className="info-div" sm={12} lg={8} md={8}>
            <LogoSectionAbout />
          </Col>
          <Col className="info-div" sm={12} lg={4} md={4}>
            <Logo />
          </Col>
        </Row>

        {/* ********Frequently asked Questions here ***** */}
        <div className="Myfaqs">
          {frequentlyAskedQuestions.map(FrequentlyAsked)}
          {/* ********Frequently asked Questions ending here ***** */}
        </div>

        {/* ********Prizes here ***** */}
        <Row className="prizesection">
          <PrizeHeading type="Prize section" />
          {Prizeinfo.map(PrizeGroup)}
        </Row>
        {/* ********Prizes ending here ***** */}

        <Row className="prizesection non-coding">
          <PrizeHeading type="Non-coding prizes" />
          <h2>coming soon</h2>
        </Row>

        {/* ********Sponsors here ***** */}

        <Row className="sponsorSection">
          <SponsorsHead />
          <SponsorUS />
          {sponsorLogos.map(SponsorGroup)}
        </Row>
        {/* ********Sponsors ending here ***** */}
        {/* ********Speakers here ***** */}
        <br></br>
        <Row className="speakersection">
          <h1>Our Speakers Here</h1>

          {/* {SpeakersInfo.map(TeamMembers)} */}
          {/* ********Speakers ending here ***** */}
          <h2>Coming Soon</h2>
          {/* //{SpeakersInfo.map(TeamMembers)} */}
        </Row>
        <br></br>
        {/* ********Team ending here ***** */}

        <Birds top="120vh" left="0vh" type="" />

        {/* ********Sessions here ***** */}
        <Row className="speakersection">
          <h1>Sessions & Workshops</h1>
          {/* ********Sessions here *****
        
        {/*<br ></br>
        {Session.map(SessionWorkshops)}
        {/* ********Sessions ending here ***** */}
          {/* <br ></br> */}
          <h2>Coming Soon</h2>
          {/* {Session.map(SessionWorkshops)} */}
        </Row>
        {/* ********Sessions ending here ***** */}
        {/* ********Team here ***** */}
        <h1>Our Team</h1>
        {FOOTER.JOIN_TEAM.required && <JoinTeam />}
        {TeamInfo.map(TeamMembers)}
        {/* ********Team ending here ***** */}
      </Container>
      <Footer />
    </div>
  );
}
