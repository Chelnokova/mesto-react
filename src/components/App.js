import React, { useState, useEffect } from "react";
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import api from '../utils/api';

function App() {
	const [isEditProfilePopupOpen, setEditProfilePopupOpen] = useState(false);
	const [isAddPlacePopupOpen, setAddPlacePopupOpen] = useState(false);
	const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = useState(false);
	const [userName, setUserName] = useState();
	const [userDescription, setUserDescription] = useState();
	const [userAvatar, setUserAvatar] = useState();
	const [cards, setCards] = useState([]);
	const [selectedCard, setSelectedCard] = useState(null);


	useEffect(() => {
		Promise.all([api.getUserInfo(), api.getInitialCards()])
	.then(([userData, cards]) => {
		setUserName(userData.name);
		setUserDescription(userData.about);
		setUserAvatar(userData.avatar);
		setCards(cards);

	}).catch((err) => {
		console.log(err);
	})
	}, [])

	function handleEditAvatarClick() {
		setEditAvatarPopupOpen(true);
	}

	function handleEditProfileClick() {
		setEditProfilePopupOpen(true);
	}

	function handleAddPlaceClick() {
		setAddPlacePopupOpen(true);
	}

	function handleCardClick(card) {
		setSelectedCard(card);
		console.log(card);
	}

	function closeAllPopups() {
		setEditProfilePopupOpen(false);
		setAddPlacePopupOpen(false);
		setEditAvatarPopupOpen(false);
		setSelectedCard(null);
	}

	return (
		<div className="body">
			<div className="page page-container">
				<Header />
				<Main 
				onEditProfile={handleEditProfileClick}
				onAddPlace={handleAddPlaceClick}
				onEditAvatar={handleEditAvatarClick}
				onCardClick={handleCardClick}
				name={userName}
				descr={userDescription}
				avatar={userAvatar}
				cards={cards}
				/>
				<Footer />
				<PopupWithForm 
				name="profile"
				title="Редактировать профиль"
				textButton="Сохранить"
				typeButton="save"
				isOpen={isEditProfilePopupOpen}
				onClose={closeAllPopups}
				>
					<div className="popup__input-box">
						<input
						name="name"
						id="name-input"
						type="text"
						placeholder="Ваше имя"
						className="popup__input popup__input_type_name"
						minLength={2}
						maxLength={40}
						required=""
						/>
						<span className="name-input-error popup__text-error" />
						<input
						name="about"
						id="job-input"
						type="text"
						placeholder="Ваш вид деятельности"
						className="popup__input popup__input_type_job"
						minLength={2}
						maxLength={200}
						required=""
						/>
						<span className="job-input-error popup__text-error" />
					</div>
				</PopupWithForm>
				<PopupWithForm 
				name="add"
				title="Новое место"
				textButton="Создать"
				typeButton="create"
				isOpen={isAddPlacePopupOpen}
				onClose={closeAllPopups}
				>
					<div className="popup__input-box">
						<input
						name="name"
						id="title-input"
						type="text"
						placeholder="Название"
						className="popup__input popup__input_type_title"
						minLength={2}
						maxLength={40}
						required=""
						/>
						<span className="title-input-error popup__text-error" />
						<input
						name="link"
						id="link-input"
						type="url"
						placeholder="Ссылка на картинку"
						className="popup__input popup__input_type_link"
						required=""
						/>
						<span className="link-input-error popup__text-error" />
					</div>
				</PopupWithForm>
				<PopupWithForm 
				name="avatar"
				title="Обновить аватар"
				textButton="Сохранить"
				typeButton="avatar"
				isOpen={isEditAvatarPopupOpen}
				onClose={closeAllPopups}
				>
					<div className="popup__input-box">
						<input
						name="link"
						id="link-avatar-input"
						type="url"
						placeholder="Ссылка на аватар"
						className="popup__input popup__input_type_link"
						required=""
						/>
						<span className="link-avatar-input-error popup__text-error" />
					</div>
				</PopupWithForm>
				<ImagePopup 
				card={selectedCard}
				onClose={closeAllPopups}
				/>
			</div>
		</div>
  );
}



export default App;
