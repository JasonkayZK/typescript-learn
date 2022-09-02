import styled from '@emotion/styled';

const StyleDoor = styled.div`
  width: 50%;
  position: absolute;
  top: 0;
  height: 100%;
  background-color: var(--elevatorBorderColor--);
  border: 1px solid var(--elevatorBtnBgColor--);
`;

const StyleLeftDoor = styled(StyleDoor)`
  left: 0;
`;

const StyleRightDoor = styled(StyleDoor)`
  right: 0;
`;


export {StyleLeftDoor, StyleRightDoor}