import { Button, Heading, MultiStep, Text, TextArea, TextInput } from "@ignite-ui/react";
import { Container, Header } from "../styles";
import { ArrowRight } from "phosphor-react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { FormAnnotation, ProfileBox } from "./styles";
import { useSession } from "next-auth/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { GetServerSideProps } from "next";
import { getServerSession } from "next-auth";
import { buildNextAuthOptions } from "../../api/auth/[...nextauth].api";


const updateProfileSchema = z.object({
    bio: z.string()
})

type UpdateProfileData = z.infer<typeof updateProfileSchema>

export default function UpdateProfile() {

    const { register, handleSubmit, formState: { isSubmitting, errors } } = useForm<UpdateProfileData>({
        resolver: zodResolver(updateProfileSchema)
    })
    const session = useSession()
    console.log(session)

    async function handleUpdateProfile(data: UpdateProfileData) {
        console.log(data)
    }

    return (
        <Container>
            <Header>
                <Heading as='strong'>
                    Defina sua disponibilidade
                </Heading>
                <Text>
                    Por último, uma breve descrição e uma foto de perfil.
                </Text>
                <MultiStep size={4} currentStep={4} />
            </Header>
            <ProfileBox as='form' onSubmit={handleSubmit(handleUpdateProfile)}>
                <label>
                    <Text>Foto de perfil</Text>
                    
                </label>

                <label>
                    <Text size="sm">Sobre você</Text>
                    <TextArea {...register('bio')}/>
                    <FormAnnotation size="sm">
                        Fale um pouco sobre você. Isto será exibido em sua página pessoal.
                    </FormAnnotation>
                </label>

                <Button type="submit" disabled={isSubmitting}>
                    Finalizar
                    <ArrowRight />
                </Button>
            </ProfileBox>


        </Container>
    )
}


export const getServerSideProps : GetServerSideProps = async ({req,res}) => {

    const session = await getServerSession(req, res, buildNextAuthOptions(req, res))

    return{
        props: {
            session,
        }
    }
}