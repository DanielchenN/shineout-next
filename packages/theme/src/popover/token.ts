// 此文件受脚本控制，修改后将自动同步 type.ts popover.ts 的内容
// This file is script-controlled and any changes made will be automatically synchronized with the type.ts and popover.ts files.

/**
 * 描述词典
 * 用于生成文本。
 * 描述词典变量名称为 组件名称 + TokenDescription。请勿修改变量命名，否则将导致 token 无法生成。
 */
const popoverTokenDescription = {
  popover: '气泡',
  warning: '警告',
  info: '提示',
  error: '错误',
  confirm: '确认',
};

/**
 * token 值映射表
 * 用于生成 token 的值，修改保存后将自动同步 type.ts popover.ts 的内容。
 * 值映射表变量名称为 组件名称 + TokenValue。请勿修改变量命名，否则将导致 token 无法生成。
 * 该映射表将根据规则自动生成，并与公共 token 进行合并。若有相同 token，将覆盖公共 token。默认不包含公共 token，除非在映射表中添加覆盖。
 * 注意，该映射表的内容不与 popoverRules 强关联，非 popoverRules 规则内的 token 需手动增加或删减。
 */
const popoverTokenValue = {
  font: { size: '14/regular', color: 'Neutral-text-5' },
  padding: { x: 'Padding-8', y: 'Padding-3' },
  radius: 'Radius-4',
  border: { width: 'Border-1', color: 'Neutral-border-1' },
  background: { color: 'Neutral-fill-1' },
  shadow: 'Shadow-2',
  success: {
    font: { color: '' },
    background: { color: '#edf9e8' },
    shadow: '',
    border: { color: 'rgba(82, 196, 26, 0.1)' },
  },
  warning: {
    font: { color: '' },
    background: { color: '#fff3e5' },
    shadow: '',
    border: { color: 'rgba(255, 140, 0, 0.1)' },
  },
  info: {
    font: { color: '' },
    background: { color: '#e8f1fe' },
    shadow: '',
    border: { color: 'rgba(25, 122, 250, 0.1)' },
  },
  danger: {
    font: { color: '' },
    background: { color: '#ffeded' },
    shadow: '',
    border: { color: 'rgba(255, 77, 80, 0.1)' },
  },
  error: {
    font: { color: 'Danger-7' },
    background: { color: 'Danger-1' },
    shadow: '',
    border: { color: 'Danger-1' },
  },
  confirm: {
    font: { size: '' },
    padding: { x: 'Padding-16', y: 'Padding-16' },
    background: { color: 'transparent' },
  },
};

const popoverTokenExtraValue = {};

module.exports = {
  popoverTokenValue,
  popoverTokenExtraValue,
  popoverTokenDescription,
};
