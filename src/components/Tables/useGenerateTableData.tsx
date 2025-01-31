import { Fragment } from "react/jsx-runtime";
import { TrainingPlanData } from "../../types";
import { sortTableData } from "../../utils";
import { TableCell } from "@mui/material";
import { Drawer } from "../Drawer";

export const useGenerateTabledData = () => {
  const renderTableData = (data: TrainingPlanData) => {
    const sortedData = sortTableData(data);

    return Object.entries(sortedData).map((trainingData, i) => {
      if (typeof trainingData[1] === "object") {
        return (
          <Fragment key={i + trainingData[1].plan}>
            <TableCell>{trainingData[1].plan}</TableCell>
            <TableCell>
              {trainingData[1].result !== "" ? (
                trainingData[1].result
              ) : (
                <Drawer
                  data={{
                    rowId: trainingData[0],
                    weekId: sortedData.weekId as number,
                  }}
                />
              )}
            </TableCell>
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
