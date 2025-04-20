import { Button, Text, TextInput } from '@ignite-ui/react'
import { Form, FormAnnotation } from './styles'
import { ArrowRight } from 'phosphor-react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/router'

const claimUsernameFormSchema = z.object({
    username: z.string()
        .min(3, { message: "O usuario precisa ter pelo menos 3 letras" })
        .regex(/^([a-z\\\\-]+)$/i, { message: "O usuario pode ter apenas letras e hifens" })
        .transform((username) => username.toLowerCase())
})

type ClainUsernameFormData = z.infer<typeof claimUsernameFormSchema>

export function ClaimUsernameForm() {

    const { register, handleSubmit, formState: { errors } } = useForm<ClainUsernameFormData>({
        resolver: zodResolver(claimUsernameFormSchema)
    })

    const router = useRouter()

    async function handleClainUsername(data: ClainUsernameFormData) {
        const { username } = data

        await router.push(`/register?username=${username}`)

    }

    return (
        <>
            <Form as="form" onSubmit={handleSubmit(handleClainUsername)} >
                <TextInput size="sm" prefix='ignite.com/' placeholder='seu-usuario' {...register('username')} />
                <Button size="sm" type='submit'>Reservar <ArrowRight /></Button>
            </Form>
            <FormAnnotation>
                <Text size="sm">
                    {errors.username ? errors.username.message : "Digite o nome do usuario desejado"}
                </Text>
            </FormAnnotation>

        </>
    )
}