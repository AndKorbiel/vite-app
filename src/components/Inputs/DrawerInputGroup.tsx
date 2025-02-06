import { Button, Divider, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import {
  TrainingUnitDataDetails,
  TrainingUnitDrawerFormData,
} from "../../types";
import { useAppDispatch } from "../../store/hooks";
import { addTrainingData } from "../../store/trainingDataSlice";
import { trainingFormInitialValues, TrainingUnitNumber } from "../../constants";
import { TimeInputGroup } from "./TimeInputGroup";
import { DistanceInputGroup } from "./DistanceInputGroup";
import { RHFInput } from "./RHFInput";

type DrawerInputGroupProps = {
  onClose: () => void;
  trainingData: TrainingUnitDrawerFormData;
};

export const DrawerInputGroup = ({
  onClose,
  trainingData,
}: DrawerInputGroupProps) => {
  const { control, handleSubmit } = useForm<TrainingUnitDataDetails>({
    defaultValues: trainingData.data ?? trainingFormInitialValues,
    mode: "all",
  });

  const dispatch = useAppDispatch();

  const onFormSubmit = (formData: TrainingUnitDataDetails) => {
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
