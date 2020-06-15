import {Navigation} from 'react-native-navigation';

import App from './App';
import HomeScreen from './HomeScreen';
import OptionsScreen from './OptionsScreen';
import OptionDetailScreen from './OptionDetailScreen';

Navigation.registerComponent('App', () => App);
Navigation.registerComponent('Home', () => HomeScreen);
Navigation.registerComponent('Options', () => OptionsScreen);
Navigation.registerComponent('OptionDetail', () => OptionDetailScreen);
Navigation.events().registerAppLaunchedListener(() => {
    Navigation.setRoot({
        root: {
            bottomTabs: {
                id: 'BOTTOM_TABS_LAYOUT',
                children: [
                    {
                        stack: {
                            id: 'HOME_TAB',
                            children: [
                                {
                                    component: {
                                        id: 'HOME_SCREEN',
                                        name: 'Home'
                                    }
                                }
                            ],
                            options: {
                                bottomTab: {
                                    text: 'HOME'
                                }
                            }
                        }
                    },
                    {
                        stack: {
                            id: 'OPTIONS_TAB',
                            children: [
                                {
                                    component: {
                                        id: 'OPTIONS_SCREEN',
                                        name: 'Options'
                                    }
                                }
                            ],
                            options: {
                                bottomTab: {
                                    text: 'OPTIONS'
                                }
                            }
                        }
                    }
                ]
            }
        }
    });
});
