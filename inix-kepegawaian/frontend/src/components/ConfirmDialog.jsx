import React from 'react';

export default function ConfirmDialog({ isOpen, title, message, onConfirm, onCancel }) {
  if (!isOpen) return null;

  return (
    <div className="modal-backdrop" role="dialog" aria-modal="true" aria-labelledby="dialog-title">
      <div className="modal-content">
        <h3 id="dialog-title" className="modal-title">{title || 'Konfirmasi Tindakan'}</h3>
        <p className="modal-message">{message || 'Apakah Anda yakin ingin melanjutkan tindakan ini?'}</p>

        <div className="modal-actions">
          <button
            type="button"
            className="btn-secondary"
            onClick={onCancel}
            data-testid="btn-cancel-delete"
          >
            Batal
          </button>
          <button
            type="button"
            className="btn-danger"
            onClick={onConfirm}
            data-testid="btn-confirm-delete"
          >
            Ya, Lanjutkan
          </button>
        </div>
      </div>
    </div>
  );
}
