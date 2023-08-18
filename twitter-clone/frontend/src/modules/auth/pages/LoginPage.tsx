import { Link } from 'react-router-dom';
import { LoginForm } from '@/ui/components/auth/LoginForm';
import { OAuthSignIn } from '@/ui/components/auth/OAuthSignIn';
import { AuthLayout } from '@/ui/components/auth/hoc/AuthLayout';

export const LoginPage = () => {
  return (
    <AuthLayout>
      <OAuthSignIn />
      <h4 className="flex w-full items-center before:content-[''] before:flex-1 before:border-b-2 before:mr-3 after:content-[''] after:flex-1 after:border-b-2 after:ml-3">
        OR
      </h4>
      <LoginForm />
      <p className="flex text-xs gap-1 text-gray-400">
        Don't have an account?
        <Link
          className="font-medium text-blue-500 underline"
          to="/auth/register"
        >
          Sign up
        </Link>
      </p>
    </AuthLayout>
  );
};
