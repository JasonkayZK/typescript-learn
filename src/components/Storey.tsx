import styled from "@emotion/styled";
import {createRef, useEffect, useState} from "react";
import useComponentDidMount from "../hooks/useComponentDidMount";

const StyleStorey = styled.div`
  display: flex;
  align-items: center;
  height: 98px;
  border-bottom: 1px solid var(--elevatorBorderColor--);
`;

const StyleStoreyController = styled.div`
  width: 70px;
  height: 98px;
  padding: 8px 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const StyleStoreyCount = styled.div`
  width: 80px;
  height: 98px;
  text-align: center;
  font: 56px / 98px 微软雅黑, 楷体;
`;

const StyleButton = styled.button`
  width: 36px;
  height: 36px;
  border: 1px solid var(--elevatorBorderColor--);
  border-radius: 50%;
  outline: none;
  cursor: pointer;
  background-color: var(--elevatorBtnBgColor--);
  &:last-of-type {
    margin-top: 8px;
  }
  &.checked {
    background-color: var(--elevatorBorderColor--);
    color: var(--elevatorBtnBgColor--);
  }
  &[disabled] {
    cursor: not-allowed;
    background-color: var(--elevatorBtnBgDisabledColor--);
    color: var(--elevatorBtnDisabledColor--);
  }
`;

export interface MethodProps {
    onUp(v: number, t: number, h?: number): void;

    onDown(v: number, t: number, h?: number): void;
}

export interface StoreyProps extends MethodProps {
    count: number
}

export interface StoreyItem {
    key: string
    disabled: boolean
}

const Storey = (props: Partial<StoreyProps>) => {
    const {count = 6} = props;
    const storeyRef = createRef<HTMLDivElement>();
    const [storeyList, setStoreyList] = useState<StoreyItem []>();
    const [checked, setChecked] = useState<string>();
    const [type, setType] = useState<keyof MethodProps>();
    const [offset, setOffset] = useState(0)
    const [currentFloor, setCurrentFloor] = useState(1);
    useComponentDidMount(() => {
        let res: StoreyItem [] = [];
        for (let i = count - 1; i >= 0; i--) {
            res.push({
                key: String(i + 1),
                disabled: false
            });
        }
        setStoreyList(res);
    });

    useEffect(() => {
        if (storeyRef) {
            setOffset(storeyRef.current?.offsetHeight as number)
        }
    }, [storeyRef])

    const changeButtonDisabled = (key: string, method: keyof MethodProps, status: boolean) => {
        if (+key === storeyList?.length && method === 'onUp') {
            return;
        }
        if ((+key === 1 && method === 'onDown')) {
            return;
        }
        setStoreyList((storey) => storey?.map(item => ({...item, disabled: status})));
    }
    const onClickHandler = (key: string, index: number, method: keyof MethodProps) => {
        setChecked(key)
        setType(method)
        const moveFloor = count - index
        const diffFloor = Math.abs(moveFloor - currentFloor)
        setCurrentFloor(moveFloor)
        props[method]?.(diffFloor, offset * (moveFloor - 1))
        changeButtonDisabled(key, method, true)
        setTimeout(() => {
            setChecked(void 0);
            changeButtonDisabled(key, method, false)
        }, diffFloor * 1000);
    };
    return (
        <>
            {storeyList?.map((item, index) => (
                <StyleStorey key={item.key} ref={storeyRef}>
                    <StyleStoreyController>
                        <StyleButton
                            disabled={Number(item.key) === storeyList.length || item.disabled}
                            onClick={() => onClickHandler(item.key, index, 'onUp')}
                            className={`${item.key === checked && type === 'onUp' ? "checked" : ""}`}
                        >
                            ↑
                        </StyleButton>
                        <StyleButton
                            disabled={Number(item.key) === 1 || item.disabled}
                            onClick={() => onClickHandler(item.key, index, 'onDown')}
                            className={`${item.key === checked && type === 'onDown' ? "checked" : ""}`}
                        >
                            ↓
                        </StyleButton>
                    </StyleStoreyController>
                    <StyleStoreyCount>{item.key}</StyleStoreyCount>
                </StyleStorey>
            ))}
        </>
    );
};

export default Storey;
