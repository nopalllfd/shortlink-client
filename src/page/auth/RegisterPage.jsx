import { Eye, EyeOff } from 'lucide-react';
import { useState } from 'react';

export default function InputField({ label, type = 'text', placeholder }) {
  const [show, setShow] = useState(false);

  const isPassword = type === 'password';

  return (
    <div className="flex flex-col gap-1">
      <label className="text-sm text-gray-600">{label}</label>

      <div className="relative">
        <input
          type={show ? 'text' : 'password'}
          placeholder={placeholder}
          className="border rounded-md px-3 py-2 text-sm w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {isPassword && (
          <button type="button" onClick={() => setShow(!show)} className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400">
            {show ? <Eye size={18} /> : <EyeOff size={18} />}
          </button>
        )}
      </div>
    </div>
  );
}
