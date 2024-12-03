import { FaArrowUp } from 'react-icons/fa';
import { useState, useEffect } from 'react';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Handle scroll event to show/hide the arrow
  const handleScroll = () => {
    if (window.scrollY > 200) {
      setIsVisible(true);  // Show the arrow when scrolled down 200px
    } else {
      setIsVisible(false); // Hide the arrow when at the top
    }
  };

  // Scroll to top when the button is clicked
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Smooth scrolling animation
    });
  };

  // Add the scroll event listener when the component mounts
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed bottom-10 right-10 bg-blue-600 text-white p-4 rounded-full cursor-pointer transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
      onClick={scrollToTop}
    >
      <FaArrowUp size={30} />
    </div>
  );
};

export default ScrollToTop;