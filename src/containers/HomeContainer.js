import Home from "../components/Home";
import {connect} from 'react-redux'
import { addToCart } from "../services/actions/actions";

const mapStateToProps = state =>({
    cardData: state
})

const mapDispatchToProps = dispatch => ({ 
    addCartHandlar: data => dispatch(addToCart(data))
})
export default connect(mapStateToProps, mapDispatchToProps)(Home)
// export default Home