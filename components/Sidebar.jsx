import Link from "next/link";
import { useRouter } from "next/router";
import Icon from "./icons/bar-chart-square-01.svg";
import Logo from "./icons/Logomark.svg";
import Settings from "./icons/settings-01.svg";
import Feed from "./icons/layout-grid-01.svg";
import Tags from "./icons/layout-alt-02.svg";

export default function Sidebar({ handleLogout }) {
  const router = useRouter();

  const restaurant = {
    icon: "fas fa-utensils",
  };
  const sidebarData = [
    {
      title: "Feed",
      icon: Feed,
      link: "/feed",
    },
    {
      title: "Hashtags",
      icon: Tags,
      link: "/hashtags",
    },
    {
      title: "Hoame",
      icon: Icon,
      link: "/",
    },
    {
      title: "Settings",
      icon: Settings,
      link: "/settings",
    },
  ];

  return (
    <nav className="panel-sidebar">
      <div className="main-nav">
        <div className="nav">
          <div className="header">
            {/* <a href="/"> */}
            {/* <Logo className="logo" /> */}
            <Link href={"/"}>
              <Logo className="logo" />
              {/* <Logo /> */}
              {/* <p>Logo</p> */}
            </Link>
            {/* </a> */}
          </div>
          <div className="navigation">
            {sidebarData.map((navItem) => (
              <Link href={navItem.link} key={navItem.title}>
                <div
                  className={`nav-item ${
                    navItem.link === router.pathname && "active"
                  }`}
                >
                  <navItem.icon />
                </div>
              </Link>
            ))}
          </div>
        </div>
        <div className="footer">
          <img src={restaurant.icon} className="avatar" alt="" />
        </div>
      </div>
    </nav>
  );
}
