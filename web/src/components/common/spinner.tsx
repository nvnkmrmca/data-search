import * as React from 'react';
import { View, Text } from '../common/elements';
import { COLOR } from '../../constants';

interface IProps {
  visible: boolean,
  text?: string
};

export default (props: IProps) => {
  return (
    props.visible ?
    <View>
      <View className='loader-overlay'></View>
      <View className='loader'>
        <Text>...</Text>
        <View style={{color: COLOR.SECONDARY, fontWeight: 'bold', marginTop: 5}}>{props.text}</View>
      </View>
    </View>
    :
    null
  );
}