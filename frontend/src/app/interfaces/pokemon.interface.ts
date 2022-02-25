export interface IPokemonResponse {
  name: string;
  url: string;
}

export interface IResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: IPokemonResponse[]
}

export interface IPokemon {
  name: string;

  sprites:{
    other:{
      home: {
        front_default: string;
      }
    }
  }
}
