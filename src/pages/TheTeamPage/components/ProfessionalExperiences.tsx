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
    margin-bottom: 0.5rem;
`;

const CollaboratedWith = styled.div`
    font-style: italic;
    font-size: 0.9rem;
    color: #bbbbbb;
    margin-top: 1rem;
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
                                <Text variant="primary-medium" vFontSize="lg">
                                    {exp.cargo}
                                </Text>
                                <Title>
                                    <Gradient variant="primary">
                                        <Text
                                            variant="primary-heavy"
                                            vFontSize="lg"
                                        >
                                            {"@" + exp.empresa}
                                        </Text>
                                    </Gradient>
                                </Title>
                                <Period>
                                    <Text
                                        variant="primary-light"
                                        vFontSize="sm"
                                    >
                                        {exp.datas}
                                    </Text>
                                    {exp.localizacao && (
                                        <Text
                                            variant="primary-light"
                                            vFontSize="sm"
                                        >
                                            {exp.localizacao}
                                        </Text>
                                    )}
                                </Period>
                            </LeftRightBox>
                            <LeftRightBox>
                                <Text variant="primary-medium" vFontSize="md">
                                    {exp.descricao}
                                </Text>
                                {/* 4 now, better comment this chunk because we'll have to go througout some history */}
                                {/* {exp.colaboradores &&
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
                                    )} */}
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
