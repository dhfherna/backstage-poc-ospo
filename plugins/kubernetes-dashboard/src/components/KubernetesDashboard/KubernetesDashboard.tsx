import React, { useRef, useState } from 'react';
import { useApi } from '@backstage/core-plugin-api';
import { configApiRef } from '@backstage/core-plugin-api';

const KubernetesDashboard = () => {
  const iframeRef = useRef(null);
  const [inputValue, setInputValue] = useState('');

  return (
    <div>
      <h1>Dashboard EKS</h1>
      <iframe
        ref={iframeRef}
        src="https://127.0.0.1:10443/#/workloads?namespace=default"
        style={{ width: '100%', height: '400px', border: '1px solid black' }}
      />
    </div>
  );
};

export default KubernetesDashboard;
