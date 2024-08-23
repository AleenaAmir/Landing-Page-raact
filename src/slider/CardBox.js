import Carousel from "react-spring-3d-carousel";
// import "react-spring-3d-carousel/dist/index.css";
import "./Cardbox.css";

const CardSwipe = ({ onClick, image, title, description }) => (
  <div className="card" onClick={onClick}>
    <img
      src={image}
      alt={title}
      style={{
        maxWidth: "70%",
        maxHeight: "70%",
        marginTop: "50%",
      }}
    />
    <h2>{title}</h2>
    <p>{description}</p>
  </div>
);

function CardBox() {
  const cardData = [
    { id: 1, image: "./images/card1.png" },
    { id: 2, image: "./images/card2.png" },
    { id: 3, image: "./images/card3.png" },
    { id: 4, image: "./images/card4.png" },
  ];

  return (
    <div className="carousel-container">
      <Carousel
        slides={cardData.map((card) => ({
          key: card.id,
          content: <CardSwipe {...card} />,
        }))}
        showNavigation={true}
        animationConfig={{ tension: 120, friction: 14 }}
      />
    </div>
  );
}

export default CardBox;
