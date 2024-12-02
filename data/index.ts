import { FaReact, FaNodeJs, FaDatabase, FaHome, FaJava, FaGitlab, FaHtml5, FaJs } from "react-icons/fa";
import { IconType } from "react-icons";
import { SiHey, SiCsswizardry, SiPostgresql } from "react-icons/si";
import { GoProjectSymlink } from "react-icons/go";
import { TbMusicShare } from "react-icons/tb";
import { LuMessageSquare } from "react-icons/lu";
import { IoLogoFirebase } from "react-icons/io5";
import { BsFiletypeSql } from "react-icons/bs";


interface NavItem {
    name: string;
    link: string;
    icon: IconType;
}

export const navItems: NavItem[] = [
    { name: "Accueil", link: "/", icon: FaHome },
    { name: "Présentation", link: "#about", icon: SiHey },
    { name: "Projets", link: "#projects", icon: GoProjectSymlink },
    { name: "Extra", link: "#extra", icon: TbMusicShare },
    { name: "Contact", link: "#contact", icon: LuMessageSquare },
];


export const gridItems = [
    {
        id: 1,
        title: "Je prête une attention particulière aux règles de l'UX/UI",
        description: "",
        className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
        imgClassName: "w-full h-full",
        titleClassName: "justify-end",
        img: "/ux.jpg",
        spareImg: "",
    },
    {
        id: 2,
        title: "Passioné par le développement web",
        description: "",
        className: "lg:col-span-2 md:col-span-3 md:row-span-2",
        imgClassName: "",
        titleClassName: "justify-start",
        img: "/devweb.png",
        spareImg: "",
    },
    {
        id: 3,
        title: "Mon objectif ?",
        description: "Développer des applications web et mobiles modernes et originals.",
        className: "lg:col-span-2 md:col-span-3 md:row-span-2 flex flex-col justify-center items-center text-center",
        imgClassName: "",
        titleClassName: "flex justify-center",
        img: "",
        spareImg: "",
    },
];

export const recentprojects = [
    {
        id: 1,
        title: "Musevag",
        des: "Développement d'une application web visant à mettre en avant le patrimoine culturel de France.",
        img: "/musevag-main.png",
        link: "https://github.com/adrianhajdin/iphone",
        icons: [FaReact, FaNodeJs, FaJs],
        gp: 7,
    },
    {
        id: 2,
        title: "Wed'Dreamer",
        des: "Dans le cadre de mon BUT informatique, j'ai développé une application lourde dédiée à l’organisation d’événements de mariage.",
        img: "/main-webddreamer.webp",
        link: "https://github.com/",
        icons: [FaJava, FaGitlab, SiCsswizardry],
        gp: 5,
    },
    {
        id: 3,
        title: "S.Guilbaud",
        des: "Pour ce projet, j’ai développé un site web pour une professeure de musique de collège, Sophie Guilbaud, afin de mettre en valeur ses activités.",
        img: "/main-sguilbaud.webp",
        link: "https://github.com/adrianhajdin/zoom-clone",
        icons: [FaHtml5, SiCsswizardry, FaJs, IoLogoFirebase],
        gp: 1,
    },
    {
        id: 4,
        title: "BDD Nutriscore",
        des: "Dans ce projet, nous avons exploité une base de données open source contenant des milliers de produits classés par Nutri-Score, pays d'origine, catégorie, etc.",
        img: "/main-bdd-nutriscore.webp",
        link: "https://github.com/adrianhajdin/ai_saas_app",
        icons: [FaDatabase, SiPostgresql, BsFiletypeSql],
        gp: 2,
    },
];


export const socialMedia = [
    {
        id: 1,
        img: "/git.svg",
        link: "https://github.com/AntoninGuilbaud"  // Remplace par ton lien GitHub
    },
    {
        id: 2,
        img: "/insta.svg",
        link: "https://www.instagram.com/anto__g/"  // Remplace par ton lien Instagram
    },
    {
        id: 3,
        img: "/link.svg",
        link: "https://www.linkedin.com/in/antonin-guilbaud-b8656828b/"  // Remplace par ton lien LinkedIn
    },
];
