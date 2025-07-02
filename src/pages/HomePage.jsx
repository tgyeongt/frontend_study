import styled from 'styled-components';
import EventSection from "@components/home/EventSection"

export default function HomePage() {

  return (
    <>
      <MainSection>
        <MainText>안녕하세요,</MainText>
        <MainText>멋쟁이사자처럼입니다.</MainText>
        <Button>멋사 바로가기</Button>
      </MainSection>
      <EventSection />
    </>
  )
}

const MainSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 150px;
`

const MainText = styled.p`
  color: #1C1B1A;
  font-size: 48px;
  font-weight: 700;
  margin-bottom: 10px;
`

const Button = styled.button`
  display: flex;
  padding: 10px 30px;
  border-radius: 30px;
  background: #1C1B1A;
  color: #FFF;
  font-size: 16px;
  font-weight: 700;
  margin-top: 20px;
  margin-bottom: 70px;
  border: none;
  outline: none;
  cursor: pointer;
`