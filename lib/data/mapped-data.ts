import { Navlink } from "../interface";
import { FaBlog } from "react-icons/fa6";
import { LuTags } from "react-icons/lu";
import { BsFolder2Open } from "react-icons/bs";
import { VscGithubAlt } from "react-icons/vsc";

const navlinks: Navlink[] = [
    { name: "Projects", link: "/arena", visible: "sm", icon: BsFolder2Open },
    { name: "Pricing", link: "/competitions", visible: "md", icon: LuTags },
    { name: "Blog", link: "/how-it-works", visible: "md", icon: FaBlog },
    {
        name: "Github",
        link: "/national-leaderboard",
        visible: "md",
        icon: VscGithubAlt,
    },
];

export { navlinks };
