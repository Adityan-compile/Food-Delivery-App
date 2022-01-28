import { Link } from 'react-router-dom';
import React from 'react';

function LoginForm() {
  return (
    <div className="p-4">
      <h1 className="text-center text-monospace fs-1 fw-bold fst-italic">
        Login
      </h1>
      <form className="p-4 m-4">
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <div className="d-flex flex-row">
          <div>
            <button
              type="submit"
              className="btn btn-md btn-primary"
              onClick={(e) => {
                e.preventDefault();
              }}
            >
              Login
            </button>
          </div>
          <div className="p-4">
            <Link
              to={'/register'}
              className="link-primary text-decoration-none"
            >
              Not a Partner? Partner With Us
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
