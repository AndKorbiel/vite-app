import { InputAdornment, TextField } from "@mui/material";
import { Control, Controller, FieldPath, FieldValues } from "react-hook-form";

type RHFInputProps<T extends FieldValues> = {
  adornment: string;
  control: Control<T>;
  label: string;
  name: FieldPath<T>;
};

export const RHFInput = <
  T extends Record<string, unknown> = Record<string, string>
>({
  adornment,
  control,
  label,
  name,
}: RHFInputProps<T>) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <TextField
          type="number"
          label={label}
          variant="outlined"
          sx={{ m: 1, width: "25%" }}
          slotProps={{
            input: {
              startAdornment: (
                <InputAdornment position="start" sx={{ order: 2 }}>
                  {adornment}
                </InputAdornment>
              ),
            },
          }}
          {...field}
        />
      )}
    />
  );
};
