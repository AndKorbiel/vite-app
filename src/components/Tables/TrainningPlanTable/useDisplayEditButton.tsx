import { useState } from "react";

import { TrainingPlanTableDrawer } from "./TrainingPlanTableDrawer/TrainingPlanTableDrawer";
import { TrainingUnitDrawerFormData } from "../../../types/inputsData";

type EditButtonProps = {
  TrainingData: TrainingUnitDrawerFormData;
};

export const useDisplayEditButton = () => {
  const [isHovered, setIsHovered] = useState(true);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const EditButton = ({ TrainingData }: EditButtonProps) => {
    return (
      isHovered && (
        <TrainingPlanTableDrawer
          data={{
            data: TrainingData.data,
            rowId: TrainingData.rowId,
            weekId: TrainingData.weekId as number,
          }}
          displayOnOhver
          label="Edit"
        />
      )
    );
  };

  return { EditButton, handleMouseEnter, handleMouseLeave };
};
