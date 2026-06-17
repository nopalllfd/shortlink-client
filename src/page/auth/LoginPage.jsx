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
      await dispatch(loginUser(data)).unwrap();

      console.log('Login success');
      navigate('/dashboard');
    } catch (error) {
      toast.error(error);
    }
  };

  return (
    <AuthLayout>
      <AuthCard>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
          <div>
            <h2 className="text-lg font-semibold">Welcome Back</h2>
            <p className="text-sm text-gray-500">Please enter your details to sign in.</p>
          </div>

          <div>
            <label className="text-sm text-gray-600 mb-1 block">Email Address</label>

            <input
              type="email"
              placeholder="name@company.com"
              className={`border rounded-md px-3 py-2 text-sm w-full focus:outline-none focus:ring-2 ${
                errors.email ? 'border-red-500 focus:ring-red-500' : 'focus:ring-blue-500'
              }`}
              {...register('email', {
                required: 'Email wajib diisi',
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: 'Format email tidak valid',
                },
              })}
            />

            {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email.message}</p>}
          </div>

          <div>
            <div className="flex justify-between text-sm mb-1">
              <label className="text-gray-600">Password</label>
              <span className="text-blue-500 cursor-pointer">Forgot password?</span>
            </div>

            <div className="relative">
              <input
                type={show ? 'text' : 'password'}
                placeholder="••••••••"
                className={`border rounded-md px-3 py-2 pr-12 text-sm w-full focus:outline-none focus:ring-2 ${
                  errors.password ? 'border-red-500 focus:ring-red-500' : 'focus:ring-blue-500'
                }`}
                {...register('password', {
                  required: 'Password wajib diisi',
                  minLength: {
                    value: 8,
                    message: 'Password minimal 8 karakter',
                  },
                })}
              />

              <button type="button" onClick={() => setShow(!show)} className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400">
                {show ? <Eye size={18} /> : <EyeOff size={18} />}
              </button>
            </div>

            {errors.password && <p className="text-xs text-red-500 mt-1">{errors.password.message}</p>}
          </div>

          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Loading...' : 'Log In →'}
          </Button>

          <div className="text-center text-xs text-gray-400">OR CONTINUE WITH</div>

          <button type="button" className="border rounded-md py-2 text-sm hover:bg-gray-50">
            Sign in with Google
          </button>
        </form>
      </AuthCard>

      <p className="text-sm text-gray-500">
        Don’t have an account?{' '}
        <Link to="/auth/register">
          <span className="text-blue-500 cursor-pointer">Sign up</span>
        </Link>
      </p>
    </AuthLayout>
  );
}

export default LoginPage;
