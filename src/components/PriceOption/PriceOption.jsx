import PropTypes from 'prop-types';
import Feature from '../Feature/Feature';
const PriceOption = ({ option }) => {
    const { name, price, features } = option;
    return (
        <div className='space-y-4 text-center bg-sky-600 p-7 rounded-lg text-white flex flex-col'>
            <h1 className='text-6xl font-extrabold'>
            <span>{price}</span>
            <span>/mon</span>
            </h1>
            <h2 className='text-4xl font-medium'>{name}</h2>

            <div className='flex-grow'>
                {
                    features.map((feature, idx) => <Feature 
                    feature={feature}
                    key={idx}></Feature>)
                }
            </div>
            <button className='bg-green-600 w-full p-2 rounded-md font-bold hover:bg-green-800'>Buy Now</button>
        </div>
    );
};
PriceOption.propTypes = {
    option: PropTypes.object.isRequired
}
export default PriceOption;