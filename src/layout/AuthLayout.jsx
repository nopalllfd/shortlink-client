export default function AuthLayout({ children }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="flex flex-col items-center gap-6 w-full">
        <h1 className="text-xl font-semibold">ShortLink</h1>

        {children}
      </div>
    </div>
  );
}
