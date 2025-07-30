import React, { useState } from 'react';
import VectorIcon from '@images/Vector.svg';
import {
  ModalOverlay,
  ModalContainer,
  ModalHeader,
  ModalTitle,
  CloseButton,
  ModalContent,
  MainTitle,
  FormGroup,
  Label,
  InputName,
  SearchInputWrapper,
  SearchInput,
  SearchIcon,
  DateTimeRow,
  DateInput,
  TimeInput,
  Separator,
  DurationWrapper,
  DurationInput,
  DurationUnit,
  SubmitButton,
} from './modal.styles';

export default function Modal({ isOpen, onClose, children }) {
  const initialFormData = {
    studyName: '',
    nickname: '',
    startDate: '',
    endDate: '',
    startTime: '',
    endTime: '',
    duration: 0,
  };

  const [formData, setFormData] = useState(initialFormData);

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = () => {
    console.log('약속 시간 탐색 데이터:', formData);
    alert('약속 시간 탐색이 완료되었습니다!');
    handleClose();
  };

  const handleClose = () => {
    setFormData(initialFormData);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <ModalOverlay onClick={handleClose}>
      <ModalContainer onClick={(e) => e.stopPropagation()}>
        {React.Children.map(children, child =>
          React.isValidElement(child)
            ? React.cloneElement(child, { 
                formData, 
                handleInputChange, 
                handleSubmit, 
                onClose: handleClose 
              })
            : child
        )}
      </ModalContainer>
    </ModalOverlay>
  );
}

function Header({ children, onClose }) {
  return (
    <ModalHeader>
      {React.Children.map(children, child =>
        React.isValidElement(child)
          ? React.cloneElement(child, { onClose })
          : child
      )}
    </ModalHeader>
  );
}

function Title({ children }) {
  return <ModalTitle>{children}</ModalTitle>;
}

function CloseBtn({ onClose }) {
  return <CloseButton onClick={onClose}>×</CloseButton>;
}

function Content({ children, formData, handleInputChange, handleSubmit }) {
  return (
    <ModalContent>
      {React.Children.map(children, child =>
        React.isValidElement(child)
          ? React.cloneElement(child, { formData, handleInputChange, handleSubmit })
          : child
      )}
    </ModalContent>
  );
}

function MainTitleComponent({ children }) {
  return <MainTitle>{children}</MainTitle>;
}

function FormGroupComponent({ children, formData, handleInputChange, handleSubmit }) {
  return (
    <FormGroup>
      {React.Children.map(children, child =>
        React.isValidElement(child)
          ? React.cloneElement(child, { formData, handleInputChange, handleSubmit })
          : child
      )}
    </FormGroup>
  );
}

function LabelComponent({ children }) {
  return <Label>{children}</Label>;
}

function Input({ type = "text", placeholder, field, formData, handleInputChange }) {
  return (
    <InputName
      type={type}
      placeholder={placeholder}
      value={formData?.[field] || ''}
      onChange={(e) => handleInputChange?.(field, e.target.value)}
    />
  );
}

function SearchInputComponent({ placeholder, field, formData, handleInputChange }) {
  return (
    <SearchInputWrapper>
      <SearchInput
        type="text"
        placeholder={placeholder}
        value={formData?.[field] || ''}
        onChange={(e) => handleInputChange?.(field, e.target.value)}
      />
      <SearchIcon>
        <img src={VectorIcon} alt="search" />
      </SearchIcon>
    </SearchInputWrapper>
  );
}

function DateTimeRowComponent({ children, formData, handleInputChange }) {
  return (
    <DateTimeRow>
      {React.Children.map(children, child =>
        React.isValidElement(child)
          ? React.cloneElement(child, { formData, handleInputChange })
          : child
      )}
    </DateTimeRow>
  );
}

function DateInputComponent({ placeholder, field, formData, handleInputChange }) {
  return (
    <DateInput
      type="date"
      placeholder={placeholder}
      value={formData?.[field] || ''}
      onChange={(e) => handleInputChange?.(field, e.target.value)}
    />
  );
}

function TimeInputComponent({ placeholder, field, formData, handleInputChange }) {
  return (
    <TimeInput
      type="time"
      placeholder={placeholder}
      value={formData?.[field] || ''}
      onChange={(e) => handleInputChange?.(field, e.target.value)}
    />
  );
}

function SeparatorComponent({ children = "-" }) {
  return <Separator>{children}</Separator>;
}

function DurationWrapperComponent({ children, formData, handleInputChange }) {
  return (
    <DurationWrapper>
      {React.Children.map(children, child =>
        React.isValidElement(child)
          ? React.cloneElement(child, { formData, handleInputChange })
          : child
      )}
    </DurationWrapper>
  );
}

function NumberInput({ field, formData, handleInputChange }) {
  return (
    <DurationInput
      type="number"
      min="0"
      max="24"
      value={formData?.[field] || 0}
      onChange={(e) =>
        handleInputChange?.(field, parseInt(e.target.value) || 0)
      }
    />
  );
}

function Unit({ children }) {
  return <DurationUnit>{children}</DurationUnit>;
}

function SubmitBtn({ children, handleSubmit }) {
  return <SubmitButton onClick={handleSubmit}>{children}</SubmitButton>;
}

Modal.Header = Header;
Modal.Title = Title;
Modal.CloseButton = CloseBtn;
Modal.Content = Content;
Modal.MainTitle = MainTitleComponent;
Modal.FormGroup = FormGroupComponent;
Modal.Label = LabelComponent;
Modal.Input = Input;
Modal.SearchInput = SearchInputComponent;
Modal.DateTimeRow = DateTimeRowComponent;
Modal.DateInput = DateInputComponent;
Modal.TimeInput = TimeInputComponent;
Modal.Separator = SeparatorComponent;
Modal.DurationWrapper = DurationWrapperComponent;
Modal.NumberInput = NumberInput;
Modal.Unit = Unit;
Modal.SubmitButton = SubmitBtn;
