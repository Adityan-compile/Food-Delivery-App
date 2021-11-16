import { Link } from 'react-router-dom';
import React from 'react';
import states from '../../states.json';
function SignupForm() {
  return (
    <div className="p-4">
      <h1 className="text-center text-monospace fs-1 fw-bold fst-italic">
        Register
      </h1>
      <form className="row g-3 p-4">
        <div className="col-md-6">
          <label for="inputEmail4" className="form-label">
            Email
          </label>
          <input type="email" className="form-control" id="inputEmail4" />
        </div>
        <div className="col-md-6">
          <label for="inputPassword4" className="form-label">
            Password
          </label>
          <input type="password" className="form-control" id="inputPassword4" />
        </div>
        <div className="col-12">
          <label for="inputAddress" className="form-label">
            Address
          </label>
          <input
            type="text"
            className="form-control"
            id="inputAddress"
            placeholder="1234 Main St"
          />
        </div>
        <div className="col-12">
          <label for="inputAddress2" className="form-label">
            Address 2
          </label>
          <input
            type="text"
            className="form-control"
            id="inputAddress2"
            placeholder="Apartment, studio, or floor"
          />
        </div>
        <div className="col-md-6">
          <label for="inputCity" className="form-label">
            City
          </label>
          <input type="text" className="form-control" id="inputCity" />
        </div>
        <div className="col-md-4">
          <label for="inputState" className="form-label">
            State
          </label>
          <select id="inputState" className="form-select">
            <option selected disabled>
              Choose your State
            </option>
            {states.map((state) => (
              <option key={state}>{state}</option>
            ))}
          </select>
        </div>
        <div className="col-md-2">
          <label for="inputZip" className="form-label">
            Zip
          </label>
          <input type="text" className="form-control" id="inputZip" />
        </div>
        <div className="d-flex flex-row">
          <div>
            <button
              type="submit"
              className="btn btn-primary"
              onClick={(e) => {
                e.preventDefault();
              }}
            >
              Sign in
            </button>
          </div>
          <div>
            <Link
              to={'/login'}
              className="text-decoration-none link-primary p-4"
            >
              Already a Partner? Login
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
}

export default SignupForm;
