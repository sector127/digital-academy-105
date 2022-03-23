import { useForm } from 'react-hook-form';
import { useAuthProvider } from '../../providers/AuthProvider';

import { Button, Form } from '../../atoms';

export const RegisterForm = (props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { register: signUp } = useAuthProvider();

  const onSubmit = (signUpData) => {
    console.log('__SIGN_UP_DATA__', signUpData);
    signUp(signUpData);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <h2>Sign up</h2>
      <hr />

      <div className="col-5 m-auto">
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className={`form-control ${errors.email ? 'is-invalid' : ''}`}
            id="email"
            {...register('email', {
              required: true,
            })}
          />
          {errors.email && (
            <div id="emailHelp" className="form-text text-danger">
              Email is required
            </div>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className={`form-control ${errors.password ? 'is-invalid' : ''}`}
            id="password"
            {...register('password', {
              required: true,
            })}
          />
          {errors.password && (
            <div id="passwordHelp" className="form-text text-danger">
              Password is required
            </div>
          )}
        </div>

        <Button type="submit" className="btn btn-primary">
          Sign Up
        </Button>
      </div>
    </Form>
  );
};
