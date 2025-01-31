import { Container } from "@mui/material";
import { DistanceCalc } from "../components/Calculators/DistanceCalc";
import { PaceCalc } from "../components/Calculators/PaceCalc";

export const CalcPage = () => {
  return (
    <Container maxWidth="xl">
      <DistanceCalc />
      <PaceCalc />
    </Container>
  );
};
