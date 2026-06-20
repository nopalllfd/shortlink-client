import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Eye, EyeOff } from 'lucide-react';
import { useDispatch } from 'react-redux';

import AuthLayout from '../../layout/AuthLayout';
import AuthCard from '../../components/auth/AuthCard';
import Button from '../../components/Button';

import { loginUser } from '../../redux/slice/authSlice';
import { Link, useNavigate } from 'react-router';
import toast from 'react-hot-toast';

function LoginPage() {
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onChange',
  });

  const onSubmit = async (data) => {
    try {
      setLoading(true);
      await dispatch(loginUser(data)).unwrap();

      console.log('Login success');
      setLoading(false);
      navigate('/dashboard');
    } catch (error) {
      setLoading(false);
      toast.error(error);
    }
  };

  return (
    <AuthLayout>
      <AuthCard>
        {loading && (
          <div className="absolute inset-0 bg-white/70 flex items-center justify-center z-50">
            <FourSquare color="#809ccc" size="medium" />
          </div>
        )}
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
          {/* Logo */}
          <div className="flex flex-col items-center text-center mb-2">
            <img src="/logo.webp" alt="BlinkURL" className="w-32 mb-4" />

            <h2 className="text-2xl font-bold text-slate-900">Welcome Back</h2>

            <p className="mt-1 text-sm text-slate-500">Sign in to your BlinkURL account</p>
          </div>
          {/* Email */}
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">Email Address</label>

            <input
              type="email"
              placeholder="name@company.com"
              className={`
          w-full
          rounded-2xl
          border
          px-4
          py-3
          text-sm
          outline-none
          transition-all

          ${errors.email ? 'border-red-300 focus:border-red-500' : 'border-slate-200 focus:border-blue-500'}
        `}
              {...register('email', {
                required: 'Email wajib diisi',
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: 'Format email tidak valid',
                },
              })}
            />

            {errors.email && <p className="mt-2 text-xs text-red-500">{errors.email.message}</p>}
          </div>

          {/* Password */}
          <div>
            <div className="mb-2 flex items-center justify-between">
              <label className="text-sm font-medium text-slate-700">Password</label>

              <button type="button" className="text-sm text-blue-600 hover:text-blue-700">
                Forgot password?
              </button>
            </div>

            <div className="relative">
              <input
                type={show ? 'text' : 'password'}
                placeholder="••••••••"
                className={`
            w-full
            rounded-2xl
            border
            px-4
            py-3
            pr-12
            text-sm
            outline-none
            transition-all

            ${errors.password ? 'border-red-300 focus:border-red-500' : 'border-slate-200 focus:border-blue-500'}
          `}
                {...register('password', {
                  required: 'Password wajib diisi',
                  minLength: {
                    value: 8,
                    message: 'Password minimal 8 karakter',
                  },
                })}
              />

              <button
                type="button"
                onClick={() => setShow(!show)}
                className="
            absolute
            right-4
            top-1/2
            -translate-y-1/2
            text-slate-400
            hover:text-slate-600
          "
              >
                {show ? <Eye size={18} /> : <EyeOff size={18} />}
              </button>
            </div>

            {errors.password && <p className="mt-2 text-xs text-red-500">{errors.password.message}</p>}
          </div>

          {/* Login */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="
        mt-2
        rounded-2xl
        bg-blue-600
        py-3.5
        font-semibold
        text-white
        transition-all
        hover:bg-blue-700
        hover:shadow-lg
        disabled:opacity-50
      "
          >
            {isSubmitting ? 'Signing In...' : 'Sign In'}
          </button>

          {/* Divider */}
          <div className="relative my-2">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-slate-200" />
            </div>

            <div className="relative flex justify-center">
              <span className="bg-white px-4 text-xs uppercase tracking-[0.2em] text-slate-400">Or Continue With</span>
            </div>
          </div>

          {/* Google */}
          <button
            type="button"
            className="
        rounded-2xl
        border
        border-slate-200
        py-3
        font-medium
        text-slate-700
        transition-all
        hover:bg-slate-50
      "
          >
            Sign in with Google
          </button>
        </form>
      </AuthCard>
      <p className="mt-8 text-center text-sm text-slate-500">
        Don't have an account?{' '}
        <Link to="/auth/register" className="font-semibold text-blue-600 hover:text-blue-700">
          Create Account
        </Link>
      </p>
    </AuthLayout>
  );
}

export default LoginPage;
