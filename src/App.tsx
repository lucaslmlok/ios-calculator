import { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Display from 'layouts/Display';
import Keyboard from 'layouts/Keyboard';

function App() {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="theme-color" content="#000000" />
        <title>iOS Calculator</title>
      </Helmet>
      <div className="bg-black min-h-screen text-white container flex flex-col pb-24">
        <Display className="flex-1" />
        <Keyboard />
      </div>
    </>
  );
}

export default App;
