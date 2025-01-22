import { Button, Card, CardContent, Divider, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import { CustomOnDistanceDataChange, PaceInputData } from "../../types";
import { DistanceInputGroup } from "../Inputs/DistanceInputGroup";
import { TimeInputGroup } from "../Inputs/TimeInputGroup";
import { CalculationResult } from "../CalculationResult";
import { calculatePace } from "../../utils";
import { useState } from "react";

const paceCalcFormInitialValues = {
  distanceKilometers: 0,
  distanceMeters: 0,
  distanceSelectedValue: { label: "", id: 0 },
  timeHours: 0,
  timeMinutes: 0,
  timeSeconds: 0,
};

export const PaceCalc = () => {
  const [result, setResult] = useState<string>("0:00 min / km");

  const { control, handleSubmit, setValue, resetField } =
    useForm<PaceInputData>({
      defaultValues: paceCalcFormInitialValues,
      mode: "all",
    });

  const onSubmit = (data: PaceInputData) => {
    const result = calculatePace(data);
    setResult(result);
  };

  const onDistanceDataChange: CustomOnDistanceDataChange = (inputData) => {
    if (inputData && "id" in inputData) {
      setValue("distanceSelectedValue", inputData);
      resetField("distanceKilometers");
      resetField("distanceMeters");
    } else if (inputData && "target" in inputData) {
      setValue(
        inputData.target.name as keyof PaceInputData,
        Number(inputData.target.value)
      );
      resetField("distanceSelectedValue");
    }
  };

  return (
    <Card>
      <CardContent>
        <Typography variant="h4">Pace Calculator</Typography>
        <Typography>
          Calculate what running pace is required to achieve the planned result
          over a specific distance.
        </Typography>
        <Divider sx={{ my: 2 }} />

        <form onSubmit={handleSubmit(onSubmit)}>
          <DistanceInputGroup
            control={control}
            label="Planned distance:"
            namePrefix="distance"
            onChange={onDistanceDataChange}
          />

          <TimeInputGroup
            control={control}
            displayHoursInput
            label="Planned time result:"
            namePrefix="time"
          />

          <Button variant="contained" type="submit">
            Calculate
          </Button>

          <Divider sx={{ my: 2 }} />
          <CalculationResult label="Required pace:" value={result} />
        </form>
      </CardContent>
    </Card>
  );
};
