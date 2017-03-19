import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Spinner, Button, CardSection } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  state = { loggedin: null };

  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyC6sBvrXWZazb9-z4xfU_6zvG-y2Juu-nc',
      authDomain: 'authentication-4bebf.firebaseapp.com',
      databaseURL: 'https://authentication-4bebf.firebaseio.com',
      storageBucket: 'authentication-4bebf.appspot.com',
      messagingSenderId: '900619686240'
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedin: true });
      } else {
        this.setState({ loggedin: false });
      }
    });
  }

  onLogout() {
    firebase.auth().signOut();
  }

  renderContent() {
    switch (this.state.loggedin) {
      case true:
        return (
          <CardSection>
            <Button onPress={this.onLogout.bind(this)}>
              Log out
            </Button>
          </CardSection>
        );
      case false:
        return <LoginForm />;
      default:
        return <Spinner size="large" />;
    }
  }

  render() {
    return (
      <View>
        <Header headerText='Authentication' />
        {this.renderContent()}
      </View>
    );
  }
}
export default App;
