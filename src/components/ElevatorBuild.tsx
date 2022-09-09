import styled from "@emotion/styled";
import {useState} from "react";
import {StyleProps} from "../type/style";
import ElevatorShaft from "./ElevatorShaft";
import StoreyZone from "./StoreyZone";

const StyleBuild = styled.div`
  width: 350px;
  max-width: 100%;
  min-height: 500px;
  border: 6px solid var(--elevatorBorderColor--);
  overflow: hidden;
  display: flex;
  margin: 3vh auto;
`;

const ElevatorBuild = () => {
    const [elevatorStyle, setElevatorStyle] = useState<StyleProps["style"]>();
    const [doorStyle, setDoorStyle] = useState<StyleProps["style"]>();
    const [open, setOpen] = useState(false)
    const move = (diffFloor: number, offset: number) => {
        setElevatorStyle({
            transitionDuration: diffFloor + 's',
            bottom: offset,
        });
        setOpen(true)
        setDoorStyle({
            animationDelay: diffFloor + 's'
        });

        setTimeout(() => {
            setOpen(false)
        }, diffFloor * 1000 + 3000)
    };
    return (
        <StyleBuild>
            <ElevatorShaft
                elevatorStyle={elevatorStyle}
                leftDoorStyle={doorStyle}
                rightDoorStyle={doorStyle}
                leftToggle={open}
                rightToggle={open}
            ></ElevatorShaft>
            <StoreyZone onUp={(k: number, h: number) => move(k, h)}
                        onDown={(k: number, h: number) => move(k, h)}></StoreyZone>
        </StyleBuild>
    );
};

export default ElevatorBuild;
