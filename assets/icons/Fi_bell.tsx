import * as React from "react"
import Svg, { SvgProps, Path, Circle } from "react-native-svg"

const Fi_bell = () => (
  <Svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    
  >
    <Path
      d="M18 8A6 6 0 1 0 6 8c0 7-3 9-3 9h18s-3-2-3-9ZM13.73 21a1.999 1.999 0 0 1-3.46 0"
      stroke="#070707"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Circle cx={18} cy={5} r={4} fill="#FE002E" />
  </Svg>
)

export default Fi_bell
