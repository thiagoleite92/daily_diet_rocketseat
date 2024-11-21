export class FormatDate {
  static getHoursAndMinutes(date: Date): string {
    return date.getHours() + ':' + date.getMinutes();
  }

  static getFullDate(timestamp: string): string {
    const date = new Date(parseInt(timestamp));
    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
  }
}
