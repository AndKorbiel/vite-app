import { Button, Divider, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import { TrainingInputData } from "../../types";
import { RHFInput } from "./RHFInput";

const trainingFormInitialValues: TrainingInputData = {
  distance: "",
  pace: "",
  pulse: "",
  time: "",
};

export const DrawerInputGroup = () => {
  const { control, handleSubmit } = useForm<TrainingInputData>({
    defaultValues: trainingFormInitialValues,
    mode: "all",
  });

  const onFormSubmit = (data: TrainingInputData) => {
    console.log(data);
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
