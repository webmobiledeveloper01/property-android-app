import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

const sizeRatio = 100 / 12;

const Column = ({
  size, children, style,
  noPadding, centerAlignItems, noStyle,
  flexBox, centerHorizontal, centerVertical,
}) => {
  let width = size * sizeRatio;
  if (width > 100) {
    width = 100;
  }
  return (
    <View
      style={[
        noStyle ? {} : {
          width: `${width}%`,
          padding: noPadding ? 0 : 5,
        },
        centerAlignItems ? {
          justifyContent: 'center',
          alignItems: 'center',
        } : {},
        centerHorizontal ? {
          alignItems: 'center',
        } : {},
        centerVertical ? {
          justifyContent: 'center',
        } : {},
        flexBox ? {
          flexWrap: 'wrap', flex: 1,
        } : {},
        style,
      ]}
    >
      {children}
    </View>
  );
};

Column.defaultProps = {
  size: 12,
  style: {},
  children: null,
  centerAlignItems: false,
  centerHorizontal: false,
  centerVertical: false,
  noPadding: false,
  flexBox: false,
  noStyle: false,
};

Column.propTypes = {
  size: PropTypes.number,
  children: PropTypes.node,
  centerAlignItems: PropTypes.bool,
  centerHorizontal: PropTypes.bool,
  centerVertical: PropTypes.bool,
  noPadding: PropTypes.bool,
  flexBox: PropTypes.bool,
  noStyle: PropTypes.bool,
};

export default Column;
