import React from "react";
import "./team.css";
import {Btn} from "../Top-division-components/Top-division-components.jsx";
import {FOOTER} from "../../Module/General";

function JoinTeam() {
  return (
    <div className="joinT">
      {/* <h3>Interested in joining our team </h3>
      <a href={FOOTER.JOIN_TEAM.src}>
        <Btn type="Join our team" overlay="Fill the form" />
      </a> */}
    </div>
  );
}

function Member(props) {
  return (
    <div className="member">

      {console.log(props)}

      <img src={props.img} alt="hackmafest"></img>

      <div className="members-link">
        <h3>{props.name}</h3>
        <p>{props.role}</p>
        <a rel="noreferrer" target="_blank" href={props.github}>
          <i href="www.google.com" class="fab fa-2x fa-github"></i>
        </a>
        <a>
        <a rel="noreferrer" target="_blank" href={props.linkedin}>
          <i class="fab fa-2x fa-linkedin"></i>
        </a>
        </a>
      </div>
    </div>
  );
}

export {Member, JoinTeam};
