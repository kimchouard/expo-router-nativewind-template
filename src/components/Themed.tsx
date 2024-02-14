/**
 * Learn more about Light and Dark modes:
 * https://docs.expo.io/guides/color-schemes/
 */

import { Text as DefaultText, View as DefaultView } from 'react-native';

import { useColorScheme } from './useColorScheme';
import { cn } from '../utils/cn';

type ThemeProps = {
  lightColor?: string;
  darkColor?: string;
};

export type TextProps = ThemeProps & DefaultText['props'];
export type ViewProps = ThemeProps & DefaultView['props'];

export function useThemedColor(styleType: 'text' | 'background') {
  const theme = useColorScheme();

  if (styleType === 'background') {
    return (theme === 'light') ? 'bg-light-background' : 'bg-dark-background';
  } else if (styleType === 'text') {
    return (theme === 'light') ? 'text-light-text' : 'text-dark-text';
  }
}

export function Text(props: TextProps) {
  const { className, ...otherProps } = props;
  const textColor = useThemedColor('text');

  return <DefaultText className={cn(
    textColor,
    className
  )} {...otherProps} />;
}

export function View(props: ViewProps) {
  const { className, ...otherProps } = props;
  const backgroundColor = useThemedColor('background');

  return <DefaultView className={cn(
    backgroundColor,
    className
  )} {...otherProps} />;
}
