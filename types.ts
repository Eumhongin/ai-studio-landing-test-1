import React from 'react';

export interface Song {
  id: string;
  title: string;
  artist: string;
  votes: number;
  cover: string;
}

export interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  className?: string;
  image?: string;
}