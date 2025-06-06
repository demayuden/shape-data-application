import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ShapeIcon from './ShapeIcon';
import './AdminForm.css';

const AdminForm = ({ editingData, clearEdit, authToken }) => {
  const [name, setName] = useState('');
  const [shape, setShape] = useState('');
  const [color, setColor] = useState('#ff0000');

  useEffect(() => {
    if (editingData) {
      setName(editingData.name);
      setShape(editingData.shape);
      setColor(editingData.color);
    }
  }, [editingData]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = authToken || localStorage.getItem('authToken') || sessionStorage.getItem('authToken');

    if (!token) {
      alert('You must be logged in.');
      return;
    }

    const newData = { name, shape, color };

    try {
      const config = {
        headers: {
          Authorization: `Token ${token}`,
          'Content-Type': 'application/json',
        },
      };

      if (editingData && editingData.id) {
        // PUT for update
        await axios.put(`http://127.0.0.1:8000/api/data/${editingData.id}/`, newData, config);
        alert('Data updated!');
      } else {
        // POST for new
        await axios.post('http://127.0.0.1:8000/api/data/', newData, config);
        alert('Data added!');
      }

      // Clear form
      setName('');
      setShape('');
      setColor('#ff0000');
      clearEdit();
    } catch (error) {
      console.error('Submit error:', error);
      alert('Failed to submit. Check input or auth.');
    }
  };

  return (
    <div className="admin-form-container" data-testid="admin-form">
      <h2>{editingData ? 'Edit Shape' : 'Add New Shape'}</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <select value={shape} onChange={(e) => setShape(e.target.value)} required>
          <option value="">Select Shape</option>
          <option value="circle">Circle</option>
          <option value="square">Square</option>
          <option value="triangle">Triangle</option>
        </select>
        <label>
          Pick Color:&nbsp;
          <input
            type="color"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            required
          />
        </label>

        {shape && color && (
          <div className="live-preview">
            <h4>Live Preview</h4>
            <ShapeIcon shape={shape} color={color} />
          </div>
        )}

        <button type="submit">{editingData ? 'Update' : 'Add'} Data</button>
        {editingData && (
          <button type="button" className="cancel-btn" onClick={clearEdit}>Cancel</button>
        )}
      </form>
    </div>
  );
};

export default AdminForm;
