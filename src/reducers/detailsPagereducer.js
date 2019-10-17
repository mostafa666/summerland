import { SETACTIVEACCORDEON, INCREASECOUNT, DECREASECOUNT, SELECTSIZE, RESETDETAILSPAGESTORE, GETDETAILSDATA, FETCHCOMMENT, SELECTCOLOR, ADDERRORINCART } from "../actions/types";

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
    }
    
}

export default (state=initialState, action) => {
    switch (action.type) {
        case SETACTIVEACCORDEON:
            let target = state[action.id];
            let height = target.setHeightAccordeon === '0px'? action.ref.current.scrollHeight : '0px';
            let active = target.setActiveAccordeon === '' ? 'accordeon__active': '';
            return {
                ...state,
                [action.id]: {
                    setActiveAccordeon:active,
                    setHeightAccordeon: height
                }
            }
        case INCREASECOUNT:
            return {
                ...state,
                cart: {
                    ...state.cart,
                    count: ++state.cart.count
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
                    ...state,
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
                }
            }
        case GETDETAILSDATA:
            return {
                ...state,
                data:action.data
            }
        case FETCHCOMMENT:
            return {
                ...state,
                commentsData: action.comments
            }

        default: 
            return state;
    }
}


