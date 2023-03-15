import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

const ThreeDots = (props: SvgProps) => (
  <Svg
  width={23}
  height={24}
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
  {...props}
>
  <Path
    d="M11.5 7.5c.794 0 1.438-.672 1.438-1.5s-.644-1.5-1.438-1.5c-.794 0-1.438.672-1.438 1.5s.644 1.5 1.438 1.5ZM11.5 13.5c.794 0 1.438-.672 1.438-1.5s-.644-1.5-1.438-1.5c-.794 0-1.438.672-1.438 1.5s.644 1.5 1.438 1.5ZM11.5 19.5c.794 0 1.438-.672 1.438-1.5s-.644-1.5-1.438-1.5c-.794 0-1.438.672-1.438 1.5s.644 1.5 1.438 1.5Z"
    fill="black"
  />
</Svg>
);

export default ThreeDots;
