import React, { Component } from 'react';

import { connect } from 'react-redux';
import { login } from '../actions';

import LoginForm from '../components/forms/LoginForm';
import Float from '../components/Float';
import Title from '../components/Title';
import ContainerWithBackground from '../components/ContainerWithBackground';

import PageTemplate from './PageTemplate';

import backgroundImage from '../resources/backgrounds/login.jpg';
import '../App.css';

class LoginPage extends Component {
  componentDidUpdate() {
    if(this.props.token){
      this.props.history.push('/');
    }
  }

  render() {
    return (
      <div className="root">
        <PageTemplate>
          <ContainerWithBackground
            imageUrl={backgroundImage}
            height="600px"
            width="50%"
            style={{ display: 'inline-block' }}>
          </ContainerWithBackground>
          
          <div style={ styles.formStyle }>
            <Title label='Login' />
            <LoginForm onSubmit={(data) => this.props.login(data)} />
          </div>
        </PageTemplate>
      </div>
    );
  }
}

const styles = {
  formStyle: {
    width: '48%',
    padding: '25px',
    backgroundColor: 'white',
    display: 'inline-block',
    boxSizing: 'border-box',
    verticalAlign: 'top',
  }
};

const mapStateToProps = (state) => {
  const { token } = state.auth;

  return { token };
};

export default connect(mapStateToProps, { login })(LoginPage);
