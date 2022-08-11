import React from "react";

const Regester = () => {
  return (
    <section className="regester">
      <div className="container">
        <h2>Regester a new accoutn</h2>
        <div className="card">
          <form>
            <label htmlFor="name">Name</label>
            <input
              className="form-control"
              type="text"
              name="name"
              id="name"
              placeholder="Your Name"
            />
            <label htmlFor="email">Email</label>
            <input
              className="form-control"
              type="text"
              name="email"
              id="email"
              placeholder="Your Email"
            />
            <label htmlFor="password">Password</label>
            <input
              className="form-control"
              type="password"
              name="password"
              id="password"
              placeholder="New Password"
            />
          </form>
        </div>
      </div>
    </section>
  );
};

export default Regester;
