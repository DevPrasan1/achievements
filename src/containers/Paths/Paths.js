/**
 * @file Paths container module
 * @author Theodor Shaytanov <theodor.shaytanov@gmail.com>
 * @created 21.02.18
 */
import { compose } from "redux";
import { connect } from "react-redux";
import Button from "material-ui/Button";
import Grid from "material-ui/Grid";
import Typography from "material-ui/Typography";
import List, { ListItem, ListItemText, ListSubheader } from "material-ui/List";
import PropTypes from "prop-types";
import React from "react";
import Tabs, { Tab } from "material-ui/Tabs";

class Paths extends React.PureComponent {
  static propTypes = {
    dispatch: PropTypes.func
  };

  state = { tabIndex: 0 };

  render() {
    return (
      <Grid container>
        <Grid item xs={12} sm={3}>
          <Button
            color="primary"
            raised
            style={{
              margin: 4
            }}
          >
            Add Path
          </Button>
          <List
            component="nav"
            subheader={
              <ListSubheader component="div">Private Paths</ListSubheader>
            }
          >
            <ListItem
              button
              style={{
                background: "rgba(0, 0, 0, 0.14)"
              }}
            >
              <ListItemText inset primary="Default path" />
            </ListItem>
          </List>
          <List
            component="nav"
            subheader={
              <ListSubheader component="div">Public Paths</ListSubheader>
            }
          >
            <ListItem button>
              <ListItemText inset primary="Default path" />
            </ListItem>
          </List>
        </Grid>
        <Grid item xs={12} sm={9}>
          <Button
            color="primary"
            raised
            style={{
              margin: 4
            }}
          >
            Add Notebook
          </Button>
          <Button
            color="primary"
            raised
            style={{
              margin: 4
            }}
          >
            Add Question
          </Button>
          <Tabs
            fullWidth
            indicatorColor="primary"
            textColor="primary"
            value={this.state.tabIndex}
            onChange={(e, index) => this.setState({ tabIndex: index })}
          >
            <Tab label="First Notebook" />
            <Tab label="First Question" />
          </Tabs>
          {this.state.tabIndex === 0 && (
            <Typography>Some notebook description</Typography>
          )}
          {this.state.tabIndex === 1 && (
            <Typography>Some question description</Typography>
          )}
        </Grid>
      </Grid>
    );
  }
}

const mapStateToProps = state => ({
  uid: state.firebase.auth.uid
});

export default compose(connect(mapStateToProps))(Paths);
