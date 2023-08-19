import { Link } from 'react-router-dom';
import { RegisterForm } from '@/ui/auth/RegisterForm';
import { AuthLayout } from '@/ui/auth/hoc/AuthLayout';

export const RegisterPage = () => {
  return (
    <AuthLayout>
      <h4>Join Tweeter today</h4>
      <RegisterForm />
      <p className="flex text-xs gap-1 text-gray-400">
        You already have an account?
        <Link
          className="font-medium text-blue-500 underline"
          to="/auth/login"
        >
          Sign up
        </Link>
      </p>
    </AuthLayout>
  );
};
