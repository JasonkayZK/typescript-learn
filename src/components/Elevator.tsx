import styled from "@emotion/styled"
import {StyleProps} from "../type/style";
import ElevatorLeftDoor from "./ElevatorLeftDoor"
import ElevatorRightDoor from "./ElevatorRightDoor"

const StyleElevator = styled.div`
  height: 98px;
  background: url("https://www.eveningwater.com/my-web-projects/js/26/img/6.jpg") center / cover no-repeat;
  border: 1px solid var(--elevatorBorderColor--);
  width: calc(100% - 2px);
  padding: 1px;
  transition-timing-function: ease-in-out;
  position: absolute;
  left: 1px;
  bottom: 1px;
`

export interface ElevatorProps extends StyleProps {
    leftDoorStyle: StyleProps['style']
    rightDoorStyle: StyleProps['style']
    leftToggle: boolean
    rightToggle: boolean
}

const Elevator = (props: Partial<ElevatorProps>) => {
    const {style, leftDoorStyle, rightDoorStyle, leftToggle, rightToggle} = props;
    return (
        <StyleElevator style={style}>
            <ElevatorLeftDoor style={leftDoorStyle} toggle={leftToggle}/>
            <ElevatorRightDoor style={rightDoorStyle} toggle={rightToggle}/>
        </StyleElevator>
    )
}

export default Elevator