'use client';

import dynamic from 'next/dynamic';
import { useState, useEffect } from 'react';

const Hero3DScene = dynamic(() => import('./Hero3DScene'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full canvas-loading flex items-center justify-center">
      <div className="w-16 h-16 border border-border-line rounded-full animate-spin-slow" />
    </div>
  ),
});

export default function Scene3DWrapper() {
  const [mounted, setMounted] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted || hasError) {
    return <FallbackScene />;
  }

  return (
    <ErrorBoundary onError={() => setHasError(true)}>
      <Hero3DScene />
    </ErrorBoundary>
  );
}

function FallbackScene() {
  return (
    <div className="w-full h-full relative overflow-hidden">
      {/* Animated gradient orbs as fallback */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-cream/[0.03] blur-3xl animate-float" />
      <div className="absolute top-1/3 right-1/4 w-48 h-48 rounded-full bg-cream/[0.05] blur-3xl animate-float-reverse" />
      <div className="absolute bottom-1/4 left-1/3 w-56 h-56 rounded-full bg-cream/[0.02] blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 right-1/3 w-32 h-32 rounded-full bg-cream/[0.04] blur-2xl animate-float-reverse" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-1/3 right-1/4 w-40 h-40 rounded-full bg-cream/[0.03] blur-3xl animate-float" style={{ animationDelay: '3s' }} />
    </div>
  );
}

// Simple error boundary for React Three Fiber
import { Component, ReactNode } from 'react';

interface ErrorBoundaryProps {
  children: ReactNode;
  onError: () => void;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch() {
    this.props.onError();
  }

  render() {
    if (this.state.hasError) {
      return <FallbackScene />;
    }
    return this.props.children;
  }
}
