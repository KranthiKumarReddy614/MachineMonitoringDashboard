"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";

export default function Dashboard() {
  const [machines, setMachines] = useState([]);

  async function load() {
    const token = localStorage.getItem("token");
    const headers = token ? { Authorization: `Bearer ${token}` } : {};
    const res = await axios.get("http://localhost:3000/machines", { headers });
    setMachines(res.data);
  }

  useEffect(() => {
    (async () => {
      await load();
    })();
    const interval = setInterval(load, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h1>Machine Dashboard</h1>

      <table border="1">
        <thead>
          <tr>
            <th>Name</th>
            <th>Status</th>
            <th>Temp (°C)</th>
            <th>Energy (kWh)</th>
          </tr>
        </thead>

        <tbody>
          {machines.map(m => (
            <tr key={m.id}>
              <td>
                <Link href={`/machine/${m.id}`}>{m.name}</Link>
              </td>
              <td>{m.status}</td>
              <td>{m.temperature}</td>
              <td>{m.energyConsumption}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
