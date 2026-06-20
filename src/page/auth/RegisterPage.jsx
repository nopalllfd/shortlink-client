import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Eye, EyeOff } from 'lucide-react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router';
import toast from 'react-hot-toast';

import AuthLayout from '../../layout/AuthLayout';
import AuthCard from '../../components/auth/AuthCard';

import { registerUser } from '../../redux/slice/authSlice';

function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm({
    mode: 'onChange',
    defaultValues: {
      email: '',
      password: '',
      confirmPassword: '',
    },
  });

  const password = watch('password');

  const onSubmit = async (data) => {
    try {
      setLoading(true);

      await dispatch(
        registerUser({
          email: data.email,
          password: data.password,
        }),
      ).unwrap();

      toast.success('Account created successfully');
      setLoading(false);
      navigate('/auth/login');
    } catch (error) {
      setLoading(false);
      toast.error(error || 'Register failed');
    }
  };

  return (
    <AuthLayout>
      <AuthCard>
        {/* Loading Overlay */}
        {loading && (
          <div className="absolute inset-0 bg-white/70 flex items-center justify-center z-50">
            <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" />
          </div>
        )}

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
          <div className="flex flex-col items-center text-center mb-2">
            <img src="/logo.webp" alt="BlinkURL" className="w-32 mb-4" />

            <h2 className="text-2xl font-bold text-slate-900">Create Account</h2>
            <p className="mt-1 text-sm text-slate-500">Sign up to start using BlinkURL</p>
          </div>

          {/* Email */}
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">Email Address</label>

            <input
              type="email"
              placeholder="name@company.com"
              className={`
                w-full rounded-2xl border px-4 py-3 text-sm outline-none transition-all
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
            <label className="mb-2 block text-sm font-medium text-slate-700">Password</label>

            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="••••••••"
                className={`
                  w-full rounded-2xl border px-4 py-3 pr-12 text-sm outline-none transition-all
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
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
              >
                {showPassword ? <Eye size={18} /> : <EyeOff size={18} />}
              </button>
            </div>

            {errors.password && <p className="mt-2 text-xs text-red-500">{errors.password.message}</p>}
          </div>

          {/* Confirm Password */}
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">Confirm Password</label>

            <div className="relative">
              <input
                type={showConfirmPassword ? 'text' : 'password'}
                placeholder="••••••••"
                className={`
                  w-full rounded-2xl border px-4 py-3 pr-12 text-sm outline-none transition-all
                  ${errors.confirmPassword ? 'border-red-300 focus:border-red-500' : 'border-slate-200 focus:border-blue-500'}
                `}
                {...register('confirmPassword', {
                  required: 'Confirm password wajib diisi',
                  validate: (value) => value === password || 'Password tidak sama',
                })}
              />

              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
              >
                {showConfirmPassword ? <Eye size={18} /> : <EyeOff size={18} />}
              </button>
            </div>

            {errors.confirmPassword && <p className="mt-2 text-xs text-red-500">{errors.confirmPassword.message}</p>}
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={isSubmitting || loading}
            className="
              mt-2 rounded-2xl bg-blue-600 py-3.5 font-semibold text-white
              transition-all hover:bg-blue-700 hover:shadow-lg
              disabled:opacity-50
            "
          >
            {isSubmitting || loading ? 'Creating Account...' : 'Create Account'}
          </button>
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

      {/* Footer */}
      <p className="mt-8 text-center text-sm text-slate-500">
        Already have an account?{' '}
        <Link to="/auth/login" className="font-semibold text-blue-600 hover:text-blue-700">
          Sign In
        </Link>
      </p>
    </AuthLayout>
  );
}

export default RegisterPage;
