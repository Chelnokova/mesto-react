import Card from "./Card";

function Main({
  onEditAvatar,
  onEditProfile,
  onAddPlace,
  onCardClick,
  name,
  descr,
  avatar,
  cards,
}) {
  return (
    <main className="main">
      <section className="profile">
        <button className="profile__btn-avatar" onClick={onEditAvatar}>
          <div
            style={{ backgroundImage: `url(${avatar})` }}
            className="profile__avatar"
          ></div>
        </button>
        <div className="profile__container">
          <div className="profile__info">
            <h1 className="profile__name">{name}</h1>
            <p className="profile__job">{descr}</p>
          </div>
          <button
            className="profile__btn-edit"
            type="button"
            onClick={onEditProfile}
          />
        </div>
        <button
          className="profile__btn-add"
          type="button"
          onClick={onAddPlace}
        />
      </section>
      <ul className="elements">
        {cards.map((card) => (
          <Card key={card._id} card={card} onCardClick={onCardClick} />
        ))}
      </ul>
    </main>
  );
}

export default Main;
