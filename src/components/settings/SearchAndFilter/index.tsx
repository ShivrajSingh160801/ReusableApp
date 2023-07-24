import { SearchOutlined } from '@ant-design/icons';
import { Col, Input, Row, Space, InputNumber, Select } from 'antd';
import React, { FC } from 'react';
import styles from './index.module.scss';
import { SearchAndFilterProps } from './types';
// For search filter and paginate
const SearchAndFilter: FC<SearchAndFilterProps> = (props) => {
  // Init
  const { performSearchHandler, searchValue ,settingComponent } = props;
  console.log(settingComponent);
  // JSX
  return (
    <>
    {settingComponent === 'organizations' ? 
    <div className={styles['search-filter']}>
      <div className={styles['search-filter__wrapper']}>
        <Row justify={'space-between'}>
          
          <Col>
            <Space>
              <Input
                placeholder="Search here.."
                suffix={<SearchOutlined />}
                onChange={performSearchHandler}
                value={searchValue}
              />
             
            </Space>
          </Col>
        </Row>
      </div>
    </div> : <div className={styles['search-filter']}>
      <div className={styles['search-filter__wrapper']}>
        <Row justify={'space-between'}>
          <Col>
            <InputNumber min={10} max={15} defaultValue={10} />
          </Col>
          <Col>
            <Space>
              <Input
                placeholder="Search here.."
                suffix={<SearchOutlined />}
                onChange={performSearchHandler}
                value={searchValue}
              />
              <Select
                defaultValue="filterOne"
                style={{ width: 200 }}
                options={[
                  { label: 'Filter One', value: 'filterOne' },
                  { label: 'Filter Second', value: 'filterSecond' },
                  { label: 'Filter Third', value: 'filterThird' },
                ]}
              />
            </Space>
          </Col>
        </Row>
      </div>
    </div>}
    
    </>
  );
};

export default SearchAndFilter;