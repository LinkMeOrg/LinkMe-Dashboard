import {
  HomeIcon,
  TableCellsIcon,
  ServerStackIcon,
  UserGroupIcon,
} from "@heroicons/react/24/solid";
import { Home } from "@/pages/dashboard";
import { SignIn } from "@/pages/auth";
import User from "./pages/dashboard/Users";
import Message from "./pages/dashboard/Message";

const icon = {
  className: "w-5 h-5 text-inherit",
};

export const routes = [
  {
    layout: "dashboard",
    pages: [
      {
        icon: <HomeIcon {...icon} />,
        name: "dashboard",
        path: "/home",
        element: <Home />,
      },
      {
        icon: <UserGroupIcon {...icon} />,
        name: "users",
        path: "/users",
        element: <User />,
      },
      {
        icon: <TableCellsIcon {...icon} />,
        name: "message",
        path: "/message",
        element: <Message />,
      },
    ],
  },
  {
    layout: "auth",
    pages: [
      {
        icon: <ServerStackIcon {...icon} />,
        name: "sign in",
        path: "/sign-in",
        element: <SignIn />,
      },
    ],
  },
];

export default routes;
