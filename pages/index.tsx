import React from 'react';
import { NextPage } from 'next';

const Index: NextPage = () => (
  <div style={{ position: 'relative', height: '100vh', textAlign: 'center' }}>
    <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)'
      }}
    >
      <img alt="loading" src="static/img/loading.gif" style={{ height: '200px' }} />
      <h2 style={{ fontWeight: 100 }}>Coming soon...</h2>
    </div>
  </div>
  );

export default Index;

