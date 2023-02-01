import styles from './Product.module.scss';
import { useMemo, useState } from 'react';
import ProductImage from '../ProductImage/ProductImage';
import ProductOptions from '../ProductOptions/ProductOptions';

const Product = props => {
  const [currentColor, setCurrentColor] = useState(props.colors[0]);
  const [currentSize, setCurrentSize] = useState(props.sizes[0].name);

  const basePrice = props.basePrice;
  const additionalPrice = props.sizes.find(price => price.name === currentSize).additionalPrice;

  const getPrice = (a, b) => {
    return a + b;
  };

  const totalPrice = useMemo(() => getPrice(basePrice, additionalPrice), [basePrice, additionalPrice]);

  return (
    <article className={styles.product}>
      <ProductImage name={props.name} title={props.title} currentColor={currentColor} />
      <div>
        <header>
          <h2 className={styles.name}>{props.title}</h2>
          <span className={styles.price}>Price: {totalPrice}$</span>
        </header>
        <ProductOptions
          sizes={props.sizes}
          currentSize={currentSize}
          setCurrentSize={setCurrentSize}
          colors={props.colors}
          currentColor={currentColor}
          setCurrentColor={setCurrentColor}
          title={props.title}
          totalPrice={totalPrice}
          basePrice={basePrice}
          additionalPrice={props.additionalPrice}
        />
      </div>
    </article>
  );
};

export default Product;
