import * as React from 'react';
import { COLOR } from '../../constants';

interface IProps {
  title: string,
  onPress: () => void,
  style? : {}
};

export default (props: IProps) => {
  return (
    <input type='button' className='btn' value={props.title} onClick={() => props.onPress()} style={{...styles.btn, ...props.style}} />
  );
}

const styles = {
  btn: {
    backgroundColor: COLOR.PRIMARY,
    borderColor: COLOR.PRIMARY,
    color: COLOR.FONT_COLOR3,
    cursor: 'pointer',
    padding: '3px 10px'
  }
};