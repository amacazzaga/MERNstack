import React from "react";
import { useState, useEffect } from "react";

const Home = () => {
  const [workout, setWorkouts] = useState();
  useEffect(() => {
    const fetchWorkouts = async () => {
      const response = await fetch("/api/workouts");
      const json = await response.json();
      if (response.ok) {
        setWorkouts(json);
      }
    };
    fetchWorkouts();
  }, []);
  return <div>{workout[0].title}</div>;
};

export default Home;
