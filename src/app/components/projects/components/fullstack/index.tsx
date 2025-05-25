"use client"

interface PropsContainer {
    item: string,

}

import Link from "next/link"

import Image from "next/image"
import "./style.css"
import logo from "../../../../../../public/hamb-1.png"
import { gsap } from "gsap"
import { use, useLayoutEffect, useRef } from "react"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Container } from "../container"
import { Grid } from "../grid"
import devControle from "../../../../../../public/imagemDevControle.jpg"
import hamburgueria from "../../../../../../public/PrimeiraImagemHamb.png"
import ecommerce from "../../../../../../public/ecommerce2.png"
import consultoria from "../../../../../../public/consultoria1.png"


export function FullStack({ item }: PropsContainer) {


    return (

        <section className="projectSection">

            <h1 className="myH12">{item}</h1>




            <div data-aos="flip-right" data-aos-delay="1000" className="myGrid2 " >

                <Grid item="item5" rota="games/consultoria" src={consultoria} titlle="Consultoria" description="Um projeto feito com Node.js, Next.js e React.js, utilizando banco de dados PostgreSQL, com um sistema de login feito em Node.js, utilizando token com diversas validações e um sistema de pagamento Stripe." />

                <Grid item="item5" rota="games/pizzaria" src={devControle} titlle="PizzaToDev" description="O PizzaToDev é um projeto inovador voltado para a organização e otimização da demanda em pizzarias, proporcionando uma experiência ágil e eficiente na gestão de pedidos." />

                <Grid item="item5" rota="games/devcontrole" src={devControle} titlle="Dev Controler" description="Dev Controler é um projeto que ajuda na organização da sua empresa feito com TypeScript, React, um back-end em NextJs que faz KRUD com o banco de dados: MongoDb, e PrismaClient." />


                <Grid item="item5" rota="games/hamburgueria" src={hamburgueria} titlle="Hamburgueria" description="Um projeto feito com Next.Js, React.JS, ultilizando sistema de login NextAuth e um sistema de pagamento com a api do mercado pago" />

                <Grid item="item5" rota="games/ecommerce" src={ecommerce} titlle="Ecommerce" description="Um projeto feito com Next.js, Node.js e React, utilizando o sistema de login NextAuth, um sistema de pagamento com Stripe e uma API do Melhor Envio para cálculo de frete" />









            </div>



        </section>

    )
}