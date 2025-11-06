import { EditButton, DeleteButton } from "react-admin";
import { Box } from "@mui/material";

export const ActionButtons = () => (
  <Box sx={{ display: "flex", gap: 1, justifyContent: "flex-end" }}>
    <EditButton />
    <DeleteButton />
  </Box>
);
