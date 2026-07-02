'use client';
import dynamic from 'next/dynamic';

const Faq = dynamic(() => import('@/components/home-1/Faq'), {
  loading: () => <div>Loading FAQs...</div>,
});

export default Faq;
