import { Button, Drawer as MuiDrawer, styled } from "@mui/material";
import { useState } from "react";
import { DrawerInputGroup } from "./Inputs/DrawerInputGroup";

const StyledDrawer = styled(MuiDrawer)(() => ({
  width: "300px",
  "& .MuiModal-backdrop": {
    backgroundColor: "#00000061",
  },
}));

type DrawerProps = {
  data: { rowId: string; weekId: number };
};

export const Drawer = ({ data }: DrawerProps) => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  return (
    <>
      <Button onClick={toggleDrawer(true)}>Add results</Button>
      <StyledDrawer
        open={open}
        onClose={toggleDrawer(false)}
        sx={{ width: "300px" }}
        PaperProps={{ sx: { width: "450px", p: "2em" } }}
      >
        <DrawerInputGroup data={data} />
      </StyledDrawer>
    </>
  );
};
