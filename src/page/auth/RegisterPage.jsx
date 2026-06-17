import AuthLayout from '../../layout/AuthLayout';
import AuthCard from '../../components/auth/AuthCard';
import Button from '../../components/Button';
import { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
import { registerUser } from '../../redux/slice/authSlice';
import toast from 'react-hot-toast';

function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
  } = useForm({
    mode: 'onChange',
  });

  const password = watch('password');

  const onSubmit = async (data) => {
    try {
      await dispatch(registerUser(data)).unwrap();
      toast.success('register success');
      navigate('/auth/login');
    } catch (error) {
      toast.error(error);
    }
  };

  return (
    <AuthLayout>
      <AuthCard>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
          <div>
            <h2 className="text-lg font-semibold">Create Account</h2>
            <p className="text-sm text-gray-500">Please enter your details to sign up.</p>
          </div>

          <div>
            <label className="block text-sm text-gray-600 mb-1">Email Address</label>

            <input
              type="email"
              placeholder="name@company.com"
              className={`w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 ${
                errors.email ? 'border-red-500 focus:ring-red-500' : 'focus:ring-blue-500'
              }`}
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: 'Invalid email format',
                },
              })}
            />

            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
          </div>

          <div>
            <label className="block text-sm text-gray-600 mb-1">Password</label>

            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="••••••••"
                className={`w-full border rounded-md px-3 py-2 pr-12 text-sm focus:outline-none focus:ring-2 ${
                  errors.password ? 'border-red-500 focus:ring-red-500' : 'focus:ring-blue-500'
                }`}
                {...register('password', {
                  required: 'Password is required',
                  minLength: {
                    value: 8,
                    message: 'Password must be at least 8 characters',
                  },
                })}
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>

            {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>}
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block text-sm text-gray-600 mb-1">Confirm Password</label>

            <div className="relative">
              <input
                type={showConfirmPassword ? 'text' : 'password'}
                placeholder="••••••••"
                className={`w-full border rounded-md px-3 py-2 pr-12 text-sm focus:outline-none focus:ring-2 ${
                  errors.confirmPassword ? 'border-red-500 focus:ring-red-500' : 'focus:ring-blue-500'
                }`}
                {...register('confirmPassword', {
                  required: 'Confirm password is required',
                  validate: (value) => value === password || 'Passwords do not match',
                })}
              />

              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
              >
                {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>

            {errors.confirmPassword && <p className="text-red-500 text-xs mt-1">{errors.confirmPassword.message}</p>}
          </div>

          <Button type="submit" disabled={!isValid}>
            Create Account →
          </Button>
        </form>
      </AuthCard>

      <p className="text-sm text-gray-500">
        Already have an account?{' '}
        <Link to="/auth/login">
          <span className="text-blue-500 cursor-pointer">Sign in</span>
        </Link>
      </p>
    </AuthLayout>
  );
}

export default RegisterPage;
