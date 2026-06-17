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

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl p-6 w-full max-w-md shadow-lg">
        <h3 className="text-lg font-semibold mb-3">{title}</h3>

        <p className="text-slate-600 mb-6">{description}</p>

        <div className="flex justify-end gap-3">
          <button onClick={onConfirm} disabled={loading} className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 disabled:opacity-50">
            {loading ? 'Loading...' : confirmText}
          </button>

          <button onClick={onClose} className="px-4 py-2 border rounded-lg hover:bg-slate-100">
            {cancelText}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ConfirmModal;
