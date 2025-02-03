import { Button, Divider, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import { TrainingInputData } from "../../types";
import { useAppDispatch } from "../../store/hooks";
import { addTrainingData } from "../../store/trainingDataSlice";
import { TrainingUnitNumber } from "../../constants";
import { TimeInputGroup } from "./TimeInputGroup";
import { DistanceInputGroup } from "./DistanceInputGroup";
import { RHFInput } from "./RHFInput";
import { transferDrawerFormData } from "../../utils";

const trainingFormInitialValues: TrainingInputData = {
  distanceKilometers: 0,
  distanceMeters: 0,
  paceMinutes: 0,
  paceSeconds: 0,
  pulse: 0,
  timeHours: 0,
  timeMinutes: 0,
  timeSeconds: 0,
};

type DrawerInputGroupProps = {
  data: { rowId: string; weekId: number };
};

export const DrawerInputGroup = ({ data }: DrawerInputGroupProps) => {
  const { control, handleSubmit } = useForm<TrainingInputData>({
    defaultValues: trainingFormInitialValues,
    mode: "all",
  });

  const dispatch = useAppDispatch();

  const onFormSubmit = (formData: TrainingInputData) => {
    const dataOutput = transferDrawerFormData(formData);

    dispatch(
      addTrainingData({
        result: dataOutput,
        trainingUnit: data.rowId as TrainingUnitNumber,
        weekId: data.weekId,
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

        <Button type="submit" variant="contained" sx={{ mt: 2 }}>
          Submit
        </Button>
      </form>
    </>
  );
};
