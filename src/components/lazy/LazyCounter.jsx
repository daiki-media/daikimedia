'use client';
import dynamic from 'next/dynamic';

const Counter = dynamic(() => import('@/components/shared/Counter'), {
  loading: () => <div>Loading Stats...</div>,
});

export default Counter;
