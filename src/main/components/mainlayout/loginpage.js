import React, { Component } from "react";
import * as actions from "../../store/actions/index";
import { connect } from "react-redux";
import fastor from "../../images/Fastor Logo.png";
import "./util.css";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import Backdrop from "../utils/modals/backdrop";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}


class LoginPage extends React.Component{

  state = {
    activeClass: "container",
    phone:"",
    otp:"",
    success: false,
    alert: "",
    modal: false,
    modalmessage: "",
    modalheader: "",
    field: "",
    loader:false,
    inputclass:"",
    successtwo:false
  };

  signInShow = (e) => {
    e.preventDefault();
    this.setState({ activeClass: "container" });
  };

  signUpShow = (e) => {
    e.preventDefault();
    this.setState({ activeClass: "container active" });
  };

  setLogin = (e) => {
    console.log(this.state.phone,this.state.otp);
    e.preventDefault();
    
    if (this.state.phone.length !== 10) {
      this.setState({
        alert: "Please Enter Valid Phone Number",
        success: true,
      });
    } else if (this.state.otp === "") {
      this.setState({
        alert: "Please Enter OTP",
        success: true,
      });
    } else {
      this.props.reduxLogin(this.state.phone,this.state.otp);
    }
  };

  setSignup = (e) => {
    e.preventDefault();

    if(this.state.phone.length !==10){
      this.setState({
        alert: "Please Enter Correct Phone Number",
        success: true,
      });
    }

    else{
      this.props.reduxSignup(
        this.state.phone
      );

      }
  };

  errorHandle = () =>{
    this.setState({success:true,alert:"Wrong PhoneNumber"})
  }

  handleClose = () =>{
    this.setState({success:false});
  }


  render(){
    let error=null;
    if(this.props.status!==null){
          error=(
            <Snackbar
        open={true}
        autoHideDuration={6000}
        onClose={this.handleClose}
      >
        <Alert onClose={this.handleClose} severity="error">
          {this.props.status}
        </Alert>
      </Snackbar>
          )
    }
    return(
      <>
      {error}
      <Backdrop open={this.props.authloading} />
      <Backdrop open={this.props.signuploading} />
      <div className="section">
          <div class={this.state.activeClass}>
            <div class="user signinBx">
              <div class="imgBx">
                <img src={fastor} alt="" />
              </div>
              <div class="formBx">
                <form>
                  <h2>Sign In</h2>
                  <input
                    type="number"
                    class={this.state.inputclass}
                    placeholder="Phone Number"
                    onChange={(e) =>
                      this.setState({
                        phone: e.target.value,
                      })
                    }
                    value={this.state.phone}
                  />
                  <input
                    type="number"
                    placeholder="Otp"
                    onChange={(e) =>
                      this.setState({
                        otp: e.target.value,
                      })
                    }
                    value={this.state.otp}
                  />
                  <input
                    onClick={(e) => this.setLogin(e)}
                    type="submit"
                    name=""
                    value="Login"
                  />
                  <br />
                  

                  <p class="signup">
                    Don't have an account ?
                    <a href="#" onClick={(e) => this.signUpShow(e)}>
                      Sign Up
                    </a>
                  </p>
                </form>
              </div>
            </div>
            <div class="user signupBx">
              <div class="formBx">
                <form>
                  <h2>Create an account</h2>
                  <input
                    type="number"
                    placeholder="Phone"
                    onChange={(e) =>
                      this.setState({
                        phone: e.target.value,
                      })
                    }
                    value={this.state.phone}
                  />
                  
                  <input
                    onClick={(e) => this.setSignup(e)}
                    type="submit"
                    name=""
                    value="Sign Up"
                  />
                  <p class="signup">
                    Already have an account ?
                    <a href="#" onClick={(e) => this.signInShow(e)}>
                      Sign In
                    </a>
                  </p>
                </form>
              </div>
              <div class="imgBx">
                <img src={fastor} alt="" />
              </div>
            </div>
          </div>
        </div>
        <Snackbar
        open={this.state.success}
        autoHideDuration={6000}
        onClose={this.handleClose}
      >
        <Alert onClose={this.handleClose} severity="error">
          {this.state.alert}
        </Alert>
      </Snackbar>
      </>
    );
  }
}

const mapStateToProps = (props) => {
  return {
    status:props.auth.status,
    authloading:props.auth.authloading,
    signuploading:props.auth.signuploading
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    reduxLogin: (phone,otp) => {
      dispatch(actions.reduxLogin(phone,otp));
    },
    reduxSignup: (phone) =>{
      dispatch(actions.reduxSignup(phone));
    }
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
