import React from "react";

// const BookingButton = React.lazy(() => import("./BookingButton"));

type TableProps = {
  tableData: {
    number: number;
    capacity: number;
    price: number;
    speciality: string;
    booked: boolean;
  };
  onSelect: () => void;
};

const Table: React.FC<TableProps> = React.memo(({ tableData, onSelect }) => {
  const { number, booked } = tableData;

  return (
    <div className="border-r border-[#000] cursor-pointer" onClick={onSelect}>
      <div className="flex justify-center items-end py-8 gap-2">
        <div
          className={`h-[58px] w-[13px] bg-${!booked ? "white" : "[#D9D9D9]"}`}
        />
        <div
          className={`h-[90px] w-[150px] bg-${
            !booked ? "white" : "[#D9D9D9]"
          } rounded-lg`}
        />
        <div
          className={`h-[58px] w-[13px] bg-${!booked ? "white" : "[#D9D9D9]"}`}
        />
      </div>
      <div className="bg-[#D9D9D9] py-2 text-center text-black font-semibold italic">
        Table - {number}
      </div>
    </div>
  );
});

Table.displayName = "Table";

export default Table;
