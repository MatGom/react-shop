import styles from './ProductOptions.module.scss';
import clsx from 'clsx';
import Button from '../Button/Button';

const ProductOptions = ({
  sizes,
  currentSize,
  setCurrentSize,
  colors,
  currentColor,
  setCurrentColor,
  title,
  getPrice,
}) => {
  const prepareColorClassName = color => {
    return styles['color' + color[0].toUpperCase() + color.substr(1).toLowerCase()];
  };

  return (
    <form>
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
      <div className={styles.colors}>
        <h3 className={styles.optionLabel}>Colors</h3>
        <ul className={styles.choices}>
          {colors.map(color => (
            <li key={color.id}>
              <button
                type='button'
                className={clsx(prepareColorClassName(color), color === currentColor && styles.active)}
                onClick={e => {
                  e.preventDefault();
                  setCurrentColor(color);
                }}
              />
            </li>
          ))}
        </ul>
      </div>
      <Button
        type='button'
        className={styles.button}
        onClick={e => {
          e.preventDefault();
          console.log('Summary');
          console.log('=======');
          console.log('Name:', title);
          console.log('Price:', getPrice());
          console.log('Size:', currentSize);
          console.log('Color:', currentColor[0].toUpperCase() + currentColor.substr(1).toLowerCase());
        }}>
        <span className='fa fa-shopping-cart' />
      </Button>
    </form>
  );
};

export default ProductOptions;
