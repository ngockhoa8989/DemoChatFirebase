//export { default } from './Container'

import { createStackNavigator } from 'react-navigation';
import AuthTabs from '../AuthScreen/AuthTabs/index';
import DashboardNavigator from '../DashboardNavigator/index';

export default createStackNavigator({
    AuthTabs: {
        screen: AuthTabs,
    },
    DashboardNavigator: {
        screen: DashboardNavigator,
    },

});