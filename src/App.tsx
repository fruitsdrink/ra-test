import { Admin, Resource } from "react-admin";
import ArticleIcon from "@mui/icons-material/Article";
import PeopleIcon from "@mui/icons-material/People";
import { Layout } from "./Layout";
import { dataProvider } from "./dataProvider";
import { i18nProvider } from "./i18nProvider";
import { PostList } from "./pages/posts/post-list";
import { UserList } from "./pages/users/user-list";
import { PostShow } from "./pages/posts/post-show";
import { UserShow } from "./pages/users/user-show";
import { PostEdit } from "./pages/posts/post-edit";
import { PostCreate } from "./pages/posts/post-create";
import { UserCreate } from "./pages/users/user-create";
import { UserEdit } from "./pages/users/user-edit";
import { Homepage } from "./pages/homepage";
import { authProvider } from "./authProvider";

export const App = () => (
  <Admin
    layout={Layout}
    dataProvider={dataProvider}
    i18nProvider={i18nProvider}
    dashboard={Homepage}
    authProvider={authProvider}
  >
    <Resource
      name="posts"
      list={PostList}
      show={PostShow}
      create={PostCreate}
      edit={PostEdit}
      icon={ArticleIcon}
      // options={{ label: "文章" }}
    />
    <Resource
      name="users"
      list={UserList}
      show={UserShow}
      create={UserCreate}
      edit={UserEdit}
      icon={PeopleIcon}
      // options={{ label: "用户" }}
    />
  </Admin>
);
