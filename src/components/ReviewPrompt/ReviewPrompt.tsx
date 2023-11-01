import { useEffect, useState } from 'react';

function ReviewPrompt() {
    const [isVisible, setIsVisible] = useState(true);
    const [userClosed, setUserClosed] = useState(false);

    useEffect(() => {
        const hideReviewPrompt = localStorage.getItem('hideReviewPrompt');
        if (hideReviewPrompt) {
            setUserClosed(true);
            setIsVisible(false);
        } else {
            const handleScroll = () => {
                if (!userClosed) {
                    setIsVisible(window.scrollY <= 0);
                }
            };

            window.addEventListener('scroll', handleScroll);
            // Initial check in case the user has already scrolled
            handleScroll();

            return () => {
                window.removeEventListener('scroll', handleScroll);
            };
        }
    }, [userClosed]);

    const handleClose = () => {
        setIsVisible(false);
        setUserClosed(true);
        localStorage.setItem('hideReviewPrompt', 'true');
    };

    return (
        <div
            className={`fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-white border border-gray-300 rounded-lg shadow-md p-4 w-[95%] z-50 transition-transform transition-opacity duration-300 ${isVisible ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-100 pointer-events-none'}`}
            id="review-cta"
        >
            <div className="text-center">
                <h2 className="text-lg text-black font-semibold">Happy with our service?</h2>
                <p className="my-2 text-black">We love hearing from our satisfied customers! If you've enjoyed our service, please take a moment to share your experience on Facebook.</p>
                <a href="https://www.facebook.com/allshadesoftexas/reviews" target="_blank" rel="noopener noreferrer" className='bg-[rgb(251,175,68)] hover:border hover:border-white text-black px-4 py-2 rounded-md inline-block my-2'>Leave a Review</a>
                <button onClick={handleClose} className="hover:bg-gray-800 text-red-500 hover:text-red-400 hover:border-white border-white text-black px-2 py-1 transition-all duration-300 rounded-md cursor-pointer text-sm ml-4">Not Now</button>
            </div>
        </div>
    );
}

export default ReviewPrompt;
