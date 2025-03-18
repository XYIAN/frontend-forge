"use client";

import { useState } from "react";
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";
import "@/styles/_phantomModal.scss";

export const PhantomModal = () => {
  const [visible, setVisible] = useState(false);

  return (
    <div className="phantom-modal-container">
      <Button
        label="Summon the Phantom"
        className="p-button-rounded p-button-outlined summon-btn"
        onClick={() => setVisible(true)}
      />

      <Dialog
        visible={visible}
        onHide={() => setVisible(false)}
        className="phantom-modal"
        dismissableMask
        draggable={false}
      >
        <div className="modal-content">
          <h2 className="modal-title">👻 The Phantom Appears...</h2>
          <p className="modal-text">A spectral presence whispers forgotten secrets...</p>
          <Button
            label="Banish the Phantom"
            className="p-button-rounded close-btn"
            onClick={() => setVisible(false)}
          />
        </div>
      </Dialog>
    </div>
  );
};
