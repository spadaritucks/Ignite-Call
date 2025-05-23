import { Button, Heading, MultiStep, Text, TextInput } from "@ignite-ui/react";
import { Container, Header } from "../styles";
import { ArrowRight, Check } from "phosphor-react";
import { useRouter } from "next/router";
import { AuthError, ConnectBox, ConnectItem } from "./styles";
import { signIn, useSession } from "next-auth/react";
import { NextSeo } from "next-seo";




export default function ConnectCalendar() {

    const session = useSession()

    const router = useRouter()

    const isSignedIn = session.status === 'authenticated'
    const hasAuthError = !!router.query.error

    async function handleConnectCalendar() {
        await signIn('google')
    }

    async function handleNavigateToNextStep() {
        await router.push('/register/time-intervals')
    }

    return (
        <>
            <NextSeo
                title="Conecte sua agenda do Google | Ignite Call"
            />
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
                    <ConnectItem>
                        <Text>Google Calendar</Text>
                        {isSignedIn ? (
                            <Button size='sm' disabled>Conectado<Check /></Button>
                        ) : (<Button variant='secondary' onClick={handleConnectCalendar}>Conectar<ArrowRight /></Button>)}
                    </ConnectItem>

                    {hasAuthError && (
                        <AuthError>
                            Falha ao se conectar ao Google, verifique se você habilitou as permissões de acesso
                            ao Google Calendar
                        </AuthError>
                    )}

                    <Button type="submit" disabled={!isSignedIn} onClick={handleNavigateToNextStep}>
                        Proximo passo
                        <ArrowRight />
                    </Button>
                </ConnectBox>


            </Container>
        </>
    )
}