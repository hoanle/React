import React, { Component } from 'react';
import { Text } from 'react-native';
import firebase from 'firebase';
import { Button, Card, CardSection, Input, Spinner } from './common';

class LoginForm extends Component {
  state = { email: '', password: '', loading: false };

  onButtonPress() {
    const { email, password } = this.state;
    this.setState({ error: '', loading: true });

    firebase.auth().signInWithEmailAndPassword(email, password)
    .then(this.onLoginSuccess.bind(this))
    .catch(() => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(this.onLoginSuccess.bind(this))
        .catch(this.onLoginFailed.bind(this));
    });
  }

  onLoginFailed() {
    this.setState({ error: 'Authentication Failed', loading: false, password: '' });
  }

  onLoginSuccess() {
      this.setState({
        email: '',
        password: '',
        loading: false,
        error: ''
      });
  }

  renderButton() {
    if (this.state.loading) {
      return <Spinner size='small' />;
    }
    return (
      <Button onPress={this.onButtonPress.bind(this)}>
        Login
      </Button>
    );
  }

  render() {
    return (
      <Card>
        <CardSection >
          <Input
            value={this.state.email}
            label='Email'
            placeholder="user@gmail.com"
            onChangeText={email => this.setState({ email })}
          />
        </CardSection>
        <CardSection>
        <Input
          value={this.state.password}
          label='Password'
          secureTextEntry
          placeholder="Your password here"
          onChangeText={password => this.setState({ password })}
          style={{ height: 20, width: 100 }}
        />
        </CardSection>
        <Text style={styles.errorTextStyle}>
          {this.state.error}
        </Text>
        <CardSection>
          {this.renderButton()}
        </CardSection>
      </Card>
    );
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
};

export default LoginForm;
