import { Fragment } from "react/jsx-runtime";
import { TrainingPlanData } from "../../types";
import { sortTableData } from "../../utils";
import { TableCell } from "@mui/material";
import { Drawer } from "../Drawer";

export const useGenerateTabledData = () => {
  const renderTableData = (data: TrainingPlanData) => {
    const sortedData = sortTableData(data);

    return Object.values(sortedData).map((trainingData, i) => {
      if (typeof trainingData === "object") {
        return (
          <Fragment key={i + trainingData.plan}>
            <TableCell>{trainingData.plan}</TableCell>
            <TableCell>
              {trainingData.result !== "" ? trainingData.result : <Drawer />}
            </TableCell>
          </Fragment>
        );
      } else {
        return (
          <TableCell key={trainingData?.toString() + i.toString()}>
            {trainingData}
          </TableCell>
        );
      }
    });
  };

  return { renderTableData };
};
