import React from 'react';
import { View,StyleSheet, AsyncStorage } from "react-native";
import { Input,Button,Card,Text } from 'react-native-elements';
import {registerUser} from './project12/CustomerRedux/actions/authActions';
import {connect} from 'react-redux';
import {  widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen'
import PropTypes from "prop-types";
import { ScrollView } from 'react-native-gesture-handler';

class Registration extends React.Component {
    constructor(){
        super();
        this.state = {
          name : "",
          email : "",
          password : "",
          confirmpassword:"",
          errors : {}
        }; 
       //  this._bootstrapAsync();    
      }
   
   
     //  _bootstrapAsync = async () => {
     //   const userToken = await AsyncStorage.getItem('jwtToken');
     //   console.log(userToken);
     //   // This will switch to the App screen or Auth screen and this loading
     //   // screen will be unmounted and thrown away.
     //   this.props.navigation.navigate(userToken ? 'Main' : 'Login');
     //  }
   
       handlepress = () => {
        console.log("I entered reg function");
        const userRegister = {
          name : this.state.name,
          email : this.state.email,
          password : this.state.password,
          password2 : this.state.confirmpassword
        }
        console.log(userRegister);
         this.props.registerUser(userRegister);
       
        setTimeout(() =>this.props.navigation.navigate('Login'), 2000);
      }

      static navigationOptions = {
        header:null,
       };
    render() {
      //  const { navigate } = this.props.navigation;
        return (
          <ScrollView>
          <View  style={{height: hp('130%'),backgroundColor:'#f2efef'}}>
            <View style={{paddingTop:hp('15%')}}>
              <Card>
               <Text  style={{fontWeight: 'bold',fontSize:25,textAlign:'center',paddingTop:hp('3%')}}>
                 Register
               </Text>
              <View style={{flexDirection: 'column',paddingTop:hp('5%')}}>
              <View>
              <Input  onChangeText={name => this.setState({ name })}
                placeholder='Name'/>
                </View>
                <View style={{flexDirection: 'column',paddingTop:hp('3%')}}>
               <Input onChangeText={email => this.setState({ email })}
                placeholder='Email'/>
                </View>
               <View style={{paddingTop:hp('3%')}}>
               <Input  onChangeText={password => this.setState({ password })}
                placeholder='Password'/>
                 <View style={{flexDirection: 'column',paddingTop:hp('3%')}}>
                 <Input secureTextEntry={true} onChangeText={confirmpassword => this.setState({ confirmpassword })}
                placeholder='Confirm Password'/>
                </View>
                </View>
                </View>
               <View style={{flexDirection: 'column',paddingTop:hp('3%')}}>
               <Button style={styles.Button} onPress={() => this.handlepress()}
                title="Register"
                type="solid"/>
               </View>
               <View style={{flexDirection: 'column',paddingTop:hp('3%')}}>
               <Text style={{textAlign: 'center',fontWeight:'bold'}}>
                   Already Have An Account..?
               </Text>
               <Button  style={styles.Button} onPress={() => this.props.navigation.navigate('login')}
                title="Login" 
                type="clear"/>
               </View>
               </Card>
               </View>
               </View>
          
               </ScrollView>
          
        );
      }
  }
  const styles = StyleSheet.create({
  
    Button: {
    height:10,
     width:20, 
   padding:5,
marginRight:20
}
});



  const mapStateToProps = (state) => ({
    auth : state.auth,
    errors:state.errors
  });
  export default connect(mapStateToProps, {registerUser})(Registration);
  //export default Registration;++