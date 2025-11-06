import {
  Datagrid,
  FunctionField,
  List,
  ReferenceField,
  TextField,
  TextInput,
  useRecordContext,
  ReferenceInput,
} from "react-admin";
import { ActionButtons } from "../../components/ActionButtons";

const PostPanel = () => {
  const record = useRecordContext();
  return <div>{record?.body}</div>;
};

export const PostList = () => {
  const postFilters = [
    <TextInput source="q" label="search" key={"q"} alwaysOn={true} />,
    <TextInput source="title" key={"title"} />,
    <ReferenceInput source="userId" reference="users" key={"userId"} />,
  ];
  return (
    <List title="文章列表" filters={postFilters}>
      <Datagrid
        expand={<PostPanel />}
        sx={{
          ".RaDatagrid-headerCell": {
            padding: "16px",
          },
          "& .RaDatagrid-rowCell:last-child, & .RaDatagrid-headerCell:last-child":
            {
              position: "sticky",
              right: 0,
            },
        }}
      >
        <TextField source="id" />
        <TextField source="title" />
        {/* <TextField source="body" label="内容" /> */}
        <FunctionField
          source="body"
          render={(record) => record.body.substring(0, 100) + "..."}
        />
        <ReferenceField source="userId" reference="users" link="show">
          <TextField source="name" />
        </ReferenceField>
        <ActionButtons />
      </Datagrid>
    </List>
  );
};
