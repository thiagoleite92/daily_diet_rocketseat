export class FormatDate {
  static getCurrentDate() {
    const date = new Date().toLocaleString('pt-BR').split(',')[0];

    return date;
  }
}
