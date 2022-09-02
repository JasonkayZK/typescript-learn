import styled from "@emotion/styled"
import ElevatorShaft from "./ElevatorShaft"

const StyleBuild = styled.div`
  width: 350px;
  max-width: 100%;
  min-height: 500px;
  border: 6px solid var(--elevatorBorderColor--);
  overflow: hidden;
  display: flex;
  margin: 3vh auto;
`

const ElevatorBuild = () => {
    return (
        <StyleBuild>
            <ElevatorShaft></ElevatorShaft>
        </StyleBuild>
    )
}

export default ElevatorBuild