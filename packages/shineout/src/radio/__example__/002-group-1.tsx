/**
 * cn -
 *    -- 将一组 Radio 放在 Radio.Group 中，以 React 组件方式调用。
 * en -
 *    -- A series of radios group by Radio.Group.
 */
import React from 'react';
import { Radio } from 'shineout';

const data: string[] = ['red', 'orange', 'yellow', 'green', 'cyan', 'blue', 'violet'];

const App: React.FC = () => (
  <>
    <Radio.Group
      keygen
      defaultValue='yellow'
      onChange={(...args) => {
        console.log(args);
      }}
    >
      {data.map((d) => (
        <Radio key={d} htmlValue={d}>
          {d}
        </Radio>
      ))}
    </Radio.Group>
  </>
);
export default App;
