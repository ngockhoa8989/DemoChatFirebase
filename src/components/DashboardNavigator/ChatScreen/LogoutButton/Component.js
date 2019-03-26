import React from 'react'
import PropTypes from 'prop-types'
import { TouchableOpacity, Image } from 'react-native'

import styles from './Styles'

import exitIcon from 'images/ic_exit_to_app.png';


const LogoutButtonComponent = props =>
  <TouchableOpacity
    style={styles.container}
    onPress={props.logout}>

    <Image source={exitIcon} />
  </TouchableOpacity>

LogoutButtonComponent.propTypes = {
  logout: PropTypes.func.isRequired
}

export default LogoutButtonComponent
