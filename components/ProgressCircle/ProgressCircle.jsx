import React, {useEffect} from 'react';
import {useRef} from 'react';
import {Animated, View, Text} from 'react-native';
import Svg, {G, Circle} from 'react-native-svg';
import {verticalScale} from '../../assets/metrics/Metrics';
import {theme} from '../../assets/theme/theme';
import styles from './style';

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

const ProgressCircle = () => {
  const animatedValue = useRef(new Animated.Value(0)).current;
  const circleRef = useRef();
  const percentage = 70;
  const amount = 32.01;
  const radius = verticalScale(108);
  const duration = 3000;
  const color = theme.colors.primary_green;
  const inactiveColor = theme.colors.gray;
  const strokeWidth = 3;
  const halfCircle = radius + strokeWidth;
  const circleCircumference = 2 * Math.PI * radius;
  const max = 100;

  const animation = toValue => {
    return Animated.timing(animatedValue, {
      toValue,
      duration,
      useNativeDriver: true,
    }).start();
  };

  useEffect(() => {
    animation(percentage);

    animatedValue.addListener(v => {
      if (circleRef?.current) {
        const maxPercent = (100 * v.value) / max;
        const strokeDashoffset =
          circleCircumference - (circleCircumference * maxPercent) / 100;
        circleRef.current.setNativeProps({
          strokeDashoffset,
        });
      }
    });
  });

  return (
    <View>
      <Svg
        width={radius * 2}
        height={radius * 2}
        viewBox={`0 0 ${halfCircle * 2} ${halfCircle * 2}`}>
        <G rotation="0" origin={`${halfCircle}, ${halfCircle}`}>
          <Circle
            cx="50%"
            cy="50%"
            stroke={inactiveColor}
            strokeWidth={strokeWidth}
            r={radius}
            fill={'transparent'}
            strokeOpacity={0.7}
          />
          <AnimatedCircle
            ref={circleRef}
            cx="50%"
            cy="50%"
            stroke={color}
            strokeWidth={strokeWidth}
            r={radius}
            fill={'transparent'}
            strokeOpacity={0.9}
            strokeDasharray={circleCircumference}
            strokeDashoffset={circleCircumference / 2}
            strokeLinecap="round"
          />
        </G>
      </Svg>
      <View style={styles.container}>
        <Text style={styles.percent}>${amount}</Text>
        <Text style={styles.spent}>{percentage}% spent</Text>
      </View>
    </View>
  );
};

export default React.memo(ProgressCircle);
