import { InputAdornment, TextField } from "@mui/material";
import { Control, Controller, FieldPath, FieldValues } from "react-hook-form";
import { CustomOnDistanceDataChange } from "../../types";

type RHFInputProps<T extends FieldValues> = {
  adornment: string;
  control: Control<T>;
  fullWidth?: boolean;
  label: string;
  name: FieldPath<T>;
  onChange?: CustomOnDistanceDataChange;
  stringType?: boolean;
};

export const RHFInput = <
  T extends Record<string, unknown> = Record<string, string>
>({
  adornment,
  control,
  fullWidth,
  label,
  name,
  onChange,
  stringType,
}: RHFInputProps<T>) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <TextField
          {...field}
          type={stringType ? "string" : "number"}
          label={label}
          variant="outlined"
          sx={{ m: 1, width: fullWidth ? "100%" : "25%" }}
          slotProps={{
            input: {
              startAdornment: (
                <InputAdornment position="start" sx={{ order: 2 }}>
                  {adornment}
                </InputAdornment>
              ),
            },
          }}
          onChange={(e) => (onChange ? onChange(e) : field.onChange(e))}
        />
      )}
    />
  );
};
