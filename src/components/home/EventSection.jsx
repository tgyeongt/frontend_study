import styled from "styled-components";
import Event from "./Event";
import img_1 from "@images/img_1.png";
import img_2 from "@images/img_2.png";
import img_3 from "@images/img_3.png";

export default function EventSection() {
  return(
    <EventWrapper>
      <Event image={img_1} description={"이젠 추억이죠?"} title={"단체 OT"}/>
      <Event image={img_2} description={"상상을 현실로"} title={"아이디어톤"}/>
      <Event image={img_3} description={"우리들의 이야기"} title={"멋사 MT"}/>
    </EventWrapper>
  )
}

const EventWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 30px;

  @media screen and (max-width: 767px) {
    flex-direction: column;
  }

` 