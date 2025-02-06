import { Fragment } from "react/jsx-runtime";
import { TableCell } from "@mui/material";

import { sortTableData } from "../../utils";
import { Drawer } from "../Drawer";
import { DataCell } from "./DataCell";
import { TrainingUnitData } from "../../types/main";

export const useGenerateTabledData = () => {
  const renderTableData = (data: TrainingUnitData) => {
    const sortedData = sortTableData(data);

    return Object.entries(sortedData).map((trainingData, i) => {
      if (typeof trainingData[1] === "object") {
        return (
          <Fragment key={i + trainingData[0]}>
            <DataCell
              TrainingData={{
                data: trainingData[1].plan,
                rowId: trainingData[0],
                weekId: sortedData.weekId as number,
              }}
            />
            {trainingData[1].result ? (
              <DataCell
                showEditButton
                TrainingData={{
                  data: trainingData[1].result,
                  rowId: trainingData[0],
                  weekId: sortedData.weekId as number,
                }}
              />
            ) : (
              <TableCell>
                <Drawer
                  data={{
                    data: null,
                    rowId: trainingData[0],
                    weekId: sortedData.weekId as number,
                  }}
                />
              </TableCell>
            )}
          </Fragment>
        );
      } else {
        return (
          <TableCell key={trainingData?.toString() + i.toString()}>
            {trainingData[1]}
          </TableCell>
        );
      }
    });
  };

  return { renderTableData };
};
