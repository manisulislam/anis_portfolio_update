import { useState, useEffect } from 'react';

const ScrollProgressBar = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  // Function to calculate the scroll progress
  const calculateScrollProgress = () => {
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollTop = window.scrollY;
    const progress = (scrollTop / scrollHeight) * 100;
    setScrollProgress(progress);
  };

  // Adding scroll event listener on component mount
  useEffect(() => {
    window.addEventListener('scroll', calculateScrollProgress);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', calculateScrollProgress);
    };
  }, []);

  return (
    <div className="fixed left-0 w-full z-50">
      <div
        className="h-1 bg-green-600"
        style={{
          width: `${scrollProgress}%`,
        }}
      ></div>
    </div>
  );
};

export default ScrollProgressBar;