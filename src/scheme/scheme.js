// @flow


export interface TodoEntry {
  id: number;
  groupId: number;
  text: string;
  status: boolean;
  scheduled: boolean;
  startDate?: string;
  deadline?: string;
  timeStamp?: Date;
}

export interface Group {
  id: number;
  groupName: string;
}

export type PanelType = 'Group' | 'Calender' | 'Empty';
export type GroupList = Group[];
export type SelectedGroup = Group;
