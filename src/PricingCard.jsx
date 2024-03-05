import React from 'react';
import PropTypes from 'prop-types';

const PricingCard = ({ plan, amount, user, storage, projects, access, premium, support, domain, status }) => {
  return (
    <div className="col-lg-4">
      <div className="card mb-5 mb-lg-0">
        <div className="card-body">
          <h1 className="h6 text-uppercase font-weight-bold mb-4">{plan}</h1>
          <h2 className="h1 font-weight-bold">{amount}</h2>
          <div className="custom-separator my-4 mx-auto bg-primary"></div>
          <ul className="list-unstyled my-5 text-small text-left">
            <li className="mb-3">
              <i className="fa fa-check mr-2 text-primary"></i> {user}
            </li>
            <li className="mb-3">
              <i className="fa fa-check mr-2 text-primary"></i> {storage}
            </li>
            <li className="mb-3">
              <i className="fa fa-check mr-2 text-primary"></i> {projects}
            </li>
            <li className="mb-3">
              <i className="fa fa-check mr-2 text-primary"></i> {access}
            </li>
            <li className="mb-3">
              <i className="fa fa-check mr-2 text-primary"></i> {premium}
            </li>
            <li className="mb-3">
              <i className="fa fa-check mr-2 text-primary"></i> {support}
            </li>
            <li className="mb-3">
              <i className="fa fa-check mr-2 text-primary"></i> {domain}
            </li>
            <li className="mb-3">
              <i className="fa fa-check mr-2 text-primary"></i> {status}
            </li>
          </ul>
          <a href="#" className="btn btn-primary btn-block p-2 shadow rounded-pill">Button</a>
        </div>
      </div>
    </div>
  );
};

PricingCard.propTypes = {
  plan: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  user: PropTypes.string.isRequired,
  storage: PropTypes.string.isRequired,
  projects: PropTypes.string.isRequired,
  access: PropTypes.string.isRequired,
  premium: PropTypes.string.isRequired,
  support: PropTypes.string.isRequired,
  domain: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired
};

export default PricingCard;
