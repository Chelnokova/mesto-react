function Card({ card, onCardClick }) {
  function handleClick() {
    onCardClick(card);
  }

  return (
    <li className="elements__card">
      <button className="elements__basket" type="button"></button>
      <div
        style={{ backgroundImage: `url(${card.link})` }}
        className="elements__img"
        onClick={handleClick}
      ></div>
      <article className="elements__descr">
        <h2 className="elements__title">{card.name}</h2>
        <div className="elements__like-block">
          <button className="elements__like" type="button"></button>
          <p className="element__amount-like">{card.likes.length}</p>
        </div>
      </article>
    </li>
  );
}

export default Card;
