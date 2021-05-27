import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPermitsRequest } from "../_redux/actions/permitsActions";
import { RootState } from "../_redux/reducers/rootReducers";
import Permit from "../components/Permit";

import "./dashboard.css";

const Dashboard: React.FC = () => {
  const dispatch = useDispatch();
  const { pending, permits, error } = useSelector(
    (state: RootState) => state.permits
  );

  useEffect(() => {
    dispatch(fetchPermitsRequest());
  }, []);

  return (
    <div className="dashboard-container">
      {pending ? (
        <div>Loading...</div>
      ) : error ? (
        <div>Error</div>
      ) : (
        permits?.map((permit) => <Permit key={permit.id} data={permit} />)
      )}
    </div>
  );
};

export default Dashboard;
