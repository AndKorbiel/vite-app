import { useState } from "react";
import { Drawer } from "../Drawer";
import { TrainingUnitDrawerFormData } from "../../types";

type EditButtonProps = {
  trainingUnitData: TrainingUnitDrawerFormData;
};

export const useDisplayEditButton = () => {
  const [isHovered, setIsHovered] = useState(true);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const EditButton = ({ trainingUnitData }: EditButtonProps) => {
    return (
      isHovered && (
        <Drawer
          data={{
            data: trainingUnitData.data,
            rowId: trainingUnitData.rowId,
            weekId: trainingUnitData.weekId as number,
          }}
          displayOnOhver
          label="Edit"
        />
      )
    );
  };

  return { EditButton, handleMouseEnter, handleMouseLeave };
};
