import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

function Cards(props) {
  const onDispatch = (e, id) => {
    e.preventDefault();
    localStorage.setItem("currid", id);
  };
  
  var members = (
    <div>
      {props.val.map((member, index) => (
        <div className="column">
          <div className="card" style={{ width: "18rem" }}>
            <Link onClick={(e) => onDispatch(e, index)} className="link_remove"> 
              <Link to={"/main/" + member.id} className="link_remove">
                <div className="banner">
                  <img src={member.images[0].url} />
                </div>
                <div className="menu"></div>
                <h2 className="name">{member.restaurant_name}</h2>
                <div className="title">Closes At :- {member.closes_at}</div>
                <div className="branch"></div>
              </Link>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <>
      <div className="row faculty__content">{members}</div>
    </>
  );
}

export default connect(null,null)(Cards);
