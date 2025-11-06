import { Edit, SimpleForm, TextInput } from "react-admin";

export const UserEdit = () => {
  return (
    <Edit title="编辑用户">
      <SimpleForm>
        <TextInput source="name" />
        <TextInput source="email" />
        <TextInput source="phone" />
      </SimpleForm>
    </Edit>
  );
};
