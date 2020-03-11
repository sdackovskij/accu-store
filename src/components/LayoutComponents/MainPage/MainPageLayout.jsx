import React from "react";
import PropTypes from "prop-types";
import "./MainPage.scss";
import noPhoto from "../../../../public/img/image_not_available.png";
class MainPage extends React.Component {

  render() {
    return (
      <div>
        <div className="row">
          <div className="col s12">
            <div className="card-panel main-search-box">
              <h4 className="white-text center-align">
                Найти нужные запчасти для вашего автомобиля
              </h4>
              <div className="col s4 input-field">
                <div className="card-panel  blue-grey-lighten-5">
                  <select>
                    <option value="" disabled selected>
                      Марка автомобиля
                    </option>
                    <option value="1">BMW</option>
                    <option value="2">LADA</option>
                    <option value="3">AUDI</option>
                  </select>
                </div>
              </div>
              <div className="col s4 input-field">
                <div className="card-panel  blue-grey-lighten-5">
                  <input
                    type="text"
                    className="datepicker"
                    placeholder="Дата выпуска"
                  ></input>
                </div>
              </div>

              <div className="col s4 input-field">
                <div className="card-panel  blue-grey-lighten-5">
                  <select multiple>
                    <option value="" disabled selected>
                      Запчасти
                    </option>
                    <option value="1">Двигатель</option>
                    <option value="2">Проводка</option>
                    <option value="3">Стекла</option>
                  </select>
                </div>
              </div>
              <div className="center-align">
                <button
                  className="btn waves-effect waves-light red darken-3"
                  type="submit"
                  name="action"
                >
                  Поиск
             
                </button>
              </div>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col s12 m3 l3">
            <div class="card waves-effect hoverable">
              <div class="card-image">
                <img src={noPhoto} />
              </div>
              <div class="card-content center-align">
                <p>Очень хороший аккумулятор</p>
              </div>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col s12 m3 l3">
            <div class="card waves-effect hoverable">
              <div class="card-image">
                <img src={noPhoto} />
              </div>
              <div class="card-content center-align">
                <p>Очень хороший аккумулятор</p>
              </div>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col s12 m3 l3">
            <div class="card waves-effect hoverable">
              <div class="card-image">
                <img src={noPhoto} />
              </div>
              <div class="card-content center-align">
                <p>Очень хороший аккумулятор</p>
              </div>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col s12 m3 l3">
            <div class="card waves-effect hoverable">
              <div class="card-image">
                <img src={noPhoto} />
              </div>
              <div class="card-content center-align">
                <p>Очень хороший аккумулятор</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


export default MainPage;
