import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"

const Fi_book = () => (
  <Svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  
  >
    <Path
      d="M4 20a2.5 2.5 0 0 1 2.5-2.5H20"
      stroke="#0052FE"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M6.5 2.5H20v20H6.5A2.5 2.5 0 0 1 4 20V5a2.5 2.5 0 0 1 2.5-2.5v0Z"
      stroke="#0052FE"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)

export default Fi_book
