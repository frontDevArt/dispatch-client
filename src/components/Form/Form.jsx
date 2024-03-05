import { useLayoutEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './Form.scss';

const query = {
  "ReturnUrl": "/connect/authorize/callback?client_id=centraldispatch_authentication&scope=listing_service%20offline_access%20openid&response_type=code&redirect_uri=https%3A%2F%2Fwww.centraldispatch.com%2Fprotected"
}

const setObjectAsQueryParam = ({ navigate, location }) => {
  const queryString = Object.entries(query)
    .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
    .join('&');

  navigate(`${location.pathname}?${queryString}`, { replace: true });
};

const Form = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useLayoutEffect(() => {
    setObjectAsQueryParam({ navigate, location })
  }, [location, navigate]);

  return <div className="form">Form</div>;
};

export default Form;
