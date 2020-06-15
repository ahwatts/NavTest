import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import {Navigation} from 'react-native-navigation';

export default class OptionDetail extends React.Component {
    static options(props) {
        return {
            topBar: {
                background: {
                    color: 'red'
                }
            },
            // bottomTabs: {
            //     visible: false,
            //     animate: true
            // }
        };
    }

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        Navigation.mergeOptions(this.props.componentId, {
            topBar: {
                title: {
                    text: `${this.props.optionName}`
                }
            },
            bottomTabs: {
                visible: false,
                animate: true
            }
        });
    }

    render() {
        return (
            <SafeAreaView>
                <Text>{this.props.optionName} Details</Text>
            </SafeAreaView>
        );
    }
}
