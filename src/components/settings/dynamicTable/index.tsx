import React, { ChangeEvent } from "react";
import { Table } from "antd";
import "./index.css";
import SearchAndFilter from "../SearchAndFilter";

interface DynamicTableProps {
  columns: any;
  data: any;
  performSearchHandler: (event: ChangeEvent<HTMLInputElement>) => void;
  searchValue: string;
  settingComponent : string
}

const DynamicTable: React.FC<DynamicTableProps> = ({
  columns,
  data,
  performSearchHandler,
  searchValue,
  settingComponent
}) => (
  <div >
    <SearchAndFilter
      performSearchHandler={performSearchHandler}
      searchValue={searchValue}
      settingComponent = {settingComponent}
    />
    <Table
      columns={columns}
      dataSource={data}
      pagination={{
        position: ["bottomCenter"],
        style: { color: "black" },
      }}
      size="small"

    />
  </div>
);

export default DynamicTable;
