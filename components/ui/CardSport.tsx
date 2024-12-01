import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

export function AnimatedTestimonialsDemo() {
    const testimonials = [
        {
            quote:
                "J'ai eu l'occasion de réaliser le semi-marathon de Lyon en 2024. Je l'ai effectué en 1h37, c'était une expérience sportive très enrichissante.",
            name: "Semi Marathon",
            designation: "Lyon, France",
            src: "/lyon1.png",
        },
        {
            quote:
                "descrition",
            name: "Titre",
            designation: "Ville, Pays",
            src: "/lyon2.png",
        },
        {
            quote:
                "J'ai eu l'occasion de me lancer sur le trail de l'Etendard en 2024. Un parcours de 23km avec 1500m de dénivelé positif. Une expérience inoubliable.",
            name: "Trail de l'Etendard",
            designation: "Saint Sorlin d'Arves, France",
            src: "/etendard.png",
        },
        {
            quote:
                "Un parcours de 9km avec 700m (oui...) de dénivelé positif. Une course rapide et super technique. J'ai vraiment aimé.",
            name: "Trail de la Moucherotte",
            designation: "Grenoble, France",
            src: "/moucherotte.png",
        },
        {
            quote:
                "Je pratique également le vélo de route. L'été, je fais beaucoup de sorties seul ou en groupe. Un sport qui me plait beaucoup, surtout en montagne.",
            name: "Vélo",
            designation: "De partout",
            src: "/velo.png",
        },
    ];
    return <AnimatedTestimonials testimonials={testimonials} />;
}
