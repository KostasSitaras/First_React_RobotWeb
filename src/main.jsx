import { Component, StrictMode, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import './index.css';
import App from './App.jsx';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { error: null };
  }

  static getDerivedStateFromError(error) {
    return { error };
  }

  componentDidCatch(error, info) {
    console.error('Portfolio render error:', error, info);
  }

  render() {
    if (this.state.error) {
      return (
        <div style={{ minHeight: '100vh', background: '#000', color: '#fff', padding: '24px', fontFamily: 'system-ui, -apple-system, sans-serif' }}>
          <h1 style={{ fontSize: '24px', marginBottom: '16px' }}>Portfolio runtime error</h1>
          <p style={{ color: '#fca5a5', whiteSpace: 'pre-wrap', overflowWrap: 'anywhere' }}>
            {String(this.state.error?.message || this.state.error)}
          </p>
          <p style={{ color: '#9ca3af', marginTop: '16px' }}>
            Please take a screenshot of this message.
          </p>
        </div>
      );
    }

    return this.props.children;
  }
}

function BootReporter() {
  useEffect(() => {
    window.__portfolioReactMounted = true;
    window.__portfolioBootOk?.();
  }, []);

  return null;
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ErrorBoundary>
      <HashRouter>
        <BootReporter />
        <App />
      </HashRouter>
    </ErrorBoundary>
  </StrictMode>,
);
