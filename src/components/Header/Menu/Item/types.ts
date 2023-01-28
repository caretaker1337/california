export interface TMenuItem {
  id: string;
  text: string;
}

export type TProps = Omit<TMenuItem, "id">;
