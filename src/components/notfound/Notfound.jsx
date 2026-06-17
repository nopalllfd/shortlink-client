import { Link } from 'react-router';
import { ArrowLeft, BarChart3, Link2, Boxes, Unlink } from 'lucide-react';

function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-50 px-6">
      <div className="w-full max-w-3xl text-center">
        {/* Illustration */}
        <div className="relative mx-auto mb-8 flex h-28 w-28 items-center justify-center rounded-full bg-slate-100">
          <Unlink size={42} className="text-slate-300" />

          <div className="absolute right-3 top-0 flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 shadow-lg">
            <Boxes size={14} className="text-white" />
          </div>
        </div>

        {/* Content */}
        <h1 className="text-5xl font-bold text-blue-600">404</h1>

        <h2 className="mt-3 text-3xl font-semibold text-slate-900">Page Not Found</h2>

        <p className="mx-auto mt-4 max-w-md text-slate-500">
          The page you're looking for doesn't exist. It may have been moved, deleted, or the link might be broken.
        </p>

        {/* Actions */}
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link
            to="/dashboard"
            className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 font-medium text-white shadow-md transition hover:bg-blue-700"
          >
            <ArrowLeft size={18} />
            Go to Dashboard
          </Link>

          <a
            href="mailto:support@example.com"
            className="rounded-lg border border-slate-200 bg-white px-6 py-3 font-medium text-blue-600 transition hover:bg-slate-50"
          >
            Report an Issue
          </a>
        </div>

        {/* Feature Cards */}
        <div className="mt-16 grid gap-4 md:grid-cols-3">
          <div className="rounded-xl border border-slate-200 bg-white p-5 text-left shadow-sm">
            <div className="mb-4 flex h-8 w-8 items-center justify-center rounded-md bg-blue-50">
              <BarChart3 size={16} className="text-blue-600" />
            </div>

            <h3 className="font-semibold text-slate-900">Check Analytics</h3>

            <p className="mt-2 text-sm text-slate-500">Track your active links and traffic sources in real-time.</p>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white p-5 text-left shadow-sm">
            <div className="mb-4 flex h-8 w-8 items-center justify-center rounded-md bg-blue-50">
              <Link2 size={16} className="text-blue-600" />
            </div>

            <h3 className="font-semibold text-slate-900">New Short Link</h3>

            <p className="mt-2 text-sm text-slate-500">Create a brand new shortened URL in seconds.</p>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white p-5 text-left shadow-sm">
            <div className="mb-4 flex h-8 w-8 items-center justify-center rounded-md bg-blue-50">
              <Boxes size={16} className="text-blue-600" />
            </div>

            <h3 className="font-semibold text-slate-900">Developer API</h3>

            <p className="mt-2 text-sm text-slate-500">Integrate our link infrastructure into your apps.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
