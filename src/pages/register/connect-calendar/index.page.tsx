import { Button, Heading, MultiStep, Text, TextInput } from "@ignite-ui/react";
import { Container, Header } from "../styles";
import { ArrowRight } from "phosphor-react";
import { useRouter } from "next/router";
import { ConnectBox, ConnextItem } from "./styles";




export default function Register() {

   

    return (
        <Container>
            <Header>
                <Heading as='strong'>
                    Conecte sua agenda!
                </Heading>
                <Text>
                    Conecte o seu calendário para verificar automaticamente as horas ocupadas e os novos eventos à medida em que são agendados.
                </Text>
                <MultiStep size={4} currentStep={2} />
            </Header>

            <ConnectBox>
                <ConnextItem>
                    <Text>Google Calendar</Text>
                    <Button variant='secondary'>Conectar<ArrowRight/></Button>
                </ConnextItem>
                <Button type="submit">
                    Proximo passo
                    <ArrowRight/>
                </Button>
            </ConnectBox>


        </Container>
    )
}