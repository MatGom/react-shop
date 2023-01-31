import styles from './ProductOptions.module.scss';
import Button from '../Button/Button';
import OptionSize from '../OptionSize/OptionSize';
import OptionColor from '../OptionColor/OptionColor';

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
  const addToCart = e => {
    e.preventDefault();
    console.log('Summary');
    console.log('=======');
    console.log('Name:', title);
    console.log('Price:', getPrice());
    console.log('Size:', currentSize);
    console.log('Color:', currentColor[0].toUpperCase() + currentColor.substr(1).toLowerCase());
  };

  return (
    <form>
      <OptionSize sizes={sizes} currentSize={currentSize} setCurrentSize={setCurrentSize} />
      <OptionColor colors={colors} currentColor={currentColor} setCurrentColor={setCurrentColor} />
      <Button type='button' className={styles.button} onClick={addToCart}>
        <span className='fa fa-shopping-cart' />
      </Button>
    </form>
  );
};

export default ProductOptions;
