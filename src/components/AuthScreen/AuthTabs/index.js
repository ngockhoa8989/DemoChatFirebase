import { createBottomTabNavigator } from 'react-navigation'

import LoginForm from './LoginForm'
import SignUpForm from './SignUpForm'


export default createBottomTabNavigator({
  Login: {
    screen: LoginForm,
  },
  SignUp: {
    screen: SignUpForm,
  },
},
  {
    initialRouteName: 'Login',
    headerMode: 'none',
    showLabel: false,
    tabBarOptions: {
      activeTintColor: '#EA0000',
      inactiveTintColor: '#373E43',
      labelStyle: {
        color: '#373E43'
      }
    }
  })



