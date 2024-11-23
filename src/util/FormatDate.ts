export class FormatDate {
  static formatHoursAndMinutes(date: Date): string {
    return date.getHours() + ':' + date.getMinutes();
  }

  static formatFullDate(timestamp: string): string {
    const date = new Date(parseInt(timestamp));
    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
  }

  static getCurrentDate() {
    return new Date().toLocaleString('pt-BR').split(',')[0];
  }
}
