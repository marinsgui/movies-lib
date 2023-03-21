import style from '../../styles/Loading.module.css';

import loading from '../../assets/loading.svg';

export default function Loading() {
    return (
        <div className={style.loading}>
            <img src={loading} alt="loading" />
        </div>
    )
}