export default class DataStorage{
  save = (item: string, value: string): void => {
    localStorage.setItem(item, JSON.stringify(value));
  }

  load = (item: string): any => JSON.parse(localStorage.getItem(item));
}
