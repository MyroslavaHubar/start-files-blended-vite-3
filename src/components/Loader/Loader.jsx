import css from './Loader.module.css';
import { MagnifyingGlass } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <div className={css.backdrop}>
      <MagnifyingGlass
        visible={true}
        height="100"
        width="100"
        ariaLabel="magnifying-glass-loading"
        wrapperStyle={{}}
        // wrapperClass="magnifying-glass-wrapper"
        // wrapperClass={css.loader}
        glassColor="#c0efff"
        color="#e15b64"
      />
    </div>
  );
};
