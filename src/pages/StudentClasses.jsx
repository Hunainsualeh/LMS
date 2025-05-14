// src/pages/StudentClasses.js
import React, { useEffect, useState } from 'react';
import db from '../utils/db';

const StudentClasses = () => {
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    db.Classes.select()
      .all()
      .then((records) => {
        setClasses(records.map((record) => ({ id: record.id, ...record.fields })));
      })
      .catch((error) => {
        console.error('Error fetching classes:', error);
      });
  }, []);

  return (
    <div>
      <h2>Classes</h2>
      {classes.map((cls) => (
        <div key={cls.id} style={{ border: '1px solid #ccc', padding: '1rem', margin: '1rem 0' }}>
          <h3>{cls.name}</h3>
          <p>{cls.description}</p>
        </div>
      ))}
    </div>
  );
};

export default StudentClasses;