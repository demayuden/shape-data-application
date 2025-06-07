import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import ShapeIcon from './ShapeIcon';
import API_BASE_URL from './config';
import './DataGrid.css';

const DataGrid = ({ onEdit, authToken }) => {
  const [data, setData] = useState([]);
  const location = useLocation();
  const isAdminView = location.pathname === '/admin';

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = authToken || localStorage.getItem('authToken') || sessionStorage.getItem('authToken');
        const result = await axios.get(`${API_BASE_URL}/api/data/`, {
          headers: token ? { Authorization: `Token ${token}` } : {},
        });
        setData(result.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
    const interval = setInterval(fetchData, 5000);
    return () => clearInterval(interval);
  }, [authToken]);

  const handleDelete = async (id) => {
    try {
      const token = authToken || localStorage.getItem('authToken') || sessionStorage.getItem('authToken');
      await axios.delete(`${API_BASE_URL}/api/data/${id}/`, {
        headers: token ? { Authorization: `Token ${token}` } : {},
      });
      setData(prev => prev.filter(item => item.id !== id));
    } catch (error) {
      console.error('Delete failed:', error);
      alert('You must be logged in to delete data.');
    }
  };

  return (
    <div className="data-grid-container" data-testid="data-grid">
      <h2>Shape Data</h2>
      <table className="styled-table">
        <thead>
          <tr>
            {isAdminView ? (
              <>
                <th>Name</th>
                <th>Shape</th>
                <th>Color</th>
                <th>Timestamp</th>
                <th>Actions</th>
              </>
            ) : (
              <>
                <th>Timestamp</th>
                <th>Name</th>
                <th>ShapeColor</th>
              </>
            )}
          </tr>
        </thead>
        <tbody>
          {data.length > 0 ? (
            data.map((item) => (
              <tr key={item.id}>
                {isAdminView ? (
                  <>
                    <td>{item.name}</td>
                    <td>{item.shape}</td>
                    <td>{item.color}</td>
                    <td>{item.timestamp}</td>
                    <td>
                      <button className="action-btn edit-btn" onClick={() => onEdit?.(item)}>✏️ Edit</button>
                      <button className="action-btn delete-btn" onClick={() => handleDelete(item.id)}>🗑 Delete</button>
                    </td>
                  </>
                ) : (
                  <>
                    <td>{item.timestamp}</td>
                    <td>{item.name}</td>
                    <td><ShapeIcon shape={item.shape} color={item.color} size={60}/></td>
                  </>
                )}
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={isAdminView ? 5 : 3}>No data available</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default DataGrid;
