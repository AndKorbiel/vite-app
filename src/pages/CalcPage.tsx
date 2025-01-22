import { Container, Typography } from "@mui/material";
import { DistanceCalc } from "../components/Calculators/DistanceCalc";
import { PaceCalc } from "../components/Calculators/PaceCalc";

export const CalcPage = () => {
  return (
    <Container maxWidth="xl">
      <Typography variant="h1">Calculators</Typography>
      <DistanceCalc />
      <PaceCalc />
    </Container>
  );
};
