"use client";
import React, { lazy, useEffect, useState } from "react";
import { tables } from "./utils";

const Table = lazy(() => import("@/app/components/Table"));

const COST_PER_TABLE = 100;
const DISCOUNTED_COST_FOR_TWO = 150;
const DISCOUNTED_COST_FOR_THREE = 200;

const calculateTotalCost = (bookedTables: (typeof tables)[0][]) => {
  let cost = 0;
  const count = bookedTables.length;

  if (count === 2) {
    cost = DISCOUNTED_COST_FOR_TWO;
  } else if (count === 3) {
    cost = DISCOUNTED_COST_FOR_THREE;
  } else {
    cost = count * COST_PER_TABLE;
  }

  // Add table charges
  const tableCharges = bookedTables.reduce(
    (total, table) => total + table.charges,
    0
  );

  return cost + tableCharges;
};

const IndexPage = () => {
  const [isNewUser, setIsNewUser] = useState(false);
  const [bookedTables, setBookedTables] = useState<(typeof tables)[0][]>([]);
  const [totalCost, setTotalCost] = useState(0);

  const handleSelectTable = (table: (typeof tables)[0]) => {
    if (table.booked) {
      alert("Table is already booked");
      return;
    }

    setBookedTables((prev) => {
      if (prev.some((t) => t.id === table.id)) {
        return prev.filter((t) => t.id !== table.id);
      }
      return [...prev, table];
    });
  };

  const handleBooking = () => {
    alert("Tables booked successfully");
    setBookedTables([]);
  };

  useEffect(() => {
    const userId = localStorage.getItem("userId");
    if (!userId) {
      const newUserId = Math.random().toString(36).substring(2);
      localStorage.setItem("userId", newUserId);
      setIsNewUser(true);
    }
  }, []);

  useEffect(() => {
    const cost = calculateTotalCost(bookedTables);
    setTotalCost(cost);
  }, [bookedTables]);

  return (
    <div className=" bg-white min-h-screen flex justify-center items-center">
      <div className="container">
        <div className="bg-[#D9D9D9] rounded-[12px] py-10 text-center">
          <h1 className="text-2xl text-black font-semibold italic">
            Table Management (Floor 1)
          </h1>
        </div>

        <div className="flex gap-2 pt-1 md:flex-row flex-col">
          <div className="bg-[#91F4E885] md:w-[70%] h-fit">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {tables.map((table) => (
                <Table
                  key={table.id}
                  tableData={table}
                  onSelect={() => handleSelectTable(table)}
                />
              ))}
            </div>
          </div>

          <div className="md:w-[30%] md:px-0 px-3 text-black relative flex justify-between flex-col">
            <div>
              <div className="bg-[#D9D9D9] rounded-[12px] py-6 text-center">
                <h1 className="text-2xl text-black font-semibold italic">
                  Table Details
                </h1>
              </div>

              {bookedTables.length === 0 ? (
                <div className="text-center mt-5">
                  Select a table to view details
                </div>
              ) : (
                bookedTables?.map((table) => (
                  <>
                    <h3 className="font-semibold italic mt-3 text-lg">
                      Table - {table.number} (floor - 1)
                    </h3>

                    <div className="flex font-semibold mt-3 gap-2 italic">
                      <span className="min-w-[50%]">Capacity:</span>
                      <span className="">{table.number} Persons</span>
                    </div>
                    <div className="flex font-semibold mt-1 gap-2 italic">
                      <span className="min-w-[50%]">Additional Charges:</span>
                      <span className="">${table.charges}</span>
                    </div>
                    <div className="flex font-semibold mt-1 gap-2 italic">
                      <span className="min-w-[50%]">Specialty:</span>
                      <span className="">{table.speciality || "None"}</span>
                    </div>
                    <hr className="mt-3 border-black" />
                  </>
                ))
              )}

              <button
                className="bg-[#20EB71] rounded-[12px] w-full mt-3 font-semibold h-[45px]"
                onClick={handleBooking}
              >
                Select Tables
              </button>

              {isNewUser && (
                <>
                  <div className="flex my-3 justify-between">
                    <span>Subtotal:</span>
                    <span className="font-semibold italic">${totalCost}</span>
                  </div>
                  <div className="flex my-3 justify-between">
                    <span>New User discount:</span>
                    <span className="font-semibold italic">
                      10% (${totalCost * 0.1})
                    </span>
                  </div>
                </>
              )}

              <div className="flex my-3 justify-between">
                <span>Total cost</span>
                <span className="font-semibold italic">
                  ${!isNewUser ? totalCost : totalCost * 0.9}
                </span>
              </div>
            </div>

            <div className="my-5">
              <span>* A table cost $100</span>
              <div className="flex gap-2 px-2 mt-3">
                <div className="bg-[#D9D9D9] h-[20px] w-[20px]" />{" "}
                <span>Booked</span>
              </div>

              <div className="flex gap-2 px-2">
                <div className="bg-[#fff] h-[20px] w-[20px]" />{" "}
                <span>Vacant</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndexPage;
