import { AlertTriangle } from 'lucide-react';

function ConfirmDeleteModal({ isOpen, onClose, onConfirm, loading }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl p-6 w-full max-w-md shadow-lg">
        <div className="flex items-center gap-3 mb-4">
          <AlertTriangle className="text-red-500" />
          <h3 className="text-lg font-semibold">Delete Link</h3>
        </div>

        <p className="text-slate-600 mb-6">Are you sure you want to delete this link? This action cannot be undone.</p>

        <div className="flex justify-end gap-3">
          <button
            onClick={onConfirm}
            disabled={loading}
            className="px-4 cursor-pointer py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 disabled:opacity-50"
          >
            {loading ? 'Deleting...' : 'Delete'}
          </button>

          <button onClick={onClose} className="px-4 cursor-pointer py-2 border rounded-lg hover:bg-slate-100">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default ConfirmDeleteModal;
