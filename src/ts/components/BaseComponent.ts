export default class BaseComponent {
  private _element: HTMLElement;

  constructor(element: HTMLElement){
    this._element = element;
  }

  getElement = () => this._element;
}