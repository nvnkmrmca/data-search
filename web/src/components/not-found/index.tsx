import * as React from 'react';
import { View, Text } from '../common/elements';
import { COLOR } from '../../constants';

export default () => {
    return (
        <View style={{flex: 1, backgroundColor: COLOR.INVERSE, padding: 40}}>
            <Text>Page not found!!!</Text>
        </View>
    );
};