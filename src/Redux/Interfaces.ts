export type action = {TYPE: string, payload: any}
export interface ciudades {
    id: string,
    max: number,
    min: number,
    name: string,
    img: string,
    key: string,
    //extra city profile
    temp: number,
    clima: number,
    wind:number,
    clouds: number,
    latitud: number,
    longitud: number,
  }