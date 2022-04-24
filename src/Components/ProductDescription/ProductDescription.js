import "./ProductDescription.css";
import { useParams } from "react-router-dom";
import { GlobalStyle } from "../../globalStyles";
import GoToTop from './GoToTop'


const ProductDescription = (props) => {
    const {id} = useParams(['id'])
    let p = Number(id)

    return(
        <div className="prodDescContainer" >
            <GlobalStyle/>
            <div className="Navabar"></div>
            <div className="prodDesc">
                <div className="prodImg" style = {{backgroundImage: `url(${props.data[p-1].img})`}}>
                </div> 
                <div className="prodDetails">
                    <h2>{props.data[p-1].name} Pizza</h2>
                    <p>{props.data[p-1].desc}</p>
                    <p className="price">₹ {props.data[p-1].price}</p>
                </div>
                
            </div>
            <GoToTop />
        </div>
    )
}

export default ProductDescription