import styles from './Product.module.scss';
import clsx from 'clsx';
import Button from '../Button/Button';
import { useState } from 'react';
import ProductImage from '../ProductImage/ProductImage';
// import PropTypes from 'prop-types';

const Product = props => {
  const [currentColor, setCurrentColor] = useState(props.colors[0]);
  const [currentSize, setCurrentSize] = useState(props.sizes[0].name);
  // console.log(props);

  const prepareColorClassName = color => {
    return styles['color' + color[0].toUpperCase() + color.substr(1).toLowerCase()];
  };

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
        <form>
          <div className={styles.sizes}>
            <h3 className={styles.optionLabel}>Sizes</h3>
            <ul className={styles.choices}>
              {props.sizes.map(size => (
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
              {props.colors.map(color => (
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
              console.log('Name:', props.title);
              console.log(
                'Price:',
                getPrice(props.basePrice, props.sizes.find(price => price.name === currentSize).additionalPrice)
              );
              console.log('Size:', currentSize);
              console.log('Color:', currentColor[0].toUpperCase() + currentColor.substr(1).toLowerCase());
            }}>
            <span className='fa fa-shopping-cart' />
          </Button>
        </form>
      </div>
    </article>
  );
};

// Product.propTypes = {

// }

export default Product;
