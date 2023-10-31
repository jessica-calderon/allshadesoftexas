import img1 from '/assets/photos/enclosed_sliders/img_14.jpg'
import img2 from '/assets/photos/enclosed_sliders/img_1.jpg'
import img3 from '/assets/photos/enclosed/img_40.jpg'

const LatestWork = () => {
    const latestWorkImages = [
        img1, img2, img3
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
