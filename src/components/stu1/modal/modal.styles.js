import styled from 'styled-components';

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ModalContainer = styled.div`
  background: white;
  border-radius: 12px;
  width: 400px;
  max-width: 90vw;
  max-height: 90vh;
  overflow-y: auto;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 24px 0 24px;
`;

export const ModalTitle = styled.h3`
  font-size: 16px;
  font-weight: 600;
  color: #17171B;
  height: 16px;
  padding: 10px 18px;
  margin: 0;
  border-radius: 100px;
  background: #D9D9D9;
  border-radius: 16px;
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 40px;
  cursor: pointer;
  color: #17171B;
  padding: 0;
  width: 30px;
  height: 30px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    color: #333;
  }
`;

export const ModalContent = styled.div`
  padding: 24px;
`;

export const MainTitle = styled.h2`
  font-size: 20px;
  font-weight: 600;
  color: #333;
  margin: 0 0 24px 0;
`;

export const FormGroup = styled.div`
  margin-bottom: 20px;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 8px;
  color: #17171b;
  font-family: Pretendard;
  font-size: 15px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const InputName = styled.input`
  width: 100%;
  padding: 12px 0px;
  border: none;
  border-radius: 8px;
  font-size: 14px;
  box-sizing: border-box;

  &:focus {
    outline: none;
    border-color: #007bff;
  }

  &::placeholder {
    color: #bcbcbc;
    font-family: Pretendard;
    font-size: 20px;
    font-style: normal;
    font-weight: 800;
    line-height: normal;
  }
`;

export const SearchInputWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const SearchInput = styled.input`
  width: 88%;
  height: 32px;
  padding: 17px 20px;
  border: 1px solid #bcbcbc;
  border-radius: 100px;
  font-size: 14px;
  background: #f6f6f6;
  box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.1  ) inset;
  box-sizing: border-box;
  &:focus {
    outline: none;
    border-color: #007bff;
  }

  &::placeholder {
    color: #bcbcbc;
    font-family: Pretendard;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;

export const SearchIcon = styled.div`
  display: flex;
  width: 32px;
  height: 32px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
  border-radius: 100px;
  background: #17171b;
`;

export const DateTimeRow = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 12px;
`;

export const DateInput = styled.input`
  flex: 1;
  padding: 12px 16px;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 14px;

  &:focus {
    outline: none;
    border-color: #007bff;
  }
`;

export const TimeInput = styled(DateInput)``;

export const Separator = styled.span`
  color: #666;
  font-weight: 500;
`;

export const DurationWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const DurationInput = styled.input`
  width: 80px;
  padding: 12px 16px;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 14px;
  text-align: center;

  &:focus {
    outline: none;
    border-color: #007bff;
  }
`;

export const DurationUnit = styled.span`
  font-size: 14px;
  color: #666;
`;

export const SubmitButton = styled.button`
  width: 100%;
  background-color: #333;
  color: white;
  padding: 16px 24px;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  margin-top: 8px;

  &:hover {
    background-color: #222;
  }

  &:active {
    transform: translateY(1px);
  }
`; 