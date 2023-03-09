import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"

const Piechart = () => (
  <Svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    
  >
    <Path
      d="M12.833 20a8 8 0 1 0 0-16.001 8 8 0 0 0 0 16.001Zm0 2c-5.523 0-10-4.477-10-10s4.477-10 10-10 10 4.477 10 10-4.477 10-10 10Zm-1-19h2v10h-2V3Zm0 8h10v2h-10v-2Z"
      fill="#000"
    />
  </Svg>
)

export default Piechart
