import { Button, Divider, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import { TrainingInputData } from "../../types";
import { RHFInput } from "./RHFInput";
import { useAppDispatch } from "../../store/hooks";
import { addTrainingData } from "../../store/trainingDataSlice";
import { TrainingUnitNumber } from "../../constants";

const trainingFormInitialValues: TrainingInputData = {
  distance: "",
  pace: "",
  pulse: "",
  time: "",
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
    const { distance, pace, pulse, time } = formData;
    const dataOutput = `Distance: ${distance}, Pace: ${pace}, Pulse: ${pulse}, Time: ${time}`;

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
        <RHFInput
          adornment="h:mm"
          control={control}
          label="Time"
          name="time"
          fullWidth
          stringType
        />

        <RHFInput
          adornment="min/km"
          control={control}
          label="Pace"
          name="pace"
          fullWidth
          stringType
        />

        <RHFInput
          adornment="km"
          control={control}
          label="Distance"
          name="distance"
          fullWidth
          stringType
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
