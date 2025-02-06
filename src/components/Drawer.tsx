import { Box, Button, Drawer as MuiDrawer, styled } from "@mui/material";
import { useState } from "react";

import { AlertDialog } from "./AlertDialog";
import { DrawerInputGroup } from "./Inputs/DrawerInputGroup";
import { useAppDispatch } from "../store/hooks";
import { addTrainingData } from "../store/trainingDataSlice";
import { TrainingUnitNumber } from "../constants";
import { TrainingUnitDrawerFormData } from "../types/inputsData";

const StyledDrawer = styled(MuiDrawer)(() => ({
  width: "300px",
  "& .MuiModal-backdrop": {
    backgroundColor: "#00000061",
  },
}));

const onHoverStyles = {
  position: "absolute",
  bottom: 1,
  mt: 2,
  bgcolor: "#f5f5f5",
  p: 0.5,
};

type DrawerProps = {
  data: TrainingUnitDrawerFormData;
  displayOnOhver?: boolean;
  label?: string;
};

export const Drawer = ({ data, displayOnOhver, label }: DrawerProps) => {
  const dispatch = useAppDispatch();
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const [isAlertDialogOpen, setAlertDialogOpen] = useState(false);

  const toggleDrawer = (newState: boolean) => () => {
    setDrawerOpen(newState);
  };

  const handleClearData = () => {
    dispatch(
      addTrainingData({
        result: null,
        trainingUnit: data.rowId as TrainingUnitNumber,
        weekId: data.weekId,
      })
    );
  };

  return (
    <>
      <Box sx={displayOnOhver ? onHoverStyles : {}}>
        <AlertDialog
          open={isAlertDialogOpen}
          handleClose={() => setAlertDialogOpen(false)}
          handleOnConfirm={() => handleClearData()}
        />

        <Button
          onClick={toggleDrawer(true)}
          variant={displayOnOhver ? "contained" : "text"}
          size={displayOnOhver ? "small" : "medium"}
        >
          {label ?? "Add results"}
        </Button>

        {displayOnOhver && (
          <Button
            onClick={() => setAlertDialogOpen(true)}
            variant="contained"
            color="error"
            sx={{ ml: 0.5 }}
            size="small"
          >
            Clear
          </Button>
        )}
      </Box>

      <StyledDrawer
        open={isDrawerOpen}
        onClose={toggleDrawer(false)}
        sx={{ width: "300px" }}
        PaperProps={{ sx: { width: "450px", p: "2em" } }}
      >
        <DrawerInputGroup trainingData={data} onClose={toggleDrawer(false)} />
      </StyledDrawer>
    </>
  );
};
