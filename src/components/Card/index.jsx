import PropTypes from "prop-types";
import CardBody from "./CardBody";

const Card = (props) => {
  const { imgSrc, imgAlt, cardWidth, children } = props;

  const cardStyle = {
    width: !!cardWidth ? cardWidth : "18rem",
  };

  const image = !!imgSrc ? (
    <img className="card-img-top" src={imgSrc} alt={imgAlt} />
  ) : null;

  return (
    <div className="card" style={cardStyle}>
      {image}
      <CardBody cardBody={children} />
    </div>
  );
};

Card.propTypes = {
  imgSrc: PropTypes.string,
  imgAlt: PropTypes.string,
  cardWidth: PropTypes.string,
};

export default Card;
