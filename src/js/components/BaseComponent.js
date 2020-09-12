export default class BaseComponent {
  constructor(element){
    this._element = element;
  }

  setHideModifitator(cssClass){
    this._hideModificator = cssClass;
  }

  show = () => {
    this._element.classList.remove(this._hideModificator);
  };

  hide = () => {
    this._element.classList.add(this._hideModificator);
  }
}
