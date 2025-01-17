import { CommonType } from '../common/type';
import { BaseButtonProps, ButtonMode, ButtonType } from '@sheinx/hooks';
import { SpinClasses } from '../spin/spin.type';
import React from 'react';

export interface ButtonClasses {
  button: string;
  group: string;
  groupItem: string;

  // 形状
  round: string;
  circle: string;
  square: string;

  // 状态
  disabled: string;
  loading: string;
  text: string;
  small: string;
  large: string;

  // 类型
  default: string;
  primary: string;
  secondary: string;
  danger: string;
  warning: string;
  success: string;
  href: string;
  link: string;
  dashed: string;
  outline: string;

  spin: string;
}

interface ButtonStyle {
  button?: () => ButtonClasses;
  spin?: () => SpinClasses;
}

export interface ButtonItemProps extends Pick<CommonType, 'style' | 'className'> {
  type: ButtonType;
  mode: ButtonMode;
  size?: string;
  text?: boolean;
  outline?: boolean;
  disabled?: boolean;
  jssStyle?: ButtonStyle;
}

export interface ButtonBaseProps
  extends BaseButtonProps,
    Pick<CommonType, 'style' | 'className'>,
    Omit<React.TextareaHTMLAttributes<HTMLButtonElement>, 'onClick'> {
  jssStyle?: {
    button?: () => ButtonClasses;
    spin?: () => SpinClasses;
  };
  children?: React.ReactNode;
  renderButton?: (buttonEl: React.ReactNode) => React.ReactElement;
  renderLoading?: (buttonEl: React.ReactNode) => React.ReactElement;
  renderInnerWrapper?: (innerWrapperEl: React.ReactNode) => React.ReactElement;
}

export interface ButtonGroupProps extends Pick<CommonType, 'style' | 'className' | 'size'> {
  outline?: boolean;
  text?: boolean;
  link?: boolean;
  shape?: 'round';
  mode?: ButtonMode;
  type?: ButtonType;
  children: React.ReactNode;
  jssStyle?: ButtonStyle;
}

export type ButtonProps = ButtonBaseProps;
