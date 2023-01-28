interface TFooterMenuItem {
  title: string;
}

export interface TFooterItem {
  id: string;
  title: string;
  items: TFooterMenuItem[];
}
