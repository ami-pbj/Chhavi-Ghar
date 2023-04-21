export const initialState = {
    basket: [],
    user: null,
};


// Selector => to show selected product on checkout page
export const getBasketTotal = (basket) =>
    basket?.reduce((amount, item) => item.price + amount, 0);


const reducer = (state, action) => {

    // To see on console ADD_TO_BASKET work flow 
    console.log(action);

    switch (action.type) {
        case "ADD_TO_BASKET":
            return { 
                ...state,
                basket: [...state.basket, action.item],
            };

        case "EMPTY_BASKET":
            return {
                ...state,
                basket: []
            }

        case "REMOVE_FROM_BASKET":
            const index = state.basket.findIndex(
                (basketItem) => basketItem.id === action.id
            );

            let newBasket = [...state.basket];

            if (index >= 0) {
                newBasket.splice(index, 1);

            } else {
                console.warn(
                    `Can't remove product (id: ${action.id}) as it's not in basket !!`
                )
            }

            return {
                ...state,
                basket: newBasket
            }


        // Watchlist 
        
        case "ADD_MOVIE_TO_WATCHLIST":
            return {
                ...state,
                watchlist: [action.payload, ...state.watchlist],
            };

        case "REMOVE_MOVIE_FROM_WATCHLIST":
            return {
                ...state,
                watchlist: state.watchlist.filter(
                (movie) => movie.id !== action.payload
                ),
            };

        case "ADD_MOVIE_TO_WATCHED":
            return {
                ...state,
                watchlist: state.watchlist.filter(
                (movie) => movie.id !== action.payload.id
                ),
                watched: [action.payload, ...state.watched],
            };

        case "MOVE_TO_WATCHLIST":
            return {
                ...state,
                watched: state.watched.filter(
                (movie) => movie.id !== action.payload.id
                ),
                watchlist: [action.payload, ...state.watchlist],
            };

        case "REMOVE_FROM_WATCHED":
            return {
                ...state,
                watched: state.watched.filter((movie) => movie.id !== action.payload),
            };
        
        case "SET_USER":
            return{
                ...state,
                user: action.user
            }
    
        default:
            return state;
    }
};

export default reducer;