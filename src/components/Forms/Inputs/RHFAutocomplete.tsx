import { Autocomplete, TextField } from "@mui/material";
import { Control, Controller, FieldPath, FieldValues } from "react-hook-form";
import {
  AutocompleteOption,
  DistanceCalcOnChange,
} from "../../../types/inputsData";

type RHFAutocompleteProps<T extends FieldValues> = {
  control: Control<T>;
  label: string;
  name: FieldPath<T>;
  onChange?: DistanceCalcOnChange;
  options: AutocompleteOption[];
};

export const RHFAutocomplete = <T extends FieldValues>({
  control,
  label,
  name,
  onChange,
  options,
}: RHFAutocompleteProps<T>) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <Autocomplete
          {...field}
          options={options}
          onChange={(_, value) =>
            onChange ? onChange(value) : field.onChange(value)
          }
          renderInput={(params) => <TextField {...params} label={label} />}
          sx={{ width: "250px" }}
        />
      )}
    />
  );
};
