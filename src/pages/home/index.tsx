import { Heading, Text } from "@ignite-ui/react";
import { Container, Hero, Preview } from "./styles";
import previewImage from '../../assets/app-preview.png'
import Image from "next/image";
import { ClaimUsernameForm } from "../../components/ClaimUsernameForm";
import { NextSeo } from "next-seo";


export default function Home() {
    return (
        <>
            <NextSeo
                title="Descomplique sua agenda | Ignite Call"
                description="Conecte seu calendario e permita que as pessoas marquem agendamentos no seu tempo livre"
            />
            <Container>
                <Hero>
                    <Heading as="h1" size="4xl">Agendamento descomplicado</Heading>
                    <Text size="lg">Conecte seu calendário e permita que as pessoas marquem agendamentos
                        no seu tempo livre.</Text>

                    <ClaimUsernameForm />
                </Hero>

                <Preview>
                    <Image
                        src={previewImage}
                        height={400}
                        quality={100}
                        priority
                        alt="Calendario simbolizando aplicação em funcionamento"
                    />
                </Preview>
            </Container>
        </>
    )
}
