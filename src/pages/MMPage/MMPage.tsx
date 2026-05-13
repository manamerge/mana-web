import React from "react";
import { useNavigate } from "react-router-dom";
import {
    WrapperHeader,
    NoisePatternComponent,
    SolidObjectComponent,
    StyledCardTeaser,
    StyledAccordion,
    AnimatedBG,
    BottomCurve
} from "./MMPage.css";

// Images
import ulsam from "./assets/ulsam-1.webp";
import apdl from "./assets/APDL-1.webp";
import unisot from "./assets/unisot.webp";
import dexper from "./assets/dexper.webp";
import giffits from "./assets/giffits.webp";
import euronext from "./assets/euronext.webp";
import airbus from "./assets/airbus.webp";
import sparkleit from "./assets/sparkleit.webp";
import devices from "./assets/devices.webp";
import spms from "./assets/spms.webp";
import alexisAvatar from "../../icons/avatars/AlexisAvatar.webp";
import davidAvatar from "../../icons/avatars/DavidAvatar.webp";

// Logos
import { ReactComponent as AWS } from "../../icons/logos/AWS.svg";
import { ReactComponent as Babel } from "../../icons/logos/Babel.svg";
import { ReactComponent as CSS3 } from "../../icons/logos/CSS3.svg";
import { ReactComponent as Cypress } from "../../icons/logos/Cypress.svg";
import { ReactComponent as EditorConfig } from "../../icons/logos/EditorConfig.svg";
import { ReactComponent as ESLint } from "../../icons/logos/ESLint.svg";
import { ReactComponent as Figma } from "../../icons/logos/Figma.svg";
import { ReactComponent as Firebase } from "../../icons/logos/Firebase.svg";
import { ReactComponent as FirebaseDB } from "../../icons/logos/FirebaseDB.svg";
import { ReactComponent as Git } from "../../icons/logos/Git.svg";
import { ReactComponent as GraphQL } from "../../icons/logos/GraphQL.svg";
import { ReactComponent as HTML5 } from "../../icons/logos/HTML5.svg";
import { ReactComponent as Javascript } from "../../icons/logos/Javascript.svg";
import { ReactComponent as Jest } from "../../icons/logos/Jest.svg";
import { ReactComponent as MongoDB } from "../../icons/logos/MongoDB.svg";
import { ReactComponent as NodeJS } from "../../icons/logos/Nodejs.svg";
import { ReactComponent as NPMSVG } from "../../icons/logos/NPMSVG.svg";
import { ReactComponent as PostgreSQL } from "../../icons/logos/PostgreSQL.svg";
import { ReactComponent as Postman } from "../../icons/logos/Postman.svg";
import { ReactComponent as PrettierSVG } from "../../icons/logos/PrettierSVG.svg";
import { ReactComponent as ReactSVG } from "../../icons/logos/ReactSVG.svg";
import { ReactComponent as StorybookSVG } from "../../icons/logos/StorybookSVG.svg";
import { ReactComponent as TypeScriptSVG } from "../../icons/logos/TypeScriptSVG.svg";
import { ReactComponent as VSCode } from "../../icons/logos/VSCode.svg";
import { ReactComponent as Vue } from "../../icons/logos/Vue.svg";
import { ReactComponent as Webpack } from "../../icons/logos/Webpack.svg";
import { ReactComponent as YarnSVG } from "../../icons/logos/YarnSVG.svg";
import { ReactComponent as MySQL } from "../../icons/logos/MySQL.svg";

// Icons
import { ReactComponent as Star } from "./assets/Star.svg";
import { ReactComponent as RoundArrow } from "./assets/RoundArrow.svg";
import { ReactComponent as iconTop } from "../../icons/iconTop.svg";
import { ReactComponent as iconDot } from "../../icons/iconDot.svg";
import { ReactComponent as iconLeft } from "../../icons/iconLeft.svg";
import { ReactComponent as iconRight } from "../../icons/iconRight.svg";
import { ReactComponent as minus } from "../../icons/minus.svg";
import { ReactComponent as plus } from "../../icons/plus.svg";
import { ReactComponent as Sample } from "./assets/sample.svg";

// Components
import {
    BreakerTape,
    CardBanner,
    CardSimpleRender,
    Header,
    Text,
    Heading,
    Pint3,
    Gradient,
    Icon
} from "@manamerge/mana-atomic-ui";

// Assets
import { ReactComponent as NoisePattern } from "./assets/noisePattern.svg";
import { ReactComponent as SolidObject } from "./assets/SolidObject.svg";
import SVGGrid from "../../components/SVGGrid";

