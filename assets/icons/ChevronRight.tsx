import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"

const ChevronRight = () => (
  <Svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M.275 11.967a.556.556 0 0 1 0-.786L5.067 6.39.275 1.597A.556.556 0 1 1 1.06.81l5.185 5.185a.556.556 0 0 1 0 .786L1.06 11.967a.556.556 0 0 1-.785 0Z"
      fill="#404040"
    />
  </Svg>
)

export default ChevronRight
