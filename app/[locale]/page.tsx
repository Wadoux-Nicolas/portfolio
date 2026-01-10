import Welcome from '@/components/templates/welcome/welcome';
import React from 'react';
import About from '@/components/templates/about/about';
import Skills from '@/components/templates/skills/skills';

export default async function Home() {
  return (
    <main>
      <Welcome/>
      <About/>
      <Skills/>
    </main>
  );
}