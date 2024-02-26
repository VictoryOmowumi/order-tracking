import React, {useState, useEffect}from "react";
import TopContainer from "./components/TopContainer";
import BottomContainer from "./components/BottomContainer";
import Loading from "./components/Loading";
import Error from "./components/Error";
// import { useParams } from "react-router-dom";
const App = () => {

  const [trackingStages, setTrackingStages] = useState([])
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  // const { orderId } = useParams();
  const orderId = "ORD003207";
  const url = `https://drs.sevenup.org/DigitalRetail/Orders/OrderTracking?orderId=${orderId}`;

  useEffect(() => {
    setLoading(true);
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setTrackingStages(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }
  , [url]);


  
  

  if (loading) {
    return <Loading />;
  } else if (error) {
    return <Error message={error.message} />;
  }

  return (
    <main className="w-full min-h-screen flex  main-container flex-col justify-between text-white">
      <section className="">
        <TopContainer />
      </section>
      <section className="">
        <BottomContainer 
          trackingStages={trackingStages}
          error={error}
         />
      </section>
    </main>
  );
};

export default App;
