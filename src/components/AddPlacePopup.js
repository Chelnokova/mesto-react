import React, { useState, useEffect, useRef } from "react";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup({ isOpen, onClose, onAddPlace }) {
  const nameRef = useRef("");
  const linkRef = useRef("");

  function hundleSubmit(e) {
    e.preventDefault();

    onAddPlace({
      name: nameRef.current.value,
      link: linkRef.current.value,
    });
  }

  return (
    <PopupWithForm
      name="add"
      title="Новое место"
      textButton="Создать"
      typeButton="create"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={hundleSubmit}
    >
      <div className="popup__input-box">
        <input
          name="name"
          id="title-input"
          type="text"
          ref={nameRef}
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
          ref={linkRef}
          placeholder="Ссылка на картинку"
          className="popup__input popup__input_type_link"
          required=""
        />
        <span className="link-input-error popup__text-error" />
      </div>
    </PopupWithForm>
  );
}

export default AddPlacePopup;
