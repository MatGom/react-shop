import styles from './Product.module.scss';
import { useState } from 'react';
import ProductImage from '../ProductImage/ProductImage';
import ProductOptions from '../ProductOptions/ProductOptions';
// import PropTypes from 'prop-types';

const Product = props => {
  const [currentColor, setCurrentColor] = useState(props.colors[0]);
  const [currentSize, setCurrentSize] = useState(props.sizes[0].name);

  const getPrice = (basePrice, additionalPrice) => {
    return basePrice + additionalPrice;
  };

  // const addToCart = e => {
  //   e.preventDefault();
  //   console.log('Summary =====');
  // };

  return (
    <article className={styles.product}>
      <ProductImage name={props.name} title={props.title} currentColor={currentColor} />
      <div>
        <header>
          <h2 className={styles.name}>{props.title}</h2>
          <span className={styles.price}>
            Price: {getPrice(props.basePrice, props.sizes.find(price => price.name === currentSize).additionalPrice)}$
          </span>
        </header>
        <ProductOptions
          sizes={props.sizes}
          currentSize={currentSize}
          setCurrentSize={setCurrentSize}
          colors={props.colors}
          currentColor={currentColor}
          setCurrentColor={setCurrentColor}
          title={props.title}
          getPrice={() =>
            getPrice(props.basePrice, props.sizes.find(price => price.name === currentSize).additionalPrice)
          }
          basePrice={props.basePrice}
          additionalPrice={props.additionalPrice}
        />
      </div>
    </article>
  );
};

// Product.propTypes = {

// }

export default Product;
