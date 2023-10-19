import { useState } from 'react';
import classNames from 'classnames';
import { util, KeygenResult } from '@sheinx/hooks';
import { TransferClasses } from './transfer.type';
import { TransferListProps } from './transfer-list.type';
import TransferListItem from './transfer-list-item';
import Empty from '../empty';
import VirtualScroll from '../virtual-scroll';

const TransferList = <DataItem,>(props: TransferListProps<DataItem>) => {
  const {
    jssStyle,
    info,
    renderItem,
    footer,
    keygen,
    listHeight,
    lineHeight = 34,
    itemsInView = 20,
    colNum = 1,
    empty,
    onSelect,
  } = props;
  const { data, selectedKeys, disabledKeys } = info;
  const [currentIndex, setcurrentIndex] = useState(0);

  const styles = jssStyle?.transfer?.() || ({} as TransferClasses);
  const rootClass = classNames(styles.view);

  const getScrollHeight = () => {
    const rows = Math.ceil(data.length / colNum);
    return rows * lineHeight;
  };

  const handleChange = (key: KeygenResult, checked: boolean) => {
    onSelect(key, checked);
  };

  const handleScroll = (y: number) => {
    const current = Math.floor(y / lineHeight);
    if (current !== currentIndex) setcurrentIndex(current);
  };

  const renderHeader = () => {
    return <div className={styles.header}>Header</div>;
  };

  const renderEmpty = () => {
    if (!empty) {
      return (
        <div className={styles.empty}>
          <Empty jssStyle={jssStyle}></Empty>
        </div>
      );
    }
    return <div className={styles.empty}>{empty}</div>;
  };

  const renderList = () => {
    let items = data.slice(currentIndex, currentIndex + itemsInView);
    const scrollHeight = getScrollHeight();

    return (
      <div className={styles.list} style={{ height: listHeight }}>
        {items.length > 0 && (
          <VirtualScroll
            jssStyle={jssStyle}
            height={listHeight}
            scrollHeight={scrollHeight}
            translate={currentIndex * lineHeight}
            onScroll={handleScroll}
          >
            <div style={{ height: currentIndex * lineHeight, gridColumnEnd: '-1' }} />
            {items.map((d, i) => {
              const key = util.getKey(keygen, d, i);
              return (
                <TransferListItem
                  key={key}
                  jssStyle={jssStyle}
                  data={d}
                  keygen={keygen}
                  checked={selectedKeys.has(key)}
                  renderItem={renderItem}
                  onChange={handleChange}
                  disabled={disabledKeys.includes(d)}
                />
              );
            })}
          </VirtualScroll>
        )}
        {data && data.length === 0 && renderEmpty()}
      </div>
    );
  };

  const renderFooter = () => {
    if (!footer) {
      return null;
    }
    return <div className={styles.footer}>Footer</div>;
  };

  return (
    <div className={rootClass}>
      {renderHeader()}
      {renderList()}
      {renderFooter()}
    </div>
  );
};

export default TransferList;
