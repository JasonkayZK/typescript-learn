import {StyleProps} from '../type/style'
import {StyleRightDoor} from './Door'

export interface ElevatorRightDoorProps extends StyleProps {
    toggle: boolean
}

const ElevatorRightDoor = (props: Partial<ElevatorRightDoorProps>) => {
    const {style, toggle} = props;
    return (
        <StyleRightDoor style={style} toggle={toggle}/>
    )
}

export default ElevatorRightDoor