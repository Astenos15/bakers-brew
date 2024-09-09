import React from "react";

const Card = ({ name, img }) => {
  return (
    <article className="card">
      <img src={img} alt={name} />
      <div className="card__info">
        <h3 className="card__heading mb-sm">{name}</h3>
        <p className="text">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque
          repudiandae debitis ut excepturi reiciendis quis aliquid blanditiis
          id, maiores aut dignissimos, amet quia iusto quod tenetur. Nesciunt
          sint earum architecto.
        </p>
      </div>
    </article>
  );
};

export default Card;
