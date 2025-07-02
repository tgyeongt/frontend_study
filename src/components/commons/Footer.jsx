import styled from "styled-components";

export default function Footer() {
  return(
    <Container>
      <FooterText>© 2025 SKU LIKELION. All rights reserved.</FooterText>
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  height: 60px;
  text-align: center;
  margin-top: 32px;
`

const FooterText = styled.p`
  color: #B6B6B6;
  font-size: 16px;
  font-weight: 400;
`