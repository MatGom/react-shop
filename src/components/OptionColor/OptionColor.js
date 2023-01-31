import styles from '../ProductOptions/ProductOptions.module.scss';
import clsx from 'clsx';

const OptionColor = ({colors, currentColor, setCurrentColor}) => {

  const prepareColorClassName = color => {
    return styles['color' + color[0].toUpperCase() + color.substr(1).toLowerCase()];
  };

  return (
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
  );
};

export default OptionColor;