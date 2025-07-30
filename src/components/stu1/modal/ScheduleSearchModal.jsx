import Modal from "./Modal";

export default function ScheduleSearchModal({ isOpen, onClose }) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <Modal.Header>
        <Modal.Title>약속시간 탐색</Modal.Title>
        <Modal.CloseButton />
      </Modal.Header>

      <Modal.Content>
        <Modal.MainTitle>약속시간을 탐색해보세요</Modal.MainTitle>

        <Modal.FormGroup>
          <Modal.Label>약속명</Modal.Label>
          <Modal.Input
            type="text"
            placeholder="약속명을 입력해주세요"
            field="studyName"
          />
        </Modal.FormGroup>

        <Modal.FormGroup>
          <Modal.Label>참여자</Modal.Label>
          <Modal.SearchInput
            placeholder="친구의 플랜팔 닉네임을 입력해주세요"
            field="nickname"
          />
        </Modal.FormGroup>

        <Modal.FormGroup>
          <Modal.Label>약속 가능 시간</Modal.Label>
          <Modal.DateTimeRow>
            <Modal.DateInput field="startDate" />
            <Modal.Separator>-</Modal.Separator>
            <Modal.DateInput field="endDate" />
          </Modal.DateTimeRow>
          <Modal.DateTimeRow>
            <Modal.TimeInput field="startTime" />
            <Modal.Separator>-</Modal.Separator>
            <Modal.TimeInput field="endTime" />
          </Modal.DateTimeRow>
        </Modal.FormGroup>

        <Modal.FormGroup>
          <Modal.Label>약속 길이</Modal.Label>
          <Modal.DurationWrapper>
            <Modal.NumberInput field="duration" />
            <Modal.Unit>시간</Modal.Unit>
          </Modal.DurationWrapper>
        </Modal.FormGroup>

        <Modal.SubmitButton>학습시간 탐색하기</Modal.SubmitButton>
      </Modal.Content>
    </Modal>
  );
} 