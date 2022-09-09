import styled from "@emotion/styled";
import {StyleProps} from "../type/style";
import Elevator from "./Elevator";

const StyleShaft = styled.div`
  width: 200px;
  position: relative;
  border-right: 2px solid var(--elevatorBorderColor--);
  padding: 1px;
`;

export interface ElevatorProps {
    leftDoorStyle: StyleProps["style"];
    rightDoorStyle: StyleProps["style"];
    elevatorStyle: StyleProps["style"];
    leftToggle: boolean;
    rightToggle: boolean;
}

const ElevatorShaft = (props: Partial<ElevatorProps>) => {
    const {
        leftDoorStyle,
        rightDoorStyle,
        elevatorStyle,
        leftToggle,
        rightToggle,
    } = props;

    return (
        <StyleShaft>
            <Elevator
                style={elevatorStyle}
                leftDoorStyle={leftDoorStyle}
                rightDoorStyle={rightDoorStyle}
                leftToggle={leftToggle}
                rightToggle={rightToggle}
            ></Elevator>
        </StyleShaft>
    );
};

export default ElevatorShaft;
