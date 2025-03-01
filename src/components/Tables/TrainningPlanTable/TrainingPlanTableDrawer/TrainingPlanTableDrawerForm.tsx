import { Button, Divider, Typography } from "@mui/material";
import { useForm } from "react-hook-form";

import { useAppDispatch } from "../../../../store/hooks";
import { addTrainingData } from "../../../../store/trainingDataSlice";
import { TrainingUnitDrawerFormData } from "../../../../types/inputsData";
import { TrainingDetails } from "../../../../types/main";
import {
  trainingFormInitialValues,
  TrainingUnitNumber,
} from "../../../../constants";
import { TimeInputGroup } from "../../../Forms/TimeInputGroup";
import { DistanceInputGroup } from "../../../Forms/DistanceInputGroup";
import { RHFInput } from "../../../Forms/Inputs/RHFInput";

type DrawerInputGroupProps = {
  onClose: () => void;
  trainingData: TrainingUnitDrawerFormData;
};

export const TrainingPlanTableDrawerForm = ({
  onClose,
  trainingData,
}: DrawerInputGroupProps) => {
  const { control, handleSubmit } = useForm<TrainingDetails>({
    defaultValues: trainingData.data ?? trainingFormInitialValues,
    mode: "all",
  });

  const dispatch = useAppDispatch();

  const onFormSubmit = (formData: TrainingDetails) => {
    dispatch(
      addTrainingData({
        result: formData,
        trainingUnit: trainingData.rowId as TrainingUnitNumber,
        weekId: trainingData.weekId,
      })
    );
  };

  return (
    <>
      <Typography variant="h6">Add training data</Typography>
      <Divider sx={{ mb: 2 }} />

      <form onSubmit={handleSubmit(onFormSubmit)}>
        <TimeInputGroup
          control={control}
          label="Time"
          namePrefix="time"
          displayHoursInput
          fullWidth
        />

        <DistanceInputGroup
          control={control}
          label="Distance"
          namePrefix="distance"
        />

        <TimeInputGroup
          control={control}
          label="Pace"
          namePrefix="pace"
          fullWidth
        />

        <RHFInput
          adornment="bpm"
          control={control}
          label="Pulse"
          name="pulse"
          fullWidth
          stringType
        />

        <Button sx={{ mt: 2, mr: 1 }} onClick={onClose}>
          Cancel
        </Button>

        <Button type="submit" variant="contained" sx={{ mt: 2 }}>
          Submit
        </Button>
      </form>
    </>
  );
};
