import React from 'react';
import {Button, SafeAreaView, Text} from 'react-native';
import {Navigation} from 'react-native-navigation';

function handleAwesomenessPress() {
    Navigation.push('OPTIONS_TAB', {
       component: {
           name: 'OptionDetail',
           passProps: {
               optionName: 'Awesomeness'
           },
           // options: {
           //     bottomTabs: {
           //         visible: false,
           //         animate: true
           //     }
           // }
       }
    });
}

export default function OptionsScreen(props) {
    return (
        <SafeAreaView>
            <Text>Options Screen</Text>
            <Button title="Awesomeness Details"
                    onPress={handleAwesomenessPress} />
        </SafeAreaView>
    );
}
