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

  console.log("permits", permits);

  return (
    <div className="dashboard-container">
      {pending ? (
        <div>Loading...</div>
      ) : error ? (
        <div>Error</div>
      ) : (
        //@ts-ignore
        permits
          .sort((x, y) => {
            return (
              new Date(y.issue_date).getTime() -
              new Date(x.issue_date).getTime()
            );
          })
          .slice(0, 10)
          .map((permit) => <Permit key={permit.id} data={permit} />)
      )}
    </div>
  );
};

export default Dashboard;
