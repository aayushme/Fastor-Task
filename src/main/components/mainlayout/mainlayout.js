import React from "react";
import "./util.css";
import Card from "./cards.js";
import { connect } from "react-redux";
import * as actions from "../../store/actions/index";
import { Link } from "react-router-dom";


const MainLayout = (props) => {
  const [search, setSearch] = React.useState("");
  const [newdata, setnewData] = React.useState(null);

  React.useEffect(() => {
    props.getMember(localStorage.getItem("token"));
  }, []);

  const dispatch = (e) => {
    e.preventDefault();
    const filteredData = props.member.filter((item) => {
      return Object.values(item)
        .join("")
        .toLowerCase()
        .includes(search.toLowerCase());
    });

    setnewData(filteredData);
    console.log(newdata);
    setSearch("");
  };

  const dispatchRerout = (e, status) => {
    e.preventDefault();
    localStorage.setItem("status", status);
  };

  return (
    <div className="aboutpage">
      <div className="about__us-head">
        <h1>Hotels</h1>
      </div>
      
      <div class="wrap">
        <div class="search">
          <input
            type="input"
            className="searchTerm"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button
            type="submit"
            class="searchButton"
            onClick={(e) => dispatch(e)}
          >
            Search
          </button>
        </div>
      </div>
      <br />
      <br />
      <div className="developer__content">
        <Card val={newdata === null ? props.member : newdata} />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    member: state.member.memberData,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getMember: (token) => {
      dispatch(actions.getMember(token));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MainLayout);
