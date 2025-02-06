import { Container } from "@mui/material";

import { TrainningPlanTable } from "../components/Tables/TrainningPlanTable";

export const Home = () => {
  return (
    <Container maxWidth="xl">
      <TrainningPlanTable />
    </Container>
  );
};
