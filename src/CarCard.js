const DEFULAT_IMAGE_URL = 'https://www.kindpng.com/picc/m/181-1813878_vector-car-png-file-vector-png-of-car.png'

const valueOrDefaultURL = (x) => {
    return x == null || x === ''? DEFULAT_IMAGE_URL : x;
}



const CarCard = (props) => {
    const {row, index   } = props
    const style = {
        width: '25rem',
      };
    return (
        <div className="card" style={style}>
            <img className="card-img-top" src={valueOrDefaultURL(row.imageurl)} alt=""></img>
            <div className="card-body hstack gap-3">
                <div><span className="badge badge-primary">{row.make.toUpperCase()}
                </span></div>
                <div className="vr"></div>
                <div><span className="badge badge-dark">{row.model.toUpperCase()}</span></div>  
            </div>
                <ul className="list-group list-group-flush">
                <li className="list-group-item"><label>Price:</label>{' ' + row.price}<label>€</label></li>
                <button className="btn btn-outline-danger btn-lg btn-block" type="submit" onClick={() => props.removeCharacter(index)}>Delete</button>
            </ul>
        </div>
    );
}

export default CarCard