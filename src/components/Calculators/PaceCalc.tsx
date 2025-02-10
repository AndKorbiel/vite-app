import { Button, Card, CardContent, Divider, Typography } from "@mui/material";
import { useState } from "react";
import { Path, useForm } from "react-hook-form";

import { DistanceInputGroup } from "../Forms/DistanceInputGroup";
import { TimeInputGroup } from "../Forms/TimeInputGroup";
import { CalculationResult } from "../CalculationResult";
import { calculatePace } from "../../utils";
import { DistanceCalcOnChange, PaceInputData } from "../../types/inputsData";

const paceCalcFormInitialValues = {
  distance: { kilometers: 0, meters: 0 },
  distanceSelectedValue: { label: "", id: 0 },
  time: { hours: 0, minutes: 0, seconds: 0 },
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

  const onDistanceDataChange: DistanceCalcOnChange = (inputData) => {
    if (inputData && "id" in inputData) {
      setValue("distanceSelectedValue", inputData);
      resetField("distance.kilometers");
      resetField("distance.meters");
    } else if (inputData && "target" in inputData) {
      setValue(
        inputData.target.name as Path<PaceInputData>,
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
            displayDistanceOptions
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
