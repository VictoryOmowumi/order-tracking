import React, { useState, useEffect } from "react";
import Loading from "./components/Loading";
import Error from "./components/Error";
import { useParams, useNavigate } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import { baseUrl } from "./baseUrl";
const App = () => {
  const navigate = useNavigate();

  const [trackingStages, setTrackingStages] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   const uid = "372F150A-346D-4587-B100-B35AD9A6C983";
  //   navigate(`/tracking/${uid}`);
  // }, [navigate]);
  const { trackingId } = useParams();

  const orderUrl = `${baseUrl}${trackingId}`;

  useEffect(() => {
    setLoading(true);
    fetch(orderUrl)
      .then((response) => response.json())
      .then((data) => {
        setTrackingStages(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, [orderUrl, navigate]);

  if (loading) {
    return <Loading />;
  } else if (error) {
    return <Error message={error.message} />;
  }

  return (
    <Routes>
      <Route
        path="/"
        element={<Main trackingStages={trackingStages} error={error} />}
      />
    </Routes>
  );
};

export default App;
