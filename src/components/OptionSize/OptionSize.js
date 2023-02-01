import styles from '../ProductOptions/ProductOptions.module.scss';
import clsx from 'clsx';
import PropTypes from 'prop-types';

const OptionSize = (props) => {
  return (
    <div className={styles.sizes}>
      <h3 className={styles.optionLabel}>Sizes</h3>
      <ul className={styles.choices}>
        {props.sizes.map((size, index) => (
          <li key={index}>
            <button
              type='button'
              className={clsx(size.name === props.currentSize && styles.active)}
              onClick={e => {
                e.preventDefault();
                props.setCurrentSize(size.name);
              }}>
              {size.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

OptionSize.propTypes = {
  sizes: PropTypes.array.isRequired,
  currentSize: PropTypes.string.isRequired,
  setCurrentSize: PropTypes.func.isRequired,
};

export default OptionSize;
