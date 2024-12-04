"use client"

import * as React from "react"
import { Minus, Plus } from "lucide-react"
import { Bar, BarChart, ResponsiveContainer } from "recharts"
import Link from "next/link"




import { Button } from "@/components/ui/button"
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer"

const data = [
    { goal: 400 },
    { goal: 300 },
    { goal: 200 },
    { goal: 300 },
    { goal: 200 },
    { goal: 278 },
    { goal: 189 },
    { goal: 239 },
    { goal: 300 },
    { goal: 200 },
    { goal: 278 },
    { goal: 189 },
    { goal: 349 },
]

export function DrawerDemo({ buttonText }: { buttonText: string }) {
    const [goal, setGoal] = React.useState(350)

    function onClick(adjustment: number) {
        setGoal(Math.max(200, Math.min(400, goal + adjustment)))
    }

    return (
        <Drawer>
            <DrawerTrigger asChild>
                <Button variant="outline">{buttonText}</Button>
            </DrawerTrigger>
            <DrawerContent>
                <div className="flex flex-col justify-center p-6">
                    <DrawerHeader>
                        <DrawerTitle>Tous droits réservés</DrawerTitle>
                        <DrawerDescription>© by Antonin Guilbaud</DrawerDescription>
                    </DrawerHeader>
                    <div>
                        <p className="">
                            Ce site est entièrement conçu et maintenu par Antonin Guilbaud. Toutes les informations présentes sur ce site, y compris les textes, images, et contenus graphiques, sont protégées par les droits d'auteur et ne peuvent être reproduites, copiées ou redistribuées sans autorisation préalable. <br /><br />

                            Aucune donnée personnelle n'est collectée ni stockée via ce site. Les informations saisies dans le formulaire sont utilisées uniquement à des fins de communication entre vous et moi et ne sont pas conservées. <br /><br />

                            Si vous avez des questions ou remarques concernant l'utilisation du site, vous pouvez me contacter : <a className="text-blue-300 font-semibold hover:text-white transition-all" href="mailto:anto.guilbaud@gmail.com">anto.guilbaud@gmail.com</a>
                        </p>
                    </div>

                    <DrawerFooter>
                        <DrawerClose asChild>
                            <Button className="bg-white">Retour</Button>
                        </DrawerClose>
                    </DrawerFooter>
                </div>
            </DrawerContent>
        </Drawer>
    )
}

export default DrawerDemo
