import styles from './ProductOptions.module.scss';
import Button from '../Button/Button';
import OptionSize from '../OptionSize/OptionSize';
import OptionColor from '../OptionColor/OptionColor';

const ProductOptions = (props) => {
  const addToCart = e => {
    e.preventDefault();
    console.log('Summary');
    console.log('=======');
    console.log('Name:', props.title);
    console.log('Price:', props.totalPrice);
    console.log('Size:', props.currentSize);
    console.log('Color:', props.currentColor[0].toUpperCase() + props.currentColor.substr(1).toLowerCase());
  };

  return (
    <form>
      <OptionSize sizes={props.sizes} currentSize={props.currentSize} setCurrentSize={props.setCurrentSize} />
      <OptionColor colors={props.colors} currentColor={props.currentColor} setCurrentColor={props.setCurrentColor} />
      <Button type='button' className={styles.button} onClick={addToCart}>
        <span className='fa fa-shopping-cart' />
      </Button>
    </form>
  );
};

export default ProductOptions;
