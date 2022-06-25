/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import { Navigate } from 'react-router-dom';

function ProtectedRoute({ component: Component, authUser }) {
  const token = localStorage.getItem('x-csrf-token');
  let auth = false; /* MAKE THIS FALSE */
  if (token && authUser.user_name) {
    auth = true;
  }

  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {
      auth ? (
        <Component user={authUser} />
      ) : (
        <Navigate to="/login" />
      )
    }
    </>
  );
}

export default ProtectedRoute;
