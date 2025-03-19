import { useNavigate } from 'react-router-dom';
import errorIcon from '../assets/error.jpg';

const Error = () => {

    const navigate = useNavigate();

    return (
        <div>
            <div><img src={errorIcon} alt="Loading" width="250px" height="250px" /></div>
            <button onClick={() => navigate('/')}>Back to homepage</button>
        </div>
    );
};

export default Error;