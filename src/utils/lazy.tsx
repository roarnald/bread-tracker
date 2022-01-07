import React from 'react';

export interface ILazyLoader<P> {
  (): Promise<{ default: React.ComponentType<P> }>;
}

function lazy<P extends Record<string, unknown>>(loader: ILazyLoader<P>, loading: React.ReactNode = null) {
  const LazyComponent = React.lazy(loader);

  const SuspenseComponent = (props: React.PropsWithChildren<React.PropsWithoutRef<P>>) => (
    <React.Suspense fallback={loading}>
      <LazyComponent {...props} />
    </React.Suspense>
  );

  return SuspenseComponent;
}

export default lazy;
