import React from "react";
import styled from "styled-components";
import experiencesData from "./experiences.json"; // JSON com array de experiências
import { Divider, Gradient, Text } from "@manamerge/mana-atomic-ui";

interface Experience {
    cargo: string;
    empresa: string;
    datas: string;
    localizacao: string;
    descricao: string;
    colaboradores?: string[];
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-self: center;
    flex-wrap: wrap;
    gap: 1rem;
    padding: 1rem;
    flex-direction: column;
    align-content: center;
    max-width: 720px;
`;

const LeftRightBox = styled.div`
    width: 50%;
`;

const Card = styled.div`
    background-color: transparent;
    color: #ddd;
    display: flex;
    gap: 50px;
    padding: 1rem;
    @media (max-width: 700px) {
        max-width: 100%;
    }
`;

const Title = styled.h3`
    margin: 0 0 0.5rem 0;
    font-size: 1.2rem;
    display: flex;
    gap: 5px;
    align-items: center;
    flex-wrap: wrap;
    @media (max-width: 700px) {
        display: unset;
    }
`;

const Period = styled.div`
    font-style: italic;
    font-size: 0.9rem;
    color: #bbbbbb;
    margin-bottom: 0.5rem;
`;

const CollaboratedWith = styled.div`
    font-style: italic;
    font-size: 0.9rem;
    color: #bbbbbb;
    margin-top: 1rem;
`;

const Description = styled.p`
    margin: 0;
    line-height: 1.4;
`;

const ColaboradoresLine = styled.div`
    display: flex;
    align-items: center;
    margin: 0.5rem 0 0 15px;
    font-size: 0.9rem;
    color: #dddddd;
`;

const Avatar = styled.img`
    width: 32px;
    height: 32px;
    border-radius: 50%;
    margin-left: -0.9rem;
    border: 2px solid #ddd;
`;

const ProfessionalExperiences: React.FC = () => {
    const experiences: Experience[] = experiencesData;
    return (
        <Container>
            <div style={{}}>
                {experiences.map((exp, index) => (
                    <>
                        <Card key={index}>
                            <LeftRightBox>
                                <Title>
                                    {exp.cargo}
                                    <Gradient variant="primary">
                                        <Text variant="heavy">
                                            {"@" + exp.empresa}
                                        </Text>
                                    </Gradient>
                                </Title>
                                <Period>
                                    {exp.datas}
                                    {exp.localizacao}
                                </Period>
                            </LeftRightBox>
                            <LeftRightBox>
                                <Description>{exp.descricao}</Description>

                                {exp.colaboradores &&
                                    exp.colaboradores.length > 0 && (
                                        <>
                                            <CollaboratedWith>
                                                ~ Collaborated with:
                                            </CollaboratedWith>
                                            <ColaboradoresLine>
                                                {exp.colaboradores.map(
                                                    (avatarUrl, i) => (
                                                        <Avatar
                                                            src={avatarUrl}
                                                            alt={`Colaborador ${i + 1}`}
                                                            key={i}
                                                        />
                                                    )
                                                )}
                                            </ColaboradoresLine>
                                        </>
                                    )}
                            </LeftRightBox>
                        </Card>

                        {index < experiences.length - 1 && ( // evitar divider após o último item
                            <Divider
                                variant="primary"
                                margin="0px auto"
                                width="100%"
                                color="#555"
                            />
                        )}
                    </>
                ))}
            </div>
        </Container>
    );
};

export default ProfessionalExperiences;
