import { useForm } from 'react-hook-form';
import { Form, Button } from '../../atoms';

import { useAuthProvider } from '../../providers/AuthProvider';

export const LoginForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({ mode: 'all' });
  const { login } = useAuthProvider();

  const onSubmit = (loginData) => {
    console.log('__loginData__', loginData);
    login(loginData);
  };

  console.log('errors', errors);

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <h2>Sign In</h2>
      <hr />

      <div className="col-5 m-auto">
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className={`form-control ${
              errors.email ? 'is-invalid' : watch('email') ? 'is-valid' : ''
            }`}
            id="email"
            {...register('email', {
              required: true,
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Invalid email address',
              },
            })}
          />
          {errors.email && (
            <div id="emailHelp" className="form-text text-danger">
              {errors.email.message}
            </div>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className={`form-control ${
              errors.password ? 'is-invalid' : watch('password') ? 'is-valid' : ''
            }`}
            id="password"
            {...register('password', {
              required: true,
              validate: (value) => value.length > 5,
            })}
          />
          {errors.password && (
            <div id="passwordHelp" className="form-text text-danger">
              Invalid Password
            </div>
          )}
        </div>

        <Button type="submit" className="btn btn-primary">
          Login
        </Button>
      </div>
    </Form>
  );
};
