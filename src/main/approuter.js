import React from "react";
import MainLayout from "./components/mainlayout/mainlayout";
import User from "./components/mainlayout/userpage";
import Login from "./components/mainlayout/loginpage";
import { connect } from "react-redux";
import * as actions from "./store/actions/index";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class AppRouter extends React.Component {
  componentDidMount() {
    this.props.authCheckStatus();
    localStorage.setItem("currid", 0);
  }
  render() {
    return (
      <Router>
        {this.props.token !== null  ? (
          <>
            <Switch>
              <div className="AppRouter">
                <Route path="/" exact component={MainLayout} />
                <Route path="/main/:id" exact component={User} />
              </div>
            </Switch>
          </>
        ) : (
          <>
            <Switch>
              <div className="AppRouter">
                <Route path="/" exact component={Login} />
              </div>
            </Switch>
          </>
        )}
      </Router>
    );
  }
}

const mapStateToProps = (props) => {
  return {
    token: props.auth.token,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getMember: () => {
      dispatch(actions.getMember());
    },
    authCheckStatus: () => {
      dispatch(actions.authCheckStatus());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AppRouter);
