import polyglotI18nProvider from "ra-i18n-polyglot";
import chineseMessages from "@haxqer/ra-language-chinese";

const messages = {
  ...chineseMessages,
  resources: {
    posts: {
      name: "文章",
      fields: {
        id: "ID",
        title: "标题",
        body: "内容",
        userId: "作者",
      },
    },
    users: {
      name: "用户",
      fields: {
        id: "ID",
        name: "姓名",
        email: "邮箱",
        phone: "电话",
      },
    },
  },
  search: "搜索",
  dashboard: "首页",
  homepage_title: "欢迎来到首页",
  homepage_description:
    "管理您的文章和用户，使用提供的工具高效管理。通过菜单导航开始使用。",
};

export const i18nProvider = polyglotI18nProvider(() => messages, "zn_CN");
