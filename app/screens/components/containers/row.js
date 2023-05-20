import React from 'react';
import { View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
});

const Row = ({
  children, style, centerAlignItems, flexBox,
}) => (
  <View
    style={[
      styles.row,
      centerAlignItems
        ? {
          alignItems: 'center',
          justifyContent: 'center',
        }
        : {},
      flexBox ? { flex: 1 } : {},
      style || {},
    ]}
  >
    {children}
  </View>
);


Row.defaultProps = {
  style: {},
  children: null,
  centerAlignItems: false,
  flexBox: false,
};
Row.propTypes = {
  children: PropTypes.node,
  centerAlignItems: PropTypes.bool,
  flexBox: PropTypes.bool,
};
export default Row;
