import { Box, Card, CardContent, Typography } from "@mui/material";
import { useTranslate } from "react-admin";

export const Homepage = () => {
  const translate = useTranslate();
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Card
        sx={{
          maxWidth: 400,
          padding: 2,
          textAlign: "center",
        }}
      >
        <CardContent>
          <Typography variant="h4" component={"div"} gutterBottom>
            {translate("homepage_title", {
              defaultValue: "Welcome to the homepage",
            })}
          </Typography>
          <Typography variant="body1" color="text.secondary">
            {translate("homepage_description", {
              defaultValue:
                "Manage your posts and users efficiently with the tools provided. Navigate through the menu to get started.",
            })}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};
