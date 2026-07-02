'use client';
import dynamic from 'next/dynamic';

const Clients = dynamic(() => import('@/components/shared/Clients'), {
  loading: () => <div>Loading Clients...</div>,
});

export default Clients;
