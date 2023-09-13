import { type PayloadAction, createSlice } from "@reduxjs/toolkit";

import type { IModalState } from "./types";

const initialState: IModalState = {
  idModal: "",
  isOpen: false,
  idRow: undefined,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    setModalState: (state, { payload }: PayloadAction<IModalState>) => {
      state.idModal = payload.idModal;
      state.isOpen = payload.isOpen;
      state.idRow = payload.idRow;
    },
    closeModal(state) {
      state.idModal = "";
      state.idRow = undefined;
    },
  },
});

const { setModalState, closeModal } = modalSlice.actions;

export { setModalState, closeModal, modalSlice };
