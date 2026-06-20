import { createPortal } from 'react-dom';

function ConfirmModal({
  isOpen,
  onClose,
  onConfirm,
  loading,
  title = 'Confirm Action',
  description = 'Are you sure?',
  confirmText = 'Confirm',
  cancelText = 'Cancel',
}) {
  if (!isOpen) return null;

  return createPortal(
    <div
      onClick={onClose}
      className="
        fixed
        inset-0
        z-[9999]
        flex
        items-center
        justify-center
        bg-slate-900/20
        backdrop-blur-sm
        p-4
      "
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="
          w-full
          max-w-md
          rounded-3xl
          border
          border-slate-200
          bg-white
          p-6
          shadow-[0_30px_80px_-20px_rgba(15,23,42,0.2)]
        "
      >
        <h3 className="text-xl font-bold text-slate-900">{title}</h3>

        <p className="mt-3 text-slate-500 leading-7">{description}</p>

        <div className="mt-8 flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
          <button
            onClick={onClose}
            className="
              rounded-2xl
              border
              cursor-pointer
              border-slate-200
              px-5
              py-3
              font-medium
              text-slate-700
              hover:bg-slate-50
            "
          >
            {cancelText}
          </button>

          <button
            onClick={onConfirm}
            disabled={loading}
            className="
              rounded-2xl
              bg-red-600
              px-5
cursor-pointer
              py-3
              font-semibold
              text-white
              hover:bg-red-700
              disabled:opacity-50
            "
          >
            {loading ? 'Processing...' : confirmText}
          </button>
        </div>
      </div>
    </div>,
    document.body,
  );
}

export default ConfirmModal;
