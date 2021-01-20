import React from "react";
import Skeleton from "@material-ui/lab/Skeleton";
import Box from "@material-ui/core/Box";

export default function DataTableSkeleton({ lines = 10, props }) {
  return (
    <Box px={3} pt={2}>
      <Box align="right" mb={3}>
        <Skeleton variant="text" width="100%" animation="wave" />
      </Box>
      {new Array(lines).fill(null).map(() => (
        <Skeleton
          variant="text"
          key={Math.random(15)}
          height={50}
          animation="wave"
        />
      ))}
    </Box>
  );
}
