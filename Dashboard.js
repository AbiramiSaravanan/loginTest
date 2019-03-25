import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "./project12/CustomerRedux/actions/authActions";
import {View,Text,Button} from 'react-native';
class Dashboard extends Component {
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };
render() {
    const { user } = this.props.auth;
return (
      <View>
            
               {/* <Text>Hey there,{user.name.split(" ")[0]}</Text>  */}
             
            <Button title="logout"
              onPress={this.onLogoutClick}
            
            >
              Logout
            </Button>
            </View>
    );
  }
}
const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(
  mapStateToProps,
  { logoutUser }
)(Dashboard);
