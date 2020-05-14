import React, { Component, ReactNode } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export default class TestComponent extends Component {
     render(): ReactNode {
        return <TouchableOpacity onPress={() => console.log("test")}>
            <Text>
                Something To Test
            </Text>
        </TouchableOpacity>
    }
}