import Home from "../components/Home";
import {connect} from 'react-redux'
import { addToCart,removeToCart } from "../services/actions/actions";

const mapStateToProps = state =>({
    data: state.cardItems
})

const mapDispatchToProps = dispatch => ({ 
    addCartHandlar: data => dispatch(addToCart(data)),
    removeCartHandlar: data => dispatch(removeToCart(data))
})
export default connect(mapStateToProps, mapDispatchToProps)(Home)
// export default Home