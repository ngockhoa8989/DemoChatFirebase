import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Image } from 'react-native'

import { connect } from 'react-redux'

import { loginUser } from '../../../../store/session'

import LoginFormComponent from './Component'

import translations from '../../../../i18n'

import ic_person_outline from 'images/ic_person_outline.png';

class LoginFormContainer extends Component {

  static navigationOptions = {
    tabBarLabel: translations.t('login'),
    tabBarIcon: ({ tintColor }) => (
      <Image
        source={ic_person_outline}
        style={{tintColor: tintColor}}
      />
    )
  }

  onLogin = (email, password) => {
    this.props.login(email, password);
    this.props.navigation.navigate('Chat');
  }

  render() {
    return (
      <LoginFormComponent
        login={this.onLogin.bind(this)} />
    )
  }
}

LoginFormContainer.propTypes = {
  login: PropTypes.func.isRequired
}

const mapDispatchToProps = {
  login: loginUser
}

export default connect(null, mapDispatchToProps)(LoginFormContainer)