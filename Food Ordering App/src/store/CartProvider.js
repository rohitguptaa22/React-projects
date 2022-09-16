import React from 'react';
import CartContext from './cart-context';

// Goal:- to manage the cart-context data and provide that context to all components 
// that want access to it. basically update the items in cart-comntext


export default function CartProvider(props) {
	const addItemToCartHandler = (item) => { };

	const reoveItemFromCarthandler = (id) => { };

	const cartContext = { //going to be dynamic data,or updates with time.
		items: [],
		totalAmount: 0,
		addItem: addItemToCartHandler,
		remoeItem: reoveItemFromCarthandler,
	};

	return (
		<CartContext.Provider value={cartContext}>
			{props.children}
		</CartContext.Provider>
	);
}
