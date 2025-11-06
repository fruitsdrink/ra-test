import { Show, SimpleShowLayout, TextField } from "react-admin";

export const PostShow = () => {
  return (
    <Show title="文章详情">
      <SimpleShowLayout>
        <TextField source="id" />
        <TextField source="title" />
        <TextField source="body" />
      </SimpleShowLayout>
    </Show>
  );
};
