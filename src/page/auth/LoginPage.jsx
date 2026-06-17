import AuthLayout from '../../layout/AuthLayout';
import AuthCard from '../../components/auth/AuthCard';
import InputField from '../../components/InputField';
import Button from '../../components/Button';
import { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';

function LoginPage() {
  const [show, setShow] = useState(false);

  return (
    <AuthLayout>
      <AuthCard>
        <div className="flex flex-col gap-4">
          <div>
            <h2 className="text-lg font-semibold">Welcome Back</h2>
            <p className="text-sm text-gray-500">Please enter your details to sign in.</p>
          </div>

          <InputField label="Email Address" placeholder="name@company.com" />

          {/* Password */}
          <div>
            <div className="flex justify-between text-sm mb-1">
              <label className="text-gray-600">Password</label>
              <span className="text-blue-500 cursor-pointer">Forgot password?</span>
            </div>

            <div className="relative">
              <input
                type={show ? 'text' : 'password'}
                placeholder="••••••••"
                className="border rounded-md px-3 py-2 pr-12 text-sm w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              {/* Toggle */}
              <button type="button" onClick={() => setShow(!show)} className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400">
                {show ? <Eye size={18} /> : <EyeOff size={18} />}
              </button>
            </div>
          </div>

          <Button>Log In →</Button>

          <div className="text-center text-xs text-gray-400">OR CONTINUE WITH</div>

          <button className="border rounded-md py-2 text-sm hover:bg-gray-50">Sign in with Google</button>
        </div>
      </AuthCard>

      <p className="text-sm text-gray-500">
        Don’t have an account? <span className="text-blue-500 cursor-pointer">Sign up</span>
      </p>
    </AuthLayout>
  );
}

export default LoginPage;
