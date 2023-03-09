import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"

const Eye = () => (
  <Svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"

  >
    <Path
      d="M.667 8.5S3.333 3.167 8 3.167 15.333 8.5 15.333 8.5 12.667 13.833 8 13.833.667 8.5.667 8.5Z"
      stroke="#808588"
      strokeWidth={1.333}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M8 10.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
      stroke="#808588"
      strokeWidth={1.333}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)

export default Eye
