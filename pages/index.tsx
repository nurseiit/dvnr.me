import React from 'react';
import { NextPage } from 'next';
import { Button } from 'antd';

const Index: NextPage = () => (
  <div style={{ position: 'relative', height: '100vh', textAlign: 'center' }}>
    <div
      style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)'
      }}
    >
      <img
        alt="loading"
        src="static/img/loading.gif"
        style={{ height: '200px' }}
      />
      <Button type="dashed" style={{ fontWeight: 150 }}>
        Coming soon...
      </Button>
    </div>
  </div>
);

export default Index;
