// src/Loading.js
import React from 'react';
import { grid } from 'ldrs'
grid.register()
const Loading = () => {
  return (
    <div className="loading-container" >

<l-grid
  size="100"
  speed="1.5" 
  color="white" 
></l-grid>
    </div>
  );
};

export default Loading;
