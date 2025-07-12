// src/app/page.tsx
import React from 'react';
import HeroSlider from '@/components/home/HeroSlider';
import BeritaSection from '@/components/home/BeritaSection';
import ArsipKegiatan from '@/components/home/ArsipKegiatan';

export default function HomePage() {
  return (
    <>
      <HeroSlider />
      <BeritaSection />
      <ArsipKegiatan />
    </>
  );
}