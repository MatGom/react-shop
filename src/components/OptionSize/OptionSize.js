import styles from '../ProductOptions/ProductOptions.module.scss';
import clsx from 'clsx';

const OptionSize = ({ sizes, currentSize, setCurrentSize }) => {
  return (
    <div className={styles.sizes}>
      <h3 className={styles.optionLabel}>Sizes</h3>
      <ul className={styles.choices}>
        {sizes.map(size => (
          <li key={size.id}>
            <button
              type='button'
              className={clsx(size.name === currentSize && styles.active)}
              onClick={e => {
                e.preventDefault();
                setCurrentSize(size.name);
              }}>
              {size.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OptionSize;
