import Stu4Modal from '@components/stu4/Stu4Modal';
export default function Stu4ModalPage({ onClose }) {
  return (
    <Stu4Modal onClose={onClose}>
      <Stu4Modal.Header>
        <Stu4Modal.Title />
        <Stu4Modal.CancelBtn onClose={onClose} />
      </Stu4Modal.Header>
      <Stu4Modal.HeaderText />
      <Stu4Modal.Body>
        <Stu4Modal.PromiseName />
        <Stu4Modal.Participant />
        <Stu4Modal.Time>
          <Stu4Modal.Date />
          <Stu4Modal.Hour />
        </Stu4Modal.Time>
        <Stu4Modal.Lengtn />
      </Stu4Modal.Body>
      <Stu4Modal.FindBtn />
    </Stu4Modal>
  );
}
