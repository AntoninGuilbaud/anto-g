import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";

export function TimelineDemo() {
    const data = [
        {
            title: "2024",
            content: (
                <div>
                    <div className="flex items-center gap-6 mb-4">
                        <Image
                            src="/puma.png"
                            alt="Logo de l'entreprise 2024"
                            width={50}
                            height={50}
                            className="rounded-lg invert"
                        />
                        <div className="flex flex-col gap-1">
                            <h3 className="text-lg font-bold">Ambassadeur Puma</h3>
                            <p className="text-neutral-800 dark:text-neutral-200 text-sm">
                                Vendeur expert running pour Puma, j&apos;ai conseillé les clients chez Intersport durant 5 samedis, en offrant un accueil personnalisé et des recommandations adaptées à leurs besoins.
                            </p>
                            <p className="text-neutral-500 dark:text-neutral-400 text-xs">
                                Septembre - Octobre
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center gap-6 mb-4">
                        <Image
                            src="/novapy.jpg"
                            alt="Logo de l'entreprise 2024"
                            width={50}
                            height={50}
                            className="rounded-lg"
                        />
                        <div className="flex flex-col gap-1">
                            <h3 className="text-lg font-bold">Manutentionnaire</h3>
                            <p className="text-neutral-800 dark:text-neutral-200 text-sm">
                                mise à jour de meubles dans les Sephora de Lyon Herriot et Lyon Part Dieu, pour la marque ILIA / changement de grille / cassette / déblistérisation + inventaire.
                            </p>
                            <p className="text-neutral-500 dark:text-neutral-400 text-xs">
                                Aout
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center gap-6 mb-4">
                        <Image
                            src="/villedebron.png"
                            alt="Logo de l'entreprise 2024"
                            width={50}
                            height={50}
                            className="rounded-lg"
                        />
                        <div className="flex flex-col gap-1">
                            <h3 className="text-lg font-bold">Agent contractuel adjoint technique
                            </h3>
                            <p className="text-neutral-800 dark:text-neutral-200 text-sm">
                                Pour la ville de Bron : gestion de la caisse du centre nautique (ouverture, fermeture, logiciel) et entretien des sols, sanitaires, douches, et bassins.
                            </p>
                            <p className="text-neutral-500 dark:text-neutral-400 text-xs">
                                Juillet
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center gap-6 mb-4">
                        <Image
                            src="/asics.png"
                            alt="Logo de l'entreprise 2024"
                            width={50}
                            height={50}
                            className="rounded-lg invert"
                        />
                        <div className="flex flex-col gap-1">
                            <h3 className="text-lg font-bold">Ambassadeur Asics
                            </h3>
                            <p className="text-neutral-800 dark:text-neutral-200 text-sm">
                                Vendeur expert running pour Asics, j&apos;ai conseillé les clients chez Intersport durant 8 samedis, en offrant un accueil personnalisé et des recommandations adaptées à leurs besoins.
                            </p>
                            <p className="text-neutral-500 dark:text-neutral-400 text-xs">
                                Mars - Mai
                            </p>
                        </div>
                    </div>
                </div>
            ),
        },
        {
            title: "2023",
            content: (
                <div>
                    <div className="flex items-center gap-4 mb-4">
                        <Image
                            src="/credit-mutuel.png"
                            alt="Logo de l'entreprise 2023"
                            width={50}
                            height={50}
                            className="rounded-lg"
                        />
                        <div className="flex flex-col gap-1">
                            <h3 className="text-lg font-bold">Auxiliaire Vacances Banque
                            </h3>
                            <p className="text-neutral-800 dark:text-neutral-200 text-sm">
                                Accueil et animation à l&apos;agence Crédit Mutuel Enseignant de Villeurbanne : gestion des rendez-vous, organisation de l&apos;espace, et renseignements sur les services proposés.
                            </p>
                            <p className="text-neutral-500 dark:text-neutral-400 text-xs">
                                Aout
                            </p>
                        </div>
                    </div>
                </div>
            ),
        },
        {
            title: "2019",
            content: (
                <div>
                    <div className="flex items-center gap-4 mb-4">
                        <Image
                            src="/saintpri.jpeg"
                            alt="Logo de l'entreprise 2019"
                            width={50}
                            height={50}
                            className="rounded-lg"
                        />
                        <div className="flex flex-col gap-1">
                            <h3 className="text-lg font-bold">Stagiaire</h3>
                            <p className="text-neutral-800 dark:text-neutral-200 text-sm">
                                - Stage d&apos;observation de 3ème d&apos;une durée d&apos;une semaine.<br />
                                - Découverte du métier d&apos;ingénieur du son, l&apos;enregistrement en studio, montage et démontage d&apos;une scène musicale.
                            </p>
                            <p className="text-neutral-500 dark:text-neutral-400 text-xs">
                                Décembre 2019
                            </p>
                        </div>
                    </div>
                </div>
            ),
        },
    ];
    return (
        <div className="w-full">
            <Timeline data={data} />
        </div>
    );
}
