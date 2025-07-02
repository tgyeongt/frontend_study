import styled from "styled-components";

export default function Event({ image, description, title }) {
  return(
    <EventDiv background={image}>
      <Text_20>{description}</Text_20>
      <Text_32>{title}</Text_32>
    </EventDiv>
  )
}

const EventDiv = styled.div`
  width: 370px;
  height: 277px;
  box-sizing: border-box;
  border-radius: 30px;
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  background-image: 
    linear-gradient(179deg, rgba(0, 0, 0, 0.00) 1.07%, rgba(0, 0, 0, 0.00) 27.99%, rgba(0, 0, 0, 0.00) 57.35%, #1A1A1A 98.95%),
    url(${props => props.background});
  background-position: center;
`

const Text_20 = styled.p`
  color: #FFF;
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 8px;
`

const Text_32 = styled.p`
  color: #FFF;
  font-size: 32px;
  font-weight: 700;
`