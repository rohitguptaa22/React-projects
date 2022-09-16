import React from 'react';
// provides the data by context items 
//  and updates with the use of provider function
const CartContext = React.createContext({
	items: [],
	totalamount: 0,
	additem: (item) => { },
	removeItem: (id) => { },
});

export default CartContext;
