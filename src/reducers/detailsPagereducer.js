import { SETACTIVEACCORDEON, INCREASECOUNT, DECREASECOUNT, SELECTSIZE, RESETDETAILSPAGESTORE, GETDETAILSDATA, FETCHCOMMENT, SELECTCOLOR, ADDERRORINCART, ADDTOCART, FETCHCARTS, REMOVECARTS } from "../actions/types";

const initialState = {
    data:{},
    commentsData:[],
    generalSpecification: {
        setHeightAccordeon:'500px',
        setActiveAccordeon:'accordeon__active'
    },
    tecnicalSpecification: {
        setHeightAccordeon:'0px',
        setActiveAccordeon:''
    },
    orderingSteps: {
        setHeightAccordeon:'1000px',
        setActiveAccordeon:''
    },
    existGoods: {
        setHeightAccordeon:'1000px',
        setActiveAccordeon:'accordeon__active'
    },
    comments: {
        setHeightAccordeon:'1000px',
        setActiveAccordeon:'accordeon__active'
    },
    order: {
        size:'',
        color:'',
        numbers:'',
        id:-1,
        nickname:''
    },
    cart: {
        size:'', 
        color:'',
        count:1
    },
    errorInAddCart: {
        text:'',
        toggleShow:false
    },
    carts:[]

    
}

export default (state=initialState, action) => {
    switch (action.type) {
        case SETACTIVEACCORDEON:
            let target = state[action.id];
            let height = target.setHeightAccordeon === '0px'? action.ref.current.scrollHeight + 3000 : '0px';
            let active = target.setActiveAccordeon === '' ? 'accordeon__active': '';
            return {
                ...state,
                [action.id]: {
                    setActiveAccordeon:active,
                    setHeightAccordeon: height
                }
            }
        case FETCHCARTS: 
            return {
                ...state,
                carts:action.carts
            }
        case REMOVECARTS:
            const copyCart = state.carts;
            const newCarts = copyCart.filter(cart => cart.id !== action.id);
            return {
                ...state,
                carts: newCarts
            }
        case INCREASECOUNT:
            let newCart = state.cart.count;
            Number(++newCart);
            console.log(newCart);
            return {
                ...state,
                cart: {
                    ...state.cart,
                    count: newCart
                }
                
            }
        case ADDTOCART: 
            return {
                ...state,
                carts: {
                    ...state.carts,
                    carts: action.cart
                }
            }
        case ADDERRORINCART:
            return {
                ...state,
                errorInAddCart: {
                    text:action.text,
                    toggleShow:action.toggle
                }
                
            }
            
        
        case DECREASECOUNT:
            let copy = state.cart.count
            const orderCount = state.cart.count > 1 ? --copy : state.orderCount;
            return {
                ...state,
                cart: {
                    ...state.cart,
                    count: orderCount
                }
            }
        case SELECTSIZE: 
            return {
                ...state,
                cart: {
                    ...state.cart,
                    size:action.size
                }
            }
        case SELECTCOLOR: 
            return {
                ...state,
                cart: {
                    ...state.cart,
                    color:action.color
                }
            }
            
        case RESETDETAILSPAGESTORE:
            return {
                ...state,
                data:{},
                commentsData:[],
                generalSpecification: {
                    setHeightAccordeon:'500px',
                    setActiveAccordeon:'accordeon__active'
                },
                tecnicalSpecification: {
                    setHeightAccordeon:'0px',
                    setActiveAccordeon:''
                },
                orderingSteps: {
                    setHeightAccordeon:'1000px',
                    setActiveAccordeon:''
                },
                existGoods: {
                    setHeightAccordeon:'1000px',
                    setActiveAccordeon:'accordeon__active'
                },
                comments: {
                    setHeightAccordeon:'1000px',
                    setActiveAccordeon:'accordeon__active'
                },
                order: {
                    size:'',
                    color:'',
                    numbers:'',
                    id:-1,
                    nickname:''
                },
                cart: {
                    size:'', 
                    color:'',
                    count:1
                },
                errorInAddCart: {
                    text:'',
                    toggleShow:false
                },
                carts:[]
            }
        case GETDETAILSDATA:
            return {
                ...state,
                data:action.data
            }
        case FETCHCOMMENT:
            console.log(action.comments)
            return {
                ...state,
                commentsData: action.comments
            }

        default: 
            return state;
    }
}


