import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Skeleton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Typography,
} from "@mui/material";
import React from "react";
import Paper from "@mui/material/Paper";
const SelectedCard = ({ selectedPokemon }) => {
  if (!selectedPokemon)
    return (
      <Card className="skeleton-styles">
        <Skeleton animation="wave" height="300px" width="100%" />

        <CardContent>
          <Typography variant="h6">Select pokemon</Typography>
          <Skeleton animation="wave" height={20} width="100%" />
          <Skeleton animation="wave" height={20} width="100%" />
          <Skeleton animation="wave" height={20} width="100%" />
          <Skeleton animation="wave" height={20} width="100%" />
          <Skeleton animation="wave" height={20} width="100%" />
        </CardContent>
      </Card>
    );

  const { name, id, types, sprites, weight, stats } = selectedPokemon;

  const base_stat = stats.map((item) => {
    let name = "";
    switch (item.stat.name) {
      case "hp":
        name = "HP";
        break;
      case "special-attack":
        name = "SP Attack";
        break;
      case "special-defense":
        name = "SP Defense";
        break;

      default:
        name = item.stat.name;
    }
    return {
      name,
      value: item.base_stat,
    };
  });

  const rows = [
    {
      name: "type",
      value: types,
    },
    {
      name: "weight",
      value: weight,
    },
    ...base_stat,
  ];
  return (
    <Card className="selected-styles">
      <CardMedia
        component="img"
        height="300"
        image={`${sprites.front_default}`}
        alt="Pokemon"
      />
      <CardContent>
        <Typography variant="h6">
          {name} #{id}
        </Typography>

        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell
                    component="th"
                    scope="row"
                    sx={{ textTransform: "capitalize" }}
                  >
                    {row.name}
                  </TableCell>
                  {typeof row.value === "object" ? (
                    <TableCell
                      align="right"
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                        textTransform: "capitalize",
                      }}
                    >
                      {row.value.map((item, i) => (
                        <Box key={i}>{item.type.name}</Box>
                      ))}
                    </TableCell>
                  ) : (
                    <TableCell align="right">{row.value}</TableCell>
                  )}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </CardContent>
    </Card>
  );
};

export default SelectedCard;
