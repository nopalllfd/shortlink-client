import { ArrowLeft, Eye, Link2, QrCode, Zap } from 'lucide-react';
import { Link } from 'react-router';

function CreateLink() {
  return (
    <div className="min-h-screen bg-gray-50 px-6 py-8">
      <div className="mx-auto max-w-3xl">
        {/* Back */}
        <Link to="/dashboard" className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-700">
          <ArrowLeft size={16} />
          Back to Dashboard
        </Link>

        {/* Header */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-900">Create New Short Link</h1>
          <p className="mt-2 text-gray-500">Transform your long URLs into clean, manageable assets.</p>
        </div>

        {/* Form Card */}
        <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
          <form className="space-y-6">
            {/* Destination URL */}
            <div>
              <label className="mb-2 block text-xs font-semibold uppercase tracking-wide text-gray-700">
                Destination URL <span className="text-red-500">*</span>
              </label>

              <div className="flex items-center rounded-lg border border-gray-200 bg-gray-50 px-3">
                <Link2 size={16} className="text-gray-400" />
                <input type="url" placeholder="https://example.com/your-long-url-here" className="h-12 w-full bg-transparent px-3 outline-none" />
              </div>

              <p className="mt-2 text-xs text-gray-400">Ensure your URL starts with http:// or https://</p>
            </div>

            {/* Custom Slug */}
            <div>
              <label className="mb-2 block text-xs font-semibold uppercase tracking-wide text-gray-700">Custom Slug (Optional)</label>

              <div className="flex overflow-hidden rounded-lg border border-gray-200">
                <div className="flex items-center bg-gray-100 px-4 text-sm text-gray-500">short.link/</div>

                <input type="text" placeholder="my-custom-slug" className="h-12 flex-1 px-4 outline-none" />
              </div>

              <p className="mt-2 text-xs text-gray-400">Leave blank to generate a random unique identifier.</p>
            </div>

            {/* Preview */}
            <div className="rounded-xl border border-blue-200 bg-blue-50 p-4">
              <div className="mb-1 flex items-center gap-2 text-xs font-semibold uppercase text-blue-600">
                <Eye size={14} />
                Live Preview
              </div>

              <p className="text-sm text-gray-700">
                Your short link will be:
                <span className="ml-1 font-medium text-blue-600">https://short.link/my-custom-slug</span>
              </p>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-4">
              <button
                type="submit"
                className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 font-medium text-white shadow-md transition hover:bg-blue-700"
              >
                Create Link
                <Zap size={16} />
              </button>

              <button type="button" className="font-medium text-gray-500 hover:text-gray-700">
                Cancel
              </button>
            </div>
          </form>
        </div>

        {/* Features */}
        <div className="mt-10 grid gap-8 md:grid-cols-2">
          <div className="flex gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-100">📈</div>

            <div>
              <h3 className="font-semibold text-gray-900">Real-time Analytics</h3>
              <p className="text-sm text-gray-500">Track every click, geographical location, and referral source instantly.</p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-indigo-100">
              <QrCode size={20} className="text-indigo-600" />
            </div>

            <div>
              <h3 className="font-semibold text-gray-900">Auto-generated QR</h3>
              <p className="text-sm text-gray-500">Every link automatically creates a high-resolution QR code for print.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateLink;
