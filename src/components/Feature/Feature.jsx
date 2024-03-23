import PropTypes from 'prop-types'
import { FaRegCheckCircle } from "react-icons/fa";
const Feature = ({feature}) => {
    return (
        <div className='flex'>
            <h1 className='text-start flex items-center gap-2'><FaRegCheckCircle className='text-green-300'></FaRegCheckCircle> {feature}</h1>
        </div>
    );
};

Feature.propTypes ={
    feature: PropTypes.string.isRequired
}
export default Feature;