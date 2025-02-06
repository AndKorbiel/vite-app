import { useState } from "react";

import { Drawer } from "../Drawer";
import { TrainingUnitDrawerFormData } from "../../types/inputsData";

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
        <Drawer
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
