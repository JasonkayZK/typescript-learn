import styled from '@emotion/styled';

const StyleDoor = styled.div`
  width: 50%;
  position: absolute;
  top: 0;
  height: 100%;
  background-color: var(--elevatorBorderColor--);
  border: 1px solid var(--elevatorBtnBgColor--);
`;

const StyleLeftDoor = styled(StyleDoor)<{ toggle?: boolean }>`
  left: 0;
  ${({toggle}) => toggle ? 'animation: doorLeft 3s 1s cubic-bezier(0.075, 0.82, 0.165, 1);' : ''} @keyframes doorLeft {
    0% {
      left: 0px;
    }
    25% {
      left: -90px;
    }
    50% {
      left: -90px;
    }
    100% {
      left: 0;
    }
  }
`;

const StyleRightDoor = styled(StyleDoor)<{ toggle?: boolean }>`
  right: 0;
  ${({toggle}) => toggle ? 'animation: doorRight 3s 1s cubic-bezier(0.075, 0.82, 0.165, 1);' : ''};
  @keyframes doorRight {
    0% {
      right: 0px;
    }
    25% {
      right: -90px;
    }
    50% {
      right: -90px;
    }
    100% {
      right: 0;
    }
  }
`;


export {StyleLeftDoor, StyleRightDoor}