import { Create, ReferenceInput, SimpleForm, TextInput } from "react-admin";

export const PostCreate = () => {
  return (
    <Create title="创建文章">
      <SimpleForm>
        <ReferenceInput source="userId" reference="users" />
        <TextInput source="title" />
        <TextInput source="body" multiline rows={5} />
      </SimpleForm>
    </Create>
  );
};
