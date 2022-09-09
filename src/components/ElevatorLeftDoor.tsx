import {StyleProps} from "../type/style";
import {StyleLeftDoor} from "./Door"

export interface ElevatorLeftDoorProps extends StyleProps {
    toggle: boolean
}

const ElevatorLeftDoor = (props: Partial<ElevatorLeftDoorProps>) => {
    const {style, toggle} = props;
    return (
        <StyleLeftDoor style={style} toggle={toggle}></StyleLeftDoor>
    )
}

export default ElevatorLeftDoor