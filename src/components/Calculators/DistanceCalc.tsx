import { Button, Card, CardContent, Divider, Typography } from "@mui/material";
import { TimeInputGroup } from "../Inputs/TimeInputGroup";
import { CalculationResult } from "../CalculationResult";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { DistanceInputData } from "../../types";
import { calculateDistance } from "../../utils";

const distanceCalcFormInitialValues: DistanceInputData = {
  paceMinutes: 0,
  paceSeconds: 0,
  timeHours: 0,
  timeMinutes: 0,
  timeSeconds: 0,
};

export const DistanceCalc = () => {
  const [result, setResult] = useState<string>("0 km 0 m");

  const { control, handleSubmit } = useForm<DistanceInputData>({
    defaultValues: distanceCalcFormInitialValues,
    mode: "all",
  });

  const onSubmit = (data: DistanceInputData) => {
    const result = calculateDistance(data);
    setResult(result);
  };

  return (
    <Card>
      <CardContent>
        <Typography variant="h4">Distance Calculator</Typography>
        <Typography>
          Calculate distance you will cover running at a set pace in a given
          time.
        </Typography>
        <Divider sx={{ my: 2 }} />

        <form onSubmit={handleSubmit(onSubmit)} data-test="distance-calc-form">
          <TimeInputGroup
            label="Planned running pace:"
            namePrefix="pace"
            control={control}
          />

          <TimeInputGroup
            displayHoursInput
            label="Planned running time:"
            namePrefix="time"
            control={control}
          />

          <Button variant="contained" type="submit">
            Calculate
          </Button>

          <Divider sx={{ my: 2 }} />
          <CalculationResult label="Distance you will cover:" value={result} />
        </form>
      </CardContent>
    </Card>
  );
};
