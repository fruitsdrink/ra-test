import { Datagrid, List, TextField } from "react-admin";
import { ActionButtons } from "../../components/ActionButtons";

const UserList = () => {
  return (
    <List title="用户列表">
      <Datagrid
        sx={{
          "& .RaDatagrid-rowCell:last-child, & .RaDatagrid-headerCell:last-child":
            {
              position: "sticky",
              right: 0,
            },
        }}
      >
        <TextField source="id" />
        <TextField source="name" />
        <TextField source="email" />
        <TextField source="phone" />
        <ActionButtons />
      </Datagrid>
    </List>
  );
};

export { UserList };
