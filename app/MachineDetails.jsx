"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import { Line } from "react-chartjs-2";

export default function MachineDetails({ params }) {
  const { id } = params;
  const [machine, setMachine] = useState(null);
  const [temps, setTemps] = useState([]);

  

  useEffect(() => {
    
    const fetchData = async () => {
      try {
        const res = await axios.get(`http://localhost:3000/machines/${id}`);
        setMachine(res.data);
        setTemps(prev => [...prev, res.data.temperature]);
      } catch (err) {
        console.error(err);
      }
    };

    
    const startTimeout = setTimeout(fetchData, 0);
    const interval = setInterval(fetchData, 10000);

    return () => {
      clearTimeout(startTimeout);
      clearInterval(interval);
    };
  }, [id]);

  if (!machine) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{machine.name}</h1>
      <p>Status: {machine.status}</p>
      <p>Temperature: {machine.temperature}</p>

      <Line
        data={{
          labels: temps.map((_, i) => i),
          datasets: [
            {
              label: "Temperature Trend",
              data: temps,
              borderColor: "blue",
            },
          ],
        }}
      />
    </div>
  );
}
