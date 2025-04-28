// app/learn/layout.tsx
import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
        
        <main className="mt-12">
            {children}
        </main>
   
    </>
    
  );
}
