import { Button, Typography } from "@material-ui/core";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Paper from "@material-ui/core/Paper";
import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import CytoGraph from "../../components/cyto/cyto";
import AppBar from "../../containers/appbar";
import Content from "../../containers/content";
import Drawer from "../../containers/drawer";
import { routes as dashboardRoutes } from "../../routes/dashboard";

interface IState {
  open: boolean;
  b: JSX.Element;
}

/**
 * class test view
 */
class CytoView extends Component<{}, IState> {
  constructor(props: any) {
    super(props);

    this.state = {
      b: <div />,
      open: false,
    };
  }

  /**
   * sa
   */
  public Increment = () => {
    this.setState({
      b: <Content routes={[...dashboardRoutes]} />,
    });
  }

  /**
   * render
   */
  public render() {
    return (
      <div>
        <CytoGraph />
        {/* <div>
          <AppBar
            routes={dashboardRoutes}
            logoUrl={"/assets/images/logo.png"}
            onLogoClick={() => alert("dsd")}
            title={"ARAKAT"}
          >
            <button>execute</button>
          </AppBar>
          <Drawer title="dsd" onLogoClick={this.Increment} />
        </div>
        <div>{this.state.b}</div> */}
      </div>
    );
  }
}

export default CytoView;
