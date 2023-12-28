import './Card.css';

function Card(props) {
    return <div className="gallery">{props.children}</div>;

}

export default Card ;