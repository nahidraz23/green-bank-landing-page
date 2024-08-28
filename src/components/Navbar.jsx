import logo from '../../public/logo.svg'

const Navbar = () => {

    return (
        <div className='flex justify-between items-center mt-8'>
            <div className='flex items-center gap-2'>
                <img src={logo} alt="" />
                <h2 className='text-xl font-semibold'>GreenBank</h2>
            </div>
            <div>
                <ul className='flex gap-8 font-medium'>
                    <li>Why Us</li>
                    <li>Services</li>
                    <li>Our Process</li>
                    <li>Payments</li>
                    <li>FAQs</li>
                </ul>
            </div>
            <div>
                <button className='border-2 px-8 py-3 rounded-full text-primary-green border-primary-green'>Contact</button>
            </div>
        </div>
    );
};

export default Navbar;