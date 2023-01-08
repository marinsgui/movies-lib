import './styles.css';

import loading from '../../assets/loading.svg';

export default function Loading() {
    return (
        <div className='loading'>
            <img src={loading} alt="loading" />
        </div>
    )
}