function Product(props) {
    return (
        <article>
            <span>{props.redlabel}</span>
            <img src={props.bagImage}/>
                    <p>{props.typeBag}</p>
            <h4>{props.price}</h4>
        </article>
    )
}

export default Product;