import React from "react";
import { useNavigate } from "react-router-dom";
import { ReactComponent as JSIcon } from "./assets/sample.svg";
import sparkleImage from "./assets/sparkle-maps.png";
import ulsam from "./assets/ulsam-1.png";
import apdl from "./assets/APDL-1.png";
import unisot from "./assets/unisot.png";
import dexper from "./assets/dexper.png";

import { AtomText } from "./MMPage.css";

// Components
import {
    BreakerTape,
    CardBanner,
    CardSimpleRender,
    CardTeaser,
    Header,
    Accordion,
    Text,
    Heading,
    Pint3
} from "@manamerge/mana-atomic-ui";

// Assets
import { ReactComponent as iconTop } from "../../icons/iconTop.svg";
import { ReactComponent as iconDot } from "../../icons/iconDot.svg";
import { ReactComponent as iconLeft } from "../../icons/iconLeft.svg";
import { ReactComponent as iconRight } from "../../icons/iconRight.svg";
import { ReactComponent as Sample } from "./assets/sample.svg";
import sampleImage from "./assets/sampleImg.png";
import dexperImage from "./assets/dexper.png";

export default function MMPage() {
    const navigate = useNavigate();

    const goToSite = (link: string) => {
        window.open(link, "_blank", "noopener,noreferrer");
    };
    return (
        <>
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "20px"
                }}
            >
                <Header
                    buttonLeftClick={() => {}}
                    buttonLeftText="Let's talk"
                    buttonRightClick={() => {}}
                    buttonRightText="Contact us"
                    headingTitle="Welcome to ManaMerge"
                    iconDot={iconDot}
                    buttonLeftIcon={iconLeft}
                    buttonRightIcon={iconRight}
                    iconTop={iconTop}
                    textBanner="available to offer services"
                    textTitle={[
                        "We are a team of Software Engineers",
                        "Our interest goes to all developing environments"
                    ]}
                />
                <Text variant="primary-heavy" vFontSize="xxl">
                    ManaMerge is a software development studio formed by two
                    senior developers with over 7 years of professional
                    experience each.
                </Text>
                <AtomText>
                    We design and build reliable, scalable, and user-centered
                    digital products — from modern web platforms to robust
                    back-end systems.
                </AtomText>

                <Heading variant="primary" as="h2">
                    Featured Projects
                </Heading>
                <Text>Some of our impact throughout the years includes:</Text>

                <CardTeaser
                    moleculeVariant="primary"
                    company="SPARKLEIT"
                    year="2016 - 2017"
                    title="Full-Stack Geolocation"
                    separator
                    svg={JSIcon}
                    checks={[
                        "Mobile GPS capture",
                        "Geospatial data flow",
                        "Map polygon tools"
                    ]}
                    cardImageSrc={sparkleImage}
                />

                <CardTeaser
                    separator
                    moleculeVariant="primary"
                    company="ULSAM"
                    year="2017 - 2018"
                    title="Frontend Developer Hospital App"
                    buttonName="Stonks"
                    onClick={() =>
                        console.log(
                            "https://play.google.com/store/apps/details?id=com.seamlink.gatewaybox.ulsam&pli=1"
                        )
                    }
                    svg={JSIcon}
                    checks={[
                        "Feature refactoring tasks",
                        "Performance-focused updates",
                        "SOAP service integrations"
                    ]}
                    cardImageSrc={ulsam}
                />

                <CardTeaser
                    separator
                    moleculeVariant="primary"
                    company="APDL"
                    year="2017 - 2018"
                    title="Frontend River Monitoring"
                    onClick={() =>
                        console.log(
                            "https://play.google.com/store/apps/details?id=com.seamlink.gatewaybox.apdl2"
                        )
                    }
                    buttonName="Stonks"
                    svg={JSIcon}
                    checks={[
                        "UI architecture setup",
                        "IOT data flows",
                        "REST API consumption"
                    ]}
                    cardImageSrc={apdl}
                />

                <CardTeaser
                    separator
                    moleculeVariant="primary"
                    company="UNISOT"
                    year="2018 - 2021"
                    title="Frontend Engineer Blockchain Supply Chain"
                    onClick={() => console.log("https://unisot.com")}
                    buttonName="Stonks"
                    svg={JSIcon}
                    checks={[
                        "Cross-platform integrations",
                        "Modular UI systems",
                        "Blockchain-based features"
                    ]}
                    cardImageSrc={unisot}
                />

                <CardTeaser
                    separator
                    moleculeVariant="primary"
                    company="DEXPER"
                    year="2021 - 2024"
                    title="Frontend Engineer Event Platform"
                    onClick={() => console.log("https://dexper.io/")}
                    buttonName="Stonks"
                    svg={JSIcon}
                    checks={[
                        "Scalable UI architecture",
                        "Reusable component library",
                        "API-driven workflows"
                    ]}
                    cardImageSrc={dexper}
                />

                <CardTeaser
                    company="dexper"
                    year="2025"
                    title="solução/ideia de negócio implementada/alcançada"
                    buttonName="View Case Study"
                    onClick={() => goToSite("https://dexper.io/")}
                    checks={[
                        "o que foi feito internamente",
                        "técnicas de desenvolvimento utilizadas",
                        "soluções/resultados alcançados",
                        "feedback do cliente",
                        "impacto do projeto na empresa",
                        "quaisquer desafios ou obstáculos superados"
                    ]}
                    svg={Sample}
                    cardImageSrc={dexperImage}
                    separator={true}
                />
                <CardTeaser
                    company="giffits"
                    year="2024"
                    title="....."
                    buttonName="View Case Study"
                    onClick={() => goToSite("https://www.giffits.de/")}
                    checks={[
                        "Small team. Strong expertise. Real impact.",
                        "Building robust e-commerce solutions",
                        "...",
                        "..."
                    ]}
                    svg={Sample}
                    cardImageSrc={sampleImage}
                    separator={true}
                />
                <CardTeaser
                    company="unisot"
                    year="2021"
                    title="....."
                    buttonName="View Case Study"
                    onClick={() => goToSite("https://unisot.com/")}
                    checks={["...", "...", "..."]}
                    svg={Sample}
                    cardImageSrc={sampleImage}
                    separator={true}
                />

                <CardTeaser
                    company="Euronext"
                    year="2020"
                    title="....."
                    checks={["...", "...", "..."]}
                    svg={Sample}
                    cardImageSrc={sampleImage}
                    separator={true}
                />
                <CardTeaser
                    company="Airbus"
                    year="2019"
                    title="....."
                    checks={["...", "...", "..."]}
                    svg={Sample}
                    cardImageSrc={sampleImage}
                    separator={true}
                />
                <CardTeaser
                    company="Optimizer"
                    year="2018"
                    title="....."
                    checks={["...", "...", "..."]}
                    svg={Sample}
                    cardImageSrc={sampleImage}
                    separator={true}
                />
                <CardTeaser
                    company="SparkleIt"
                    year="2017"
                    title="....."
                    checks={["...", "...", "..."]}
                    svg={Sample}
                    cardImageSrc={sampleImage}
                    separator={true}
                />

                <Text>
                    We combine technical excellence with pragmatic
                    decision-making: - Clean, maintainable code - Scalable
                    architecture - Clear communication - Agile and collaborative
                    workflows - Focus on business impact, not just features
                </Text>
                {/* <div
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        gap: "20px",
                        flexWrap: "wrap",
                        justifyContent: "center"
                    }}
                >
                    <CardSimpleRender
                        icon={Sample}
                        onClick={() => navigate("/theteam")}
                        title="Who are we?"
                        description="An engineering team with international experience across Europe, working
with companies ranging from innovative startups to global enterprises. We’ve contributed to projects at organizations such as Github, Airbus, Euronext and Hashicorp, and helped build
products in sectors including finance, healthcare, aviation, blockchain, e-commerce, and digital events."
                    >
                        <div style={{ alignSelf: "center" }}>
                            whatever children
                        </div>
                    </CardSimpleRender>
                    <CardSimpleRender
                        icon={Sample}
                        onClick={() => navigate("/whyus")}
                        title="What makes us different?"
                        description="We combine deep technical expertise with a strong focus on user-centered design and business impact. Our collaborative approach ensures that we work closely with clients to understand their unique challenges and deliver tailored solutions that drive real results."
                    >
                        <div style={{ alignSelf: "center" }}>
                            whatever children
                        </div>
                    </CardSimpleRender>
                    <CardSimpleRender
                        icon={Sample}
                        onClick={() => goToSite("https://storybook.js.org/")}
                        title="UI/UX Systems & Component Libraries"
                        description="Figma, Storybook, Design Systems"
                    >
                        <div style={{ alignSelf: "center" }}>
                            whatever children
                        </div>
                    </CardSimpleRender>

                    <CardSimpleRender
                        icon={Sample}
                        title="Our Stack"
                        description="Front-end, Back-end, DevOps, Mobile"
                    >
                        <BreakerTape
                            words={[
                                "Hello",
                                "World",
                                "This",
                                "Component",
                                "Amazing",
                                "Tests"
                            ]}
                            svg={Sample}
                        />
                    </CardSimpleRender>
                </div> */}
                <div style={{ backgroundColor: "lightblue" }}>
                    <Pint3
                        cards={[
                            <div key={1}>texto</div>,
                            <CardSimpleRender
                                key={2}
                                icon={Sample}
                                onClick={() => navigate("/theteam")}
                                title="Who are we?"
                                description="An engineering team with international experience across Europe, working
with companies ranging from innovative startups to global enterprises. We’ve contributed to projects at organizations such as Github, Airbus, Euronext and Hashicorp, and helped build
products in sectors including finance, healthcare, aviation, blockchain, e-commerce, and digital events."
                            >
                                <div style={{ alignSelf: "center" }}>
                                    whatever children
                                </div>
                            </CardSimpleRender>,
                            <CardSimpleRender
                                key={3}
                                icon={Sample}
                                title="UI/UX Systems & Component Libraries"
                                description="Figma, Storybook, Design Systems"
                            >
                                <div style={{ alignSelf: "center" }}>
                                    whatever children
                                </div>
                            </CardSimpleRender>,
                            <CardSimpleRender
                                key={4}
                                icon={Sample}
                                onClick={() =>
                                    goToSite("https://storybook.js.org/")
                                }
                                title="UI/UX Systems & Component Libraries"
                                description="Figma, Storybook, Design Systems"
                            >
                                <div style={{ alignSelf: "center" }}>
                                    whatever children
                                </div>
                            </CardSimpleRender>,
                            <div key={5}>texto</div>,
                            <div key={6}>texto</div>,
                            <div key={7}>texto</div>
                        ]}
                    ></Pint3>
                </div>
                <BreakerTape
                    words={[
                        "Hello",
                        "World",
                        "This",
                        "Component",
                        "Amazing",
                        "Tests"
                    ]}
                    svg={Sample}
                />
                <div
                    style={{
                        width: "60%",
                        marginTop: "50px",
                        marginBottom: "30px"
                    }}
                >
                    <Accordion
                        iconMinus={iconLeft}
                        iconPlus={iconRight}
                        content={[
                            {
                                title: "Are you available to hire full time?",
                                description:
                                    "Currently we are open for either contract or full-time positions. We are always open to discussing interesting opportunities, collaborations and other fun stuff."
                            },
                            {
                                title: "How do your quote pricing works?",
                                description:
                                    "We usually work with fixed-price contracts based on the project scope and requirements. However, we are flexible and can adapt to different pricing models depending on the client's needs."
                            },
                            {
                                title: "Can you facelift my design?",
                                description:
                                    "Yes, we can help you improve/remodel your design. We have experience in redesigning and updating to newer trends existing UI/UX designs to make them more modern and user-friendly."
                            },
                            {
                                title: "Can you upgrade my legacy system/application?",
                                description:
                                    "Yes, we can assist in upgrading legacy systems or applications. We have experience in modernizing and refactoring older codebases to improve performance, security, and maintainability."
                            }
                        ]}
                    />
                </div>
                <div
                    style={{
                        marginBottom: "50px"
                    }}
                >
                    <CardBanner
                        title="Let's connect and create something amazing!"
                        description="Reach out to us for collaborations, inquiries, and more."
                        buttonText="Contact us"
                        buttonClick={() => console.log("Button clicked!")}
                        icon={Sample}
                    />
                </div>
            </div>
        </>
    );
}
