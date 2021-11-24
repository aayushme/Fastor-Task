import React from "react";
import "./util.css";
import { connect } from "react-redux";
import fastor from "../../images/Fastor Logo.png";
import Draggable from "react-draggable";
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  WhatsappShareButton,
  WhatsappIcon,
} from "react-share";

function User(props) {
  React.useEffect(() => {});

  return (
    <>
      <div className="aboutpage">
        <div className="about__us-head">
          <h1>
            {
              props.member[parseInt(localStorage.getItem("currid"))]
                .restaurant_name
            }
          </h1>
        </div>
        <br />
        <div className="overlay">
          <div
            style={{
              backgroundImage: `url(${
                props.member[parseInt(localStorage.getItem("currid"))].images[0]
                  .url
              })`,
              padding: "4rem",
              height: "20rem",
            }}
          >
            <Draggable
              handle=".handle"
              defaultPosition={{ x: 0, y: 10 }}
              position={null}
              grid={[25, 25]}
              scale={1}
              bounds={{ left: -360, right: 360, top: -55, bottom: 330 }}
            >
              <div>
                <div className="handle">
                  <div>
                    <img src={fastor} height="50" width="50"></img>
                  </div>
                </div>
              </div>
            </Draggable>
          </div>
        </div>
        <FacebookShareButton
          url={
            props.member[parseInt(localStorage.getItem("currid"))].images[0].url
          }
          quote={"Fastor Explore"}
          hashtag="#Fastor"
          className={""}
        >
          <FacebookIcon size={36} />
        </FacebookShareButton>
        <TwitterShareButton
          url={
            props.member[parseInt(localStorage.getItem("currid"))].images[0].url
          }
          quote={"Fastor Explore"}
          hashtag="#Fastor"
          className={""}
        >
          <TwitterIcon size={36} />
        </TwitterShareButton>
        <WhatsappShareButton
          url={
            props.member[parseInt(localStorage.getItem("currid"))].images[0].url
          }
          quote={"Fastor Explore"}
          hashtag="#Fastor"
          separator=":: "
          className={""}
        >
          <WhatsappIcon size={36} />
        </WhatsappShareButton>
      </div>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    member: state.member.memberData,
  };
};

export default connect(mapStateToProps, null)(User);
