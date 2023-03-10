import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"

const Vector1 = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M8.05.533a2.25 2.25 0 0 1 2.9 0l6.75 5.695c.508.427.8 1.056.8 1.72v9.802a1.75 1.75 0 0 1-1.75 1.75h-3A1.75 1.75 0 0 1 12 17.75v-5a.75.75 0 0 0-.75-.75h-3.5a.75.75 0 0 0-.75.75v5a1.75 1.75 0 0 1-1.75 1.75h-3A1.75 1.75 0 0 1 .5 17.75V7.947c0-.663.292-1.292.8-1.72L8.05.533Z"
      fill={props.color}
    />
  </Svg>
)

export default Vector1
