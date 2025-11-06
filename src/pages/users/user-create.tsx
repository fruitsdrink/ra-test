import { Create, SimpleForm, TextInput } from "react-admin";

export const UserCreate = () => {
  return (
    <Create title="创建用户">
      <SimpleForm>
        <TextInput source="name" />
        <TextInput source="email" />
        <TextInput source="phone" />
      </SimpleForm>
    </Create>
  );
};
