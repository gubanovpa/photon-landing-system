import { Component } from 'react';
import type { ErrorInfo, ReactNode } from 'react';

type ErrorBoundaryProps = {
  children: ReactNode;
};

type ErrorBoundaryState = {
  hasError: boolean;
};

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  public state: ErrorBoundaryState = {
    hasError: false,
  };

  public static getDerivedStateFromError() {
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Unhandled application error', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div
          style={{
            minHeight: '100vh',
            display: 'grid',
            placeItems: 'center',
            padding: '24px',
            fontFamily:
              '"Manrope", -apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", Arial, sans-serif',
            background:
              'radial-gradient(circle at top, rgba(181, 210, 84, 0.1), transparent 24%), radial-gradient(circle at right top, rgba(87, 111, 136, 0.22), transparent 28%), linear-gradient(180deg, rgba(23, 56, 47, 0.34), transparent 34%), #2D3F54',
            color: '#F5F5F2',
          }}
        >
          <div>
            <h1 style={{ marginBottom: '12px' }}>Application error</h1>
            <p>Refresh the page or inspect the console to continue debugging.</p>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
