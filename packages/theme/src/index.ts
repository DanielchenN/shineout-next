import Alert from './alert';
import { AlertTokens } from './alert/type';

import Button from './button';
import { ButtonTokens } from './button/type';

import Checkbox from './checkbox';
import { CheckboxTokens } from './checkbox/type';

import Common from './common';
import { CommonTokens } from './common/type';

import DatePicker from './date-picker';
import { DatePickerTokens } from './date-picker/type';

import Dropdown from './dropdown';
import { DropdownTokens } from './dropdown/type';

import EditableArea from './editable-area';
import { EditableAreaTokens } from './editable-area/type';

import Icon from './icon';
import { IconTokens } from './icon/type';

import Image from './image';
import { ImageTokens } from './image/type';

import Input from './input';
import { InputTokens } from './input/type';

import Popover from './popover';
import { PopoverTokens } from './popover/type';

import Radio from './radio';
import { RadioTokens } from './radio/type';

import Spin from './spin';
import { SpinTokens } from './spin/type';

import Switch from './switch';
import { SwitchTokens } from './switch/type';

import Tabs from './tabs';
import { TabsTokens } from './tabs/type';

import Tag from './tag';
import { TagTokens } from './tag/type';

import Textarea from './textarea';
import { TextareaTokens } from './textarea/type';

import Tooltip from './tooltip';
import { TooltipTokens } from './tooltip/type';

export type ThemeTokens = AlertTokens &
  ButtonTokens &
  CheckboxTokens &
  CommonTokens &
  DatePickerTokens &
  DropdownTokens &
  EditableAreaTokens &
  IconTokens &
  ImageTokens &
  InputTokens &
  PopoverTokens &
  RadioTokens &
  SpinTokens &
  SwitchTokens &
  TagTokens &
  TabsTokens &
  TextareaTokens &
  TooltipTokens;

const Token: ThemeTokens = {
  ...Alert,
  ...Button,
  ...Checkbox,
  ...Common,
  ...DatePicker,
  ...Dropdown,
  ...EditableArea,
  ...Icon,
  ...Image,
  ...Input,
  ...Popover,
  ...Radio,
  ...Spin,
  ...Switch,
  ...Tag,
  ...Tabs,
  ...Tag,
  ...Textarea,
  ...Tooltip,
};

export default Token;
