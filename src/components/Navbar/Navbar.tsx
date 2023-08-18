function Navbar() {
    return (
        <>
            {/* Sticky Navbar */}
            <div className='sticky top-16 bg-gray-700 p-4 flex justify-center items-center space-x-4 z-40'>
                {["Home", "Testimonials", "About Us", "Services", "Offers", "Request An Appointment", "Contact Us"].map((link) => (
                    <a key={link} href='#' className='text-white hover:underline'>
                        {link}
                    </a>
                ))}
                <span className='text-white ml-4'>
                    <a href='tel:2104400007'>(210) 440-0007</a>
                </span>
            </div>
        </>
    );
}

export default Navbar;
