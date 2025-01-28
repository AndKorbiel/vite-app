import { Container, Typography } from "@mui/material";
import { TrainningPlanTable } from "../components/Tables/TrainningPlanTable";

export const Home = () => {
  return (
    <Container maxWidth="xl">
      <Typography variant="h1">Hello world</Typography>
      <TrainningPlanTable />
    </Container>
  );
};
