import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { colors } from '../../utils';


const Card = ({
  children, style, onPress, ...props
}) => (
  <TouchableOpacity
    {...props}
    onPress={onPress}
    disabled={!onPress}
    activeOpacity={1}
    style={[styles.card, style]}
  >
    {children}
  </TouchableOpacity>

);

const styles = StyleSheet.create({
  card: {
     padding: 5,
    borderRadius: 6,
   // shadowColor: '#EBEBEB',
   // shadowOffset: { width: 0, height: 5 },
   // shadowOpacity: 0.4,
  //  shadowRadius: 7,
   // elevation: 5,
    backgroundColor: '#ffffff',
  },
});

Card.defaultProps = {
  style: {},
  children: null,
  onPress: undefined,
};

Card.propTypes = {
  children: PropTypes.node,
  onPress: PropTypes.func,
};
export default Card;
