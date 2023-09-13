import { RootState } from "../../store";

const idModalSelector = (state: RootState) => state.modal.idModal;
const isOpenSelector = (state: RootState) => state.modal.isOpen;
const idRowSelector = (state: RootState) => state.modal.idRow;

export const modalSelectors = {
  idModalSelector,
  isOpenSelector,
  idRowSelector,
};
