"use client"

import Tag from "@/components/Tag";
import { useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";


const text = `You're racing to create exceptional work, but traditional design tools slow you down with unnecessary complexity and steep learning curves.`;
const words = text.split(" ");

export default function Introduction() {

	const scrollTarget = useRef<HTMLDivElement>(null)
	const { scrollYProgress } = useScroll({                // Detecta el desplazamiento scroll en el eje y, variando entre 0 y 1
		target: scrollTarget, 															 // El elemento que se va a detectar
		offset: [                                            // Define los puntos de inicio y fin del desplazamiento
			'start end',                                       // El elemento objetivo comienza (start) fuera de la vista en la parte inferior, y cuando toca la parte inferior de la ventana (end) el progreso del desplazamiento empieza a contar (scrollYProgress = 0)
			'end start']                                       // Cuando el final del elemento alcanza la parte superior de la ventana (start) el progreso del desplazamiento es completo (scrollYProgress = 1)
	});

	const [currentWord, setCurrentWord] = useState(0)
	const wordIndex =useTransform(scrollYProgress, [0, 1], [0, words.length]) // Transforma el desplazamiento de 0 a 1 en un número (wordIndex) asignado a cada palabra

	useEffect(() => {
		wordIndex.on('change', (latest) => {                 // Cuando el el wordIndex cambia , actualiza el valor de currentword
			setCurrentWord(latest)
		})
	},[wordIndex])

	return (
		<section className="py-28 lg:py-40">
			<div className="container">
				<div className="sticky top-20">
					<div className="flex justify-center">
						<Tag>Introducing Layers</Tag>
					</div>
					<div className="text-4xl md:text-6xl lg:text-7xl text-center font-medium mt-10">
						<span>Your creative process deserves better.</span>{" "}
						<span className="text-white/15">
							{words.map((word, index) => (
								<span 
									key={index}
									className={twMerge(index < currentWord && "text-white")} // Si el índice cada palabra < que el índice del desplazamiento scroll , se aplica la clase text-white
								>
									{`${word} `}
								</span>
							))}
						</span>
						<span className="text-lime-400 block">That&apos;s why we build layers.</span>
					</div>
				</div>
				<div className="h-[150vh]" ref={scrollTarget}></div>
			</div>
		</section>
	)
}
