import React from "react";
import "./util.css";
import Card from "./cards.js";
import { connect } from "react-redux";

const MainLayout = (props) => {
  const [data, setData] = React.useState(null);
  const [status,setStatus] = React.useState("selected");
  React.useEffect(() => {
    var lstatus=localStorage.getItem("status");
    setStatus(lstatus);  
    var arr;
    if(lstatus==="Selected"){
        arr=JSON.parse(localStorage.getItem("selected"));
    } else{
        arr=JSON.parse(localStorage.getItem("rejected"));
    }
    setData(arr);
  });

  return (
    <div className="aboutpage">
      <div className="about__us-head">
        <h1>{status}</h1>
      </div>

      <div className="developer__content">
        {data == null ? <></> : <Card val={data} />}
      </div>
    </div>
  );
};

export default connect(null, null)(MainLayout);
