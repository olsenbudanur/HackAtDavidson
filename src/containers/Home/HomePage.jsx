import {UseMedia} from 'hooks/useMedia';
import {useState} from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import {
  Prizeinfo,
  TeamInfo,
  frequentlyAskedQuestions,
  sponsorLogos
} from '../../Module/General';
import {Logo, LogoSectionAbout} from '../../components/About/index.jsx';
import {Accordion} from '../../components/Accordian/index.jsx';
import Birds from '../../components/Animation';
import Footer from '../../components/Footer/index.jsx';
import {Myinfo} from '../../components/Landing/index.jsx';
import {FirstPrize, PrizeHeading} from '../../components/Prizes/index.jsx';
import Media from '../../components/Socials/index.jsx';
import {
  Sponsor,
  SponsorUS,
  SponsorsHead
} from '../../components/Sponsors/sponsors.jsx';
import {Member} from '../../components/Team';
import './about.css';
import logoDavidson from './assets/Hack@Davidson_logo_plain.png';

const SponsorGroup = (props, index) => {
  return (
    <Row key={index}>
      {props.map((s, i) => (
        <Col key={i} className="" sm={12} lg={4} md={6}>
          {' '}
          <Sponsor srcx={s.src} linkx={s.link} />{' '}
        </Col>
      ))}
    </Row>
  );
};

// Prize group
const PrizeGroup = (props, index) => {
  return (
    <Row key={index}>
      {props.map((s, i) => (
        <Col key={i} className="" sm={12} lg={4} md={4}>
          <FirstPrize icon={s.icon} type={s.type} content={s.content} />
        </Col>
      ))}
    </Row>
  );
};

// Prize group ending
// const TeamMembers = (props, index) => {
//   return (
//     <Row key={index} className="members">
//       {props.map((s, i) => (
//         <Col key={i} className="" sm={9} lg={3} md={3}>
//           <Member info={s} />
//         </Col>
//       ))}
//     </Row>
//   );
// };

const TeamMembers = (props, index) => {
  return (
    <div key={index} className="horizontal-scroll-container">
      {props.map((s, i) => (
        <div key={i}>
          <Member info={s} />
        </div>
      ))}
    </div>
  );
};

const FrequentlyAsked = (props, index) => {
  return (
    <Row key={index} className="sf">
      {props.map((s, i) => (
        <Col key={i} sm={12} lg={6} md={6}>
          <Accordion panels={s} />
        </Col>
      ))}
    </Row>
  );
};

export default function HomePage() {
  const [media, setMedia] = useState();
  UseMedia('min-width', 1000, setMedia);

  return (
    <div className="Whole_div">
      <div className="color_sectiom" id="home">
        <Container fluid>
          <Row className="Row info">
            <Col className="info-div" sm={12} lg={7} md={7}>
              <Myinfo />
            </Col>
            {/* <Col className="d-image" sm={12} lg={5} md={5}>
              <MyCalender />
            </Col> */}
            <Col className="d-image" sm={12} lg={5} md={5}>
              <img src={logoDavidson}></img>
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
        <div className="Myfaqs" id="faq">
          {frequentlyAskedQuestions.map(FrequentlyAsked)}
          {/* ********Frequently asked Questions ending here ***** */}
        </div>

        {/* ********Prizes here ***** */}
        <Row className="prizesection" id="prizes">
          <PrizeHeading type="Prizes" />
          <a
            href="https://hackdavidson.devpost.com/project-gallery"
            style={{textDecoration: 'underline', cursor: 'pointer'}}
          >
            <PrizeHeading type="Check out our 2023 Winners!" />
          </a>

          {Prizeinfo.map(PrizeGroup)}
        </Row>
        {/* ********Prizes ending here ***** */}

        {/* ********Sponsors here ***** */}

        <Row className="sponsorSection" id="sponsors">
          <SponsorsHead />
          <SponsorUS />
          {sponsorLogos.map(SponsorGroup)}
        </Row>
        {/* ********Sponsors ending here ***** */}

        {media && <Birds top="120vh" left="0vh" type="" />}

        {/* ********Team here ***** */}
        <h1 id="team">Team</h1>
        {TeamInfo.map(TeamMembers)}

        {/* ********Team ending here ***** */}
      </Container>
      <Footer />
    </div>
  );
}