export default function MMPage() {
    const navigate = useNavigate();

    const openNewTabUrl = (link: string) => {
        window.open(link, "_blank", "noopener,noreferrer");
    };

    const logos = [
        <Icon variant="lg" key="javascript" svg={Javascript} />,
        <Icon variant="lg" key="html5" svg={HTML5} />,
        <Icon variant="lg" key="css3" svg={CSS3} />,
        <Icon variant="lg" key="typescript" svg={TypeScriptSVG} />,
        <Icon variant="lg" key="react" svg={ReactSVG} />,
        <Icon variant="lg" key="vue" svg={Vue} />,
        <Icon variant="lg" key="figma" svg={Figma} />,
        <Icon variant="lg" key="storybook" svg={StorybookSVG} />,
        <Icon variant="lg" key="vscode" svg={VSCode} />,
        <Icon variant="lg" key="git" svg={Git} />,
        <Icon variant="lg" key="webpack" svg={Webpack} />,
        <Icon variant="lg" key="babel" svg={Babel} />,
        <Icon variant="lg" key="yarn" svg={YarnSVG} />,
        <Icon variant="lg" key="npm" svg={NPMSVG} />,
        <Icon variant="lg" key="eslint" svg={ESLint} />,
        <Icon variant="lg" key="prettier" svg={PrettierSVG} />,
        <Icon variant="lg" key="editorConfig" svg={EditorConfig} />,
        <Icon variant="lg" key="nodejs" svg={NodeJS} />,
        <Icon variant="lg" key="jest" svg={Jest} />,
        <Icon variant="lg" key="cypress" svg={Cypress} />,
        <Icon variant="lg" key="postman" svg={Postman} />,
        <Icon variant="lg" key="mongodb" svg={MongoDB} />,
        <Icon variant="lg" key="firebase" svg={Firebase} />,
        <Icon variant="lg" key="firebaseDB" svg={FirebaseDB} />,
        <Icon variant="lg" key="mysql" svg={MySQL} />,
        <Icon variant="lg" key="postgresql" svg={PostgreSQL} />,
        <Icon variant="lg" key="graphql" svg={GraphQL} />,
        <Icon variant="lg" key="aws" svg={AWS} />
    ];

    return (
        <AnimatedBG>
            <div
                style={{
                    position: "relative",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "20px"
                }}
            >
                <WrapperHeader>
                    <NoisePatternComponent
                        as={NoisePattern}
                    ></NoisePatternComponent>
                    <SolidObjectComponent
                        as={SolidObject}
                    ></SolidObjectComponent>

                    <Header
                        buttonRightClick={() => navigate("/LetsTalk")}
                        buttonRightText="Contact us"
                        headingTitle={["Not an ordinary software team."]}
                        iconDot={iconDot}
                        buttonRightIcon={Sample}
                        textTitle={[
                            <>
                                <Gradient variant="primary">
                                    <span>MANA</span>
                                </Gradient>
                                <span style={{ color: "#fff" }}>MERGE</span>
                            </>
                        ]}
                    />
                </WrapperHeader>

                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        textAlign: "center"
                    }}
                >
                    <Gradient variant="primary">
                        <Heading variant="secondary" asTag="h3">
                            Featured Projects
                        </Heading>
                    </Gradient>

                    <Heading variant="primary" asTag="h1">
                        Across Industries & Technologies
                    </Heading>
                    <Text variant="primary-bold">
                        The impact of our work throughout the years
                    </Text>
                </div>
                <StyledCardTeaser
                    backgroundSvg={NoisePattern}
                    onClick={() => openNewTabUrl("https://dexper.io/")}
                    separator
                    moleculeVariant="primary"
                    company="DEXPER"
                    year="2024"
                    title="Frontend Engineer Event Platform"
                    buttonName="Take me there"
                    svg={RoundArrow}
                    checks={[
                        "Scalable UI architecture",
                        "Reusable component library",
                        "API-driven workflows"
                    ]}
                    cardImageSrc={dexper}
                />
                <StyledCardTeaser
                    backgroundSvg={NoisePattern}
                    company="giffits"
                    year="2024"
                    title="Marketing Automation"
                    buttonName="Take me there"
                    onClick={() => openNewTabUrl("https://www.giffits.de/")}
                    checks={[
                        "Building robust e-commerce solutions",
                        "Scalable serverless workflows",
                        "Dynamic incorporation of logos, colors, and areas across products"
                    ]}
                    svg={RoundArrow}
                    cardImageSrc={giffits}
                    separator={true}
                />
                <StyledCardTeaser
                    backgroundSvg={NoisePattern}
                    separator
                    moleculeVariant="primary"
                    company="UNISOT"
                    year="2021"
                    title="Frontend Engineer Blockchain Supply Chain"
                    onClick={() => openNewTabUrl("https://unisot.com")}
                    buttonName="Take me there"
                    svg={RoundArrow}
                    checks={[
                        "Cross-platform integrations",
                        "Modular UI systems",
                        "Blockchain-based features"
                    ]}
                    cardImageSrc={unisot}
                />
                <StyledCardTeaser
                    backgroundSvg={NoisePattern}
                    company="Euronext"
                    year="2020"
                    title="Company-wide Design System"
                    checks={[
                        "Components standardization & reusability",
                        "UI tests & documentation",
                        "Cross-platform compatibility"
                    ]}
                    svg={RoundArrow}
                    cardImageSrc={euronext}
                    separator={true}
                />
                <StyledCardTeaser
                    backgroundSvg={NoisePattern}
                    company="Airbus"
                    year="2019"
                    title="Final Assembly Line Data Persistence"
                    checks={[
                        "Dashboards of operational processes",
                        "Real-time data synchronization",
                        "Progressive architectural restructuring"
                    ]}
                    svg={RoundArrow}
                    cardImageSrc={airbus}
                    separator={true}
                />
                <StyledCardTeaser
                    backgroundSvg={NoisePattern}
                    separator
                    moleculeVariant="primary"
                    company="APDL"
                    year="2018"
                    title="Frontend River Monitoring"
                    onClick={() =>
                        openNewTabUrl(
                            "https://play.google.com/store/apps/details?id=com.seamlink.gatewaybox.apdl2"
                        )
                    }
                    buttonName="Take me there"
                    svg={RoundArrow}
                    checks={[
                        "UI architecture setup",
                        "IOT data flows",
                        "REST API consumption"
                    ]}
                    cardImageSrc={apdl}
                />
                <StyledCardTeaser
                    backgroundSvg={NoisePattern}
                    separator
                    moleculeVariant="primary"
                    company="ULSAM"
                    year="2018"
                    title="Frontend Developer Hospital App"
                    buttonName="Take me there"
                    onClick={() =>
                        openNewTabUrl(
                            "https://play.google.com/store/apps/details?id=com.seamlink.gatewaybox.ulsam&pli=1"
                        )
                    }
                    svg={RoundArrow}
                    checks={[
                        "Feature refactoring tasks",
                        "Performance-focused updates",
                        "SOAP service integrations"
                    ]}
                    cardImageSrc={ulsam}
                />
                <StyledCardTeaser
                    backgroundSvg={NoisePattern}
                    company="SPMS"
                    year="2017"
                    title="Healthcare Metrics Aggregation"
                    checks={[
                        "Collection and analysis of dashboards",
                        "Interoperability of reports and HL7 data",
                        "Monitoring and alarm of statistics"
                    ]}
                    buttonName="Take me there"
                    onClick={() =>
                        openNewTabUrl("https://www.sns24.gov.pt/pt/inicio")
                    }
                    svg={RoundArrow}
                    cardImageSrc={spms}
                    separator={true}
                />
                <StyledCardTeaser
                    backgroundSvg={NoisePattern}
                    moleculeVariant="primary"
                    company="SPARKLEIT"
                    year="2016"
                    title="Full-Stack Geolocation"
                    separator
                    svg={RoundArrow}
                    checks={[
                        "Mobile GPS capture",
                        "Geospatial data flow",
                        "Map polygon tools"
                    ]}
                    cardImageSrc={sparkleit}
                />
                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        position: "relative"
                    }}
                >
                    <BottomCurve />
                </div>
                <div style={{ margin: "80px 20px 40px" }}>
                    <Pint3
                        cards={[
                            <div
                                style={{
                                    width: "100%",
                                    display: "contents"
                                }}
                                key={1}
                            >
                                <Gradient variant="primary">
                                    <Heading variant="secondary" asTag="h1">
                                        Dig deeper into our work and expertise
                                    </Heading>
                                </Gradient>
                            </div>,
                            <CardSimpleRender key={2}>
                                <div
                                    style={{
                                        alignSelf: "center",
                                        marginBottom: "20px"
                                    }}
                                >
                                    <div
                                        style={{
                                            margin: "20px 0 20px 0",
                                            alignItems: "center",
                                            display: "flex",
                                            justifyContent: "center"
                                        }}
                                    >
                                        <Heading variant="primary" asTag="h3">
                                            Our Tech Stack
                                        </Heading>
                                    </div>
                                    <SVGGrid svgs={logos} />
                                </div>
                            </CardSimpleRender>,
                            <CardSimpleRender
                                key={3}
                                icon={Star}
                                onClick={() => navigate("/TheTeam")}
                                gradientPosition="top"
                                title="Who are we?"
                                description="An engineering team with international experience, working with companies ranging from innovative startups to global enterprises with a track record of delivering high-quality software solutions.
"
                            >
                                <div
                                    style={{
                                        display: "flex",
                                        width: "100%",
                                        height: "100%",
                                        gap: "30px",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        margin: "0 10px 20px 10px"
                                    }}
                                >
                                    <img
                                        src={davidAvatar}
                                        alt="David Avatar"
                                        height="110px"
                                        style={{
                                            transform: "rotate(0deg)",
                                            borderRadius: "24%"
                                        }}
                                    />
                                    <img
                                        src={alexisAvatar}
                                        alt="Alexis Avatar"
                                        height="115px"
                                        style={{
                                            borderRadius: "50%"
                                        }}
                                    />
                                </div>
                            </CardSimpleRender>,
                            <CardSimpleRender
                                key={4}
                                gradientPosition="right"
                                title="From Wireframe to Code"
                                description="We turn your designs into pixel-perfect, responsive applications using the latest technologies and best practices."
                            ></CardSimpleRender>,
                            <CardSimpleRender
                                key={7}
                                icon={Star}
                                onClick={() => navigate("/WhyUs")}
                                gradientPosition="top left"
                                title="What do we do?"
                                description="We build software that solves real-world problems for businesses and end users."
                            ></CardSimpleRender>,
                            <CardSimpleRender
                                key={6}
                                gradientPosition="bottom"
                                title="Mobile + Tablet + Web"
                                description="We build responsive web and mobile applications that work seamlessly on all devices."
                            >
                                <div style={{ alignSelf: "center" }}>
                                    <img
                                        src={devices}
                                        alt="devices"
                                        style={{
                                            width: "100%",
                                            height: "100%",
                                            objectFit: "cover"
                                        }}
                                    />
                                </div>
                            </CardSimpleRender>,
                            <CardSimpleRender
                                key={5}
                                icon={Star}
                                onClick={() =>
                                    openNewTabUrl("https://storybook.js.org/")
                                }
                                gradientPosition="center"
                                title="UI/UX Design Systems"
                                description="Figma, Storybook, Component Libraries"
                            >
                                <div
                                    style={{
                                        alignSelf: "center",
                                        marginBottom: "50px"
                                    }}
                                >
                                    <Icon variant="xxxl" svg={StorybookSVG} />
                                </div>
                            </CardSimpleRender>
                        ]}
                    ></Pint3>
                </div>
                <div
                    style={{
                        height: "150px",
                        width: "100%",
                        position: "relative",
                        overflow: "hidden"
                    }}
                >
                    <div
                        style={{
                            height: "40px",
                            width: "102%",
                            position: "absolute",
                            top: "0",
                            left: "-1%"
                        }}
                    >
                        <BreakerTape
                            words={[
                                "Collaboration",
                                "Engineering",
                                "Frontend",
                                "Full-stack",
                                "Scalability",
                                "Design System",
                                "Performance",
                                "Clean Code",
                                "Agile",
                                "Scrum",
                                "Remote Work",
                                "Innovation",
                                "Problem Solving",
                                "Architecture",
                                "Ownership",
                                "Reliability",
                                "Product Thinking",
                                "APIs",
                                "Testing",
                                "User Experience",
                                "Accessibility",
                                "Code Reviews",
                                "Documentation",
                                "Teamwork",
                                "Creativity",
                                "Leadership",
                                "Optimization",
                                "Monitoring",
                                "Security",
                                "Automation",
                                "Feedback",
                                "Learning"
                            ]}
                            svg={Star}
                        />
                    </div>
                </div>

                <StyledAccordion
                    iconMinus={minus}
                    iconPlus={plus}
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

                <div
                    style={{
                        margin: "0 20px 60px 20px"
                    }}
                >
                    <CardBanner
                        title="Let's connect and create something amazing!"
                        description="Reach out to us for collaborations, inquiries, and more."
                        buttonText="Contact us"
                        buttonClick={() => navigate("/LetsTalk")}
                        icon={Sample}
                    />
                </div>
            </div>
        </AnimatedBG>
    );
}
