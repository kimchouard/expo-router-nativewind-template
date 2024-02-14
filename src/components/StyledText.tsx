import { cn } from '../utils/cn';
import { Text, TextProps } from './Themed';

export function MonoText(props: TextProps) {
  return <Text {...props} className={cn(
    "font-[SpaceMono]",
    props.className,
  )} />;
}
