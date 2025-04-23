import { Button, Text, TextArea, TextInput} from "@ignite-ui/react";
import { ConfirmForm, FormActions, FormError, FormHeader } from "./styles";
import { CalendarBlank, Clock } from "phosphor-react";

export function ConfirmStep() {

    return (
        <ConfirmForm as='form'>
            <FormHeader>
                <Text>
                    22 de Setembro de 2022
                    <CalendarBlank />
                </Text>
                <Text>
                    <Clock />
                    18:00h
                </Text>
            </FormHeader>

            <label>
                <Text size="sm">Nome completo</Text>
                <TextInput placeholder="Seu nome" />

            </label>

            <label>
                <Text size="sm">Endereço de e-mail</Text>
                <TextInput
                    type="email"
                    placeholder="johndoe@example.com"

                />

            </label>

            <label>
                <Text size="sm">Observações</Text>
                <TextArea />
            </label>

            <FormActions>
                <Button type="button" variant="tertiary" >
                    Cancelar
                </Button>
                <Button type="submit" >
                    Confirmar
                </Button>
            </FormActions>
        </ConfirmForm>


    )
}