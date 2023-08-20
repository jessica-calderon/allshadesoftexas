const LatestWork = () => {
    // Placeholder images for latest work slideshow
    const latestWorkImages = [
        "https://via.placeholder.com/300?text=Latest%20Work%201",
        "https://via.placeholder.com/300?text=Latest%20Work%202",
        "https://via.placeholder.com/300?text=Latest%20Work%203",
    ];

    return (
        <div className='mt-8'>
            <h2 className='text-lg font-semibold mb-4'>Some of the Latest and Greatest Work</h2>
            <div className='grid grid-cols-3 gap-4'>
                {latestWorkImages.map((imageUrl, index) => (
                    <img key={index} src={imageUrl} alt={`Latest Work ${index}`} className='w-full h-auto' />
                ))}
            </div>
        </div>
    );
};

export default LatestWork;
