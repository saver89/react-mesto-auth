import React, { useState, useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import api from '../utils/Api';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import EditProfilePopup from './EdifProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';
import AddPlacePopup from './AddPlacePopup';
import { Route, Switch, Redirect, useHistory } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import ProtectedRoute from './ProtectedRoute';
import InfoTooltip from './InfoTooltip';
import * as auth from '../utils/auth';

function App(props) {
  const [isEditProfileOpen, setIsEditProfileOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState();
  const [currentUser, setCurrentUser] = useState({ _id: '', name: '', avatar: '', about: '' });
  const [cards, setCards] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);
  const [isInfoTooltipOpen, setIsInfoTooltipOpen] = useState(false);
  const [infoTooltipSuccess, setInfoTooltipSuccess] = useState(false);
  const [userEmail, setUserEmail] = useState('');
  const history = useHistory();

  useEffect(() => {    
    auth
      .checkToken()
      .then((res) => {
        if (res.data) {
          setLoggedIn(true);
          setUserEmail(res.data.email);
          history.push('/');
        }
      })
      .catch((err) => console.log(err));    
  }, [loggedIn]);

  useEffect(() => {
    if (loggedIn) {
      api
        .getInitialsCards()
        .then((res) => {
          setCards(res.data);
        })
        .catch((err) => {
          console.error(err);
        });
    }
  }, [loggedIn]);

  useEffect(() => {
    if (loggedIn) {
      api
        .getUserInfo()
        .then((res) => {
          setCurrentUser(res.data);
        })
        .catch((err) => {
          console.error(err);
        });
    }
  }, [loggedIn]);

  function handleEditProfileClick() {
    setIsEditProfileOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function closeAllPopups() {
    setIsEditProfileOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setSelectedCard(null);
  }

  function handleUpdateUser(userInfo) {
    api
      .editUserInfo(userInfo)
      .then(() => {
        const updatedUser = { ...currentUser };
        updatedUser.name = userInfo.name;
        updatedUser.about = userInfo.about;

        setCurrentUser({ ...updatedUser });
        setIsEditProfileOpen(false);
      })
      .catch((err) => {
        handleInfoTooltipOpen(false);
      });
  }

  function handleUpdateAvatar({ avatar }) {
    api
      .editAvatar(avatar)
      .then((res) => {
        setCurrentUser(res.data);
        setIsEditAvatarPopupOpen(false);
      })
      .catch((err) => {
        handleInfoTooltipOpen(false);
      });
  }

  function handleAddPlaceSubmit(card) {
    api
      .postCard(card)
      .then((res) => {
        setCards([res.data, ...cards]);
        setIsAddPlacePopupOpen(false);
      })
      .catch((err) => {
        handleInfoTooltipOpen(false);
      });
  }

  function handleCardLike(card) {
    // Снова проверяем, есть ли уже лайк на этой карточке
    const isLiked = card.likes.some((i) => i === currentUser._id);

    // Отправляем запрос в API и получаем обновлённые данные карточки
    api
      .changeLikeCardStatus(card._id, !isLiked)
      .then((res) => {
        const newCard = res.data;
        // Формируем новый массив на основе имеющегося, подставляя в него новую карточку
        const newCards = cards.map((c) => (c._id === card._id ? newCard : c));
        // Обновляем стейт
        setCards(newCards);
      })
      .catch((err) => {
        handleInfoTooltipOpen(false);
      });
  }

  function handleCardDelete(card) {
    api
      .removeCard(card._id)
      .then(() => {
        const newCards = cards.filter((c) => c._id !== card._id);
        setCards(newCards);
      })
      .catch((err) => {
        handleInfoTooltipOpen(false);
      });
  }

  function handleInfoTooltipClose() {
    setIsInfoTooltipOpen(false);
  }

  function handleInfoTooltipOpen(isSuccess) {
    setIsInfoTooltipOpen(true);
    setInfoTooltipSuccess(isSuccess);
  }

  function handleLogout() {
    auth.logOut().then((res) => {
      if (res.status === 200) {
        setLoggedIn(false);
      }      
    });    
  }

  function loginSubmitHandler(e, email, password) {
    e.preventDefault();

    if (!email || !password) {
      handleInfoTooltipOpen(false);
      return;
    }

    auth
      .authorize(password, email)
      .then((res) => {
        if (res.status === 200) {
          setLoggedIn(true);
          history.push('/');
        } else {
          handleInfoTooltipOpen(false);
        }
      })
      .catch((err) => {
        console.log(err);
        handleInfoTooltipOpen(false);
      });
  }

  function registerSubmitHandler(e, email, password) {    
    e.preventDefault();

    auth.register(password, email).then((res) => {
      if (res.data) {
        handleInfoTooltipOpen(true);
      } else {
        handleInfoTooltipOpen(false);
      }
    }).catch(()=>{
      handleInfoTooltipOpen(false);
    });    
  }

  const mainPage = (
    <>
      <Main
        cards={cards}
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
        onCardClick={handleCardClick}
        onCardLike={handleCardLike}
        onCardDelete={handleCardDelete}
      />
      <EditProfilePopup
        isOpen={isEditProfileOpen}
        onClose={closeAllPopups}
        onUpdateUser={handleUpdateUser}
      />
      <AddPlacePopup
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
        onAddPlace={handleAddPlaceSubmit}
      />
      <EditAvatarPopup
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
        onUpdateAvatar={handleUpdateAvatar}
      />
      <PopupWithForm
        name="confirm-form"
        title="Вы уверены"
        closeText="Да"
        onClose={closeAllPopups}
      ></PopupWithForm>
      <ImagePopup card={selectedCard} onClose={closeAllPopups} />
      <Footer />
    </>
  );

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <div className="container">
          <Header loggedIn={loggedIn} email={userEmail} handleLogout={handleLogout} />
          <Switch>
            <Route path="/sign-up">
              <Register submitHandler={registerSubmitHandler} />
            </Route>
            <Route path="/sign-in">
              <Login submitHandler={loginSubmitHandler} />
            </Route>
            <ProtectedRoute path="/" loggedIn={loggedIn} component={mainPage} />
            <Route path="*">{loggedIn ? <Redirect to="/" /> : <Redirect to="/sign-in" />}</Route>
          </Switch>
          <InfoTooltip
            isOpen={isInfoTooltipOpen}
            onClose={handleInfoTooltipClose}
            isSuccess={infoTooltipSuccess}
          />
        </div>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
