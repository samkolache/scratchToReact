// app/learn/layout.tsx
import React from 'react';
import Sidebar from '../components/learn/Sidebar';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function LearnLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
        <Navbar />
        <div className="grid grid-cols-[auto,1fr]">
        <Sidebar />
        <main className="mt-12">
            {children}
        </main>
        </div>
        <Footer />
    </>
    
  );
}
