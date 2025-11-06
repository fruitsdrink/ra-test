import { Show, SimpleShowLayout, TextField } from "react-admin";

export const UserShow = () => {
  return (
    <Show title="用户详情">
      <SimpleShowLayout>
        <TextField source="id" />
        <TextField source="name" />
        <TextField source="email" />
        <TextField source="phone" />
      </SimpleShowLayout>
    </Show>
  );
};
