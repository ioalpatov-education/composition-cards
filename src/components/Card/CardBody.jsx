import PropTypes from "prop-types";

const CardBody = ({ cardBody }) => {
  return (
    <div className="card-body">
      {!cardBody ? (
        <>
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <button className="btn btn-primary">Go somewhere</button>
        </>
      ) : (
        cardBody
      )}
    </div>
  );
};

CardBody.propTypes = {
  cardBody: PropTypes.node,
};

export default CardBody;
