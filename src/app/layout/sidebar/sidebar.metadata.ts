// Sidebar route metadata
export interface RouteInfo {
  path: string;
  title: string;
  moduleName: string;
  icon: string;
  class: string;
  groupTitle: boolean;
  submenu: RouteInfo[];
}

// Sidebar route metadata
export class RouteInfoNew {
  path: string;
  title: string;
  moduleName: string;
  icon: string;
  class: string;
  groupTitle: boolean;
  submenu: RouteInfoNew[];
}
