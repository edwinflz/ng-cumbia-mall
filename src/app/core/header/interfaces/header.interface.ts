import {
  DEFAULT_HEADER_COLOR,
  HEADER_STYLE,
} from '../constants/header-constants';

export interface Header {
  classType: string;
  showOptions: boolean;
  title: string;
  color: string;
  showTitle: boolean;
}

export type HeaderSelection = Readonly<{
  style: string;
  title: string;
  color: string;
  showTitle: boolean;
}>;

export const HEADER_STYLES: Header[] = [
  {
    classType: HEADER_STYLE.FULL,
    showOptions: true,
    title: null,
    color: DEFAULT_HEADER_COLOR,
    showTitle: false,
  },
  {
    classType: HEADER_STYLE.BASIC,
    showOptions: true,
    title: null,
    color: DEFAULT_HEADER_COLOR,
    showTitle: false,
  },
];
