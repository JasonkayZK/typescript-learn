import styled from "@emotion/styled";
import Storey from "./Storey";

const StyleStoreyZone = styled.div`
  width: auto;
  height: 100%;
`;

export interface StoreyZoneProps {
    onUp(v: number, h?: number): void;

    onDown(v: number, h?: number): void;
}

const StoreyZone = (props: Partial<StoreyZoneProps>) => {
    const {onUp, onDown} = props;
    return (
        <StyleStoreyZone>
            <Storey
                onUp={(k: number, h: number) => onUp?.(k, h)}
                onDown={(k: number, h: number) => onDown?.(k, h)}
            />
        </StyleStoreyZone>
    );
};

export default StoreyZone;
