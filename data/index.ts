import { FaReact, FaNodeJs, FaDatabase, FaHome, FaJava, FaGitlab, FaHtml5, FaJs } from "react-icons/fa";
import { IconType } from "react-icons";
import { SiHey, SiCsswizardry, SiPostgresql } from "react-icons/si";
import { GoProjectSymlink } from "react-icons/go";
import { TbMusicShare } from "react-icons/tb";
import { LuMessageSquare } from "react-icons/lu";
import { IoLogoFirebase } from "react-icons/io5";
import { BsFiletypeSql } from "react-icons/bs";
import { RiTailwindCssFill } from "react-icons/ri";
import { DiMongodb } from "react-icons/di";




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
        title: "Passionné par le développement web",
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
        description: "Pouvoir continuer de m'améliorer en développant des applications web modernes.",
        className: "lg:col-span-2 md:col-span-3 md:row-span-2 flex flex-col justify-center items-center text-center",
        imgClassName: "",
        titleClassName: "justify-center md:max-w-full max-w-60 text-center",
        img: "",
        spareImg: "",
    },
];

export const recentprojects = [
    {
        id: 1,
        title: "Finanto",
        des: "Développement d'une application web qui permet de gérer ses dépenses du mois et d'envoyer un recap à la personne de votre choix.",
        img: "/Finanto.png",
        link: "https://finanto-209ed.web.app/",
        icons: [FaReact, FaNodeJs, FaJs, IoLogoFirebase, RiTailwindCssFill],
        gp: 7,
    },
    {
        id: 2,
        title: "Musevag",
        des: "Développement d'une application web visant à mettre en avant le patrimoine culturel de France.",
        img: "/musevag-main.png",
        link: "/underconstruction",
        icons: [FaReact, FaNodeJs, FaJs, RiTailwindCssFill, DiMongodb],
        gp: 7,
    },
    {
        id: 3,
        title: "Wed'Dreamer",
        des: "Dans le cadre de mon BUT informatique, j'ai développé une application lourde dédiée à l’organisation d’événements de mariage.",
        img: "/main-webddreamer.webp",
        link: "https://github.com/AntoninGuilbaud/MEGA_SAE_S2",
        icons: [FaJava, FaGitlab, SiCsswizardry],
        gp: 5,
    },
    {
        id: 4,
        title: "S.Guilbaud",
        des: "Pour ce projet, j’ai développé un site web pour une professeure de musique de collège, Sophie Guilbaud, afin de mettre en valeur ses activités.",
        img: "/main-sguilbaud.webp",
        link: "https://cvha-jean-moulin.web.app",
        icons: [FaHtml5, SiCsswizardry, FaJs, IoLogoFirebase],
        gp: 1,
    },
    {
        id: 5,
        title: "BDD Nutriscore",
        des: "Dans ce projet, nous avons exploité une base de données open source contenant des milliers de produits classés par Nutri-Score, pays d'origine, catégorie, etc.",
        img: "/main-bdd-nutriscore.webp",
        link: "https://github.com/AntoninGuilbaud/SAE1.04",
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
