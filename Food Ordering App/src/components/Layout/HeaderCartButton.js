import CartIcon from '../Cart/CartIcon';
import styles from './HeaderCartButton.module.css';
import CartContext from '../../store/cart-context';
import { useContext } from 'react';


/* As discussed in the cartContext file, here we will use useContext hook */
const HeaderCartButton = (props) => {
	const cartCtx = useContext(CartContext)
	return (
		<button className={styles.button} onClick={props.onClick}>
			<span className={styles.icon}>
				<CartIcon />
			</span>
			<span>Your Cart</span>
			<span className={styles.badge}>3</span>
		</button>
	);
};

export default HeaderCartButton;
