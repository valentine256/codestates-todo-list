// @flow


export interface TodoEntry {
  id: number;
  text: string;
  status: 'active' | 'scheduled' | 'completed';
  date: string;
  deadline: string;
}

export interface Group {
  id: number;
  groupName: string;
  items: TodoEntry[];
}

export type PanelType = 'Todo' | 'Empty';
export type GroupList = Group[];
export type SelectedGroup = Group;
