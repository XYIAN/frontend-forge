"use client";

import { useState } from "react";
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";
import "@/styles/_phantomModal.scss";

export const PhantomModal = () => {
  const [visible, setVisible] = useState(false);
  const [summoning, setSummoning] = useState(false);

  const handleSummon = () => {
    setSummoning(true);
    setTimeout(() => {
      setSummoning(false);
      setVisible(true);
    }, 1000); // 1-second chaotic effect before modal appears
  };

  const handleDismiss = () => {
    setVisible(false);
  };

  return (
    <div className={`phantom-modal-container ${summoning ? "summoning" : ""}`}>
      <Button
        label="Summon the Phantom"
        className="p-button-rounded p-button-outlined summon-btn"
        onClick={handleSummon}
      />

      <Dialog
        visible={visible}
        onHide={handleDismiss}
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
            onClick={handleDismiss}
          />
        </div>
      </Dialog>
    </div>
  );
};
