import Mock from "mockjs";
import { GetAdminList } from "@/types/mock";
// 登录
Mock.mock(/\/getAdminList/, "get", (options:GetAdminList) => {
  const {currentPage,pageSize} = JSON.parse(options.body);
  let num = "list|" + pageSize;

 let list = Mock.mock({
    [num]: [
      {
        name: "@cname",
        "age|18-28": 0,
        sex: "@boolean",
        date: '@datetime("yyyy-MM-dd")',
        addrName: "@province()-@city()-@county()",
        addr: ["11", "1101", "110101"],
        id: "@id",
        desc:'@cparagraph(1)'
      },
    ],
  });
  list.pageSize=pageSize
  list.currentPage=currentPage
  list.total=121
  return {
    code: 1,
    message: "获取成功",
    data: list,
  };
});
