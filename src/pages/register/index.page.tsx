import { Button, Heading, MultiStep, Text, TextInput } from "@ignite-ui/react";
import { Container, Form, Header } from "./styles";
import { ArrowRight } from "phosphor-react";

export default function Register() {

    return (
        <Container>
            <Header>
                <Heading as='strong'>
                    Bem-vindo ao Ignite Call!
                </Heading>
                <Text>
                    Precisamos de algumas informações para criar seu perfil! Ah, você pode editar essas informações depois.
                </Text>
                <MultiStep size={4} currentStep={1} />
            </Header>

            <Form as='form'>
                <label>
                    <Text size='sm'>Nome do Usuario</Text>
                    <TextInput prefix="ignite.com/" placeholder="seu-usuario" />
                </label>

                <label>
                    <Text size='sm'>Nome Completo</Text>
                    <TextInput prefix="ignite.com/" placeholder="seu nome" />
                </label>

                <Button size="sm" type='submit'>Proximo Passo <ArrowRight /></Button>
            </Form>
        </Container>
    )
}