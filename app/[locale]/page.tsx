import Welcome from '@/components/templates/welcome/welcome';
import React from 'react';
import About from '@/components/templates/about/about';

export default async function Home() {
  return (
    <main>
      <Welcome/>
      <About/>
    </main>
  );
}