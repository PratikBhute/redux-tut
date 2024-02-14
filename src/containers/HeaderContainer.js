
import Header from "../components/Header";
import {connect} from 'react-redux'
//  import { addToCart } from "../services/actions/actions";

const mapStateToProps = state =>({
    data: state.cardItems
})

const mapDispatchToProps = dispatch => ({ 
    // addCartHandlar: data => dispatch(addToCart(data))
})
export default connect(mapStateToProps, mapDispatchToProps)(Header)
// export default Home