export class Weather {
  constructor(
    public weathertype: string,
    public maxTemp: number,
    public minTemp: number,
    public selectedTemp: number = 0
  ) {}
}
