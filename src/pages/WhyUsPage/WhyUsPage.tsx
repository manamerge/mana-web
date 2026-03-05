import React from "react";
import {
    Header,
    CardBanner,
    Heading,
    Text,
    Gradient,
    Icon
} from "@manamerge/mana-atomic-ui";
import {
    StyledCardTeaser,
    StyledCardSimpleRender,
    WrapperHeader,
    SolidObjectComponent,
    NoisePatternComponent
} from "./WhyUsPage.css";

// assets
import { ReactComponent as Sample } from "./assets/sample.svg";
import Dialog from "./assets/Dialog.png";
import Documentation from "./assets/Documentation.png";
import InformationData from "./assets/InformationData.png";
import Application from "./assets/Application.png";
import ServerBased from "./assets/ServerBased.png";
import Settings from "./assets/Settings.png";
import Tools from "./assets/Tools.png";
import Search from "./assets/Search.png";
import Layered from "./assets/Layered.png";
import { ReactComponent as SolidObject } from "./assets/SolidObject-3.svg";
import { ReactComponent as NoisePattern } from "./assets/noisePattern.svg";

//logos
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
import { ReactComponent as Chromatic } from "../../icons/logos/Chromatic.svg";
import { ReactComponent as Slack } from "../../icons/logos/Slack.svg";
import { ReactComponent as Trello } from "../../icons/logos/Trello.svg";
import { ReactComponent as Express } from "../../icons/logos/Express.svg";
import { ReactComponent as Docker } from "../../icons/logos/Docker.svg";
import { ReactComponent as Jira } from "../../icons/logos/Jira.svg";
import { ReactComponent as Socket } from "../../icons/logos/Socket.svg";
import { ReactComponent as StyledComponents } from "../../icons/logos/StyledComponents.svg";
import { ReactComponent as Vitejs } from "../../icons/logos/Vitejs.svg";

export default function WhyUsPage() {
    return (
        <div
            style={{
                marginBottom: "50px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "20px",
                position: "relative",
                zIndex: "0"
            }}
        >
            <WrapperHeader>
                <NoisePatternComponent
                    as={NoisePattern}
                ></NoisePatternComponent>
                <SolidObjectComponent
                    className="WTF"
                    as={SolidObject}
                ></SolidObjectComponent>
                <Header
                    moleculeVariant="secondary"
                    headingTitle="What Defines Our Team?"
                    textTitle={[
                        "The skills that took us to the next level.",
                        "From clean code to scalable architecture."
                    ]}
                />
            </WrapperHeader>

            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    textAlign: "center",
                    margin: "20px"
                }}
            >
                <Gradient variant="primary">
                    <Heading variant="secondary" asTag="h1">
                        Why Us
                    </Heading>
                </Gradient>
                <Heading variant="primary" asTag="h3">
                    We focus on what matters most: delivering value for our
                    clients
                </Heading>
            </div>

            <div
                style={{
                    width: "90%",
                    display: "flex",
                    flexDirection: "row",
                    flexWrap: "wrap",
                    justifyContent: "center",
                    gap: "20px",
                    margin: "20px"
                }}
            >
                <StyledCardTeaser
                    title="Frontend"
                    checks={[
                        "Our biggest strength!",
                        "JS, HTML, CSS, and more.",
                        "Typescript friendly.",
                        <div key={1}>
                            <div
                                style={{
                                    display: "flex",
                                    gap: "10px",
                                    marginBottom: "10px"
                                }}
                            >
                                <Icon svg={HTML5} />
                                <Icon svg={CSS3} />
                                <Icon svg={TypeScriptSVG} />
                            </div>
                            <div style={{ display: "flex", gap: "10px" }}>
                                <Icon svg={ReactSVG} />
                                <Icon svg={Vue} />
                                <Icon svg={StyledComponents} />
                            </div>
                        </div>
                    ]}
                    cardImageSrc={Application}
                />

                <StyledCardTeaser
                    title="Design"
                    checks={[
                        "Tailor-made components just like you envision",
                        <div key={1} style={{ display: "flex", gap: "10px" }}>
                            <Icon svg={Figma} />
                            <Icon svg={StorybookSVG} />
                        </div>
                    ]}
                    cardImageSrc={Layered}
                />

                <StyledCardTeaser
                    title="Backend"
                    checks={[
                        "Experience from monolithic to serverless",
                        "Client-side or Server-side? your choice",
                        <div key={1} style={{ display: "flex", gap: "10px" }}>
                            <Icon svg={Socket} />
                            <Icon svg={Docker} />
                            <Icon svg={NodeJS} />
                            <Icon svg={Express} />
                        </div>
                    ]}
                    cardImageSrc={Documentation}
                />

                <StyledCardTeaser
                    title="Configs"
                    checks={[
                        "Working under the same linting rules is crucial",
                        <div key={1}>
                            <div
                                style={{
                                    display: "flex",
                                    gap: "10px",
                                    marginBottom: "10px"
                                }}
                            >
                                <Icon svg={Git} />
                                <Icon svg={Webpack} />
                                <Icon svg={Vitejs} />
                                <Icon svg={Babel} />
                            </div>
                            <div
                                style={{
                                    display: "flex",
                                    gap: "10px",
                                    marginBottom: "10px"
                                }}
                            >
                                <Icon svg={NPMSVG} />
                                <Icon svg={YarnSVG} />
                                <Icon svg={VSCode} />
                                <Icon svg={EditorConfig} />
                            </div>
                            <div
                                style={{
                                    display: "flex",
                                    gap: "10px"
                                }}
                            >
                                <Icon svg={ESLint} />
                                <Icon svg={PrettierSVG} />
                            </div>
                        </div>
                    ]}
                    cardImageSrc={Tools}
                />

                <StyledCardTeaser
                    title="Tests"
                    checks={[
                        "UI Visual testing together with Storybook addons",
                        "Unit tests are very handy when working with big teams",
                        <div key={1} style={{ display: "flex", gap: "10px" }}>
                            <Icon svg={Chromatic} />
                            <Icon svg={Jest} />
                            <Icon svg={Cypress} />
                        </div>
                    ]}
                    cardImageSrc={Search}
                />

                <StyledCardTeaser
                    title="DevOps"
                    checks={[
                        "IAS is everywhere, tell us your favorite",
                        <div key={1} style={{ display: "flex", gap: "10px" }}>
                            <Icon svg={AWS} />
                            <Icon svg={Firebase} />
                        </div>
                    ]}
                    cardImageSrc={Settings}
                />

                <StyledCardTeaser
                    title="Database"
                    checks={[
                        "Relational or non-relational, the decision comes from the need",
                        <div key={1}>
                            <div
                                style={{
                                    display: "flex",
                                    gap: "10px",
                                    marginBottom: "10px"
                                }}
                            >
                                <Icon svg={MySQL} />
                                <Icon svg={PostgreSQL} />
                                <Icon svg={GraphQL} />
                            </div>
                            <div style={{ display: "flex", gap: "10px" }}>
                                <Icon svg={MongoDB} />
                                <Icon svg={FirebaseDB} />
                            </div>
                        </div>
                    ]}
                    cardImageSrc={ServerBased}
                />
                <StyledCardTeaser
                    title="Soft Skills"
                    checks={[
                        "Availability is our main concern",
                        "Flexible to your timezone",
                        "We never walk alone",
                        <div key={1} style={{ display: "flex", gap: "10px" }}>
                            <Icon svg={Slack} />
                        </div>
                    ]}
                    cardImageSrc={Dialog}
                />

                <StyledCardTeaser
                    title="Technical Skills"
                    checks={[
                        "Agile, Scrum & Kanban",
                        <div key={1} style={{ display: "flex", gap: "10px" }}>
                            <Icon svg={Javascript} />
                            <Icon svg={Postman} />
                            <Icon svg={Trello} />
                            <Icon svg={Jira} />
                        </div>
                    ]}
                    cardImageSrc={InformationData}
                />
            </div>

            <StyledCardSimpleRender
                title="What makes us different?"
                description="Our 15 years of experience combined in all environments of development grants us the ability to not only be professional at what we do, but also excel on other things that are important, such as:"
            >
                <div
                    style={{ alignSelf: "center", margin: "0 20px 20px 20px" }}
                >
                    <Text variant="primary-bold">
                        - Clean, maintainable code
                    </Text>
                    <Text variant="primary-bold">- Scalable architecture</Text>
                    <Text variant="primary-bold">- Clear communication</Text>
                    <Text variant="primary-bold">
                        - Agile and collaborative workflows
                    </Text>
                    <Text variant="primary-bold">
                        - Focus on business impact, not just features
                    </Text>
                </div>
            </StyledCardSimpleRender>
            <div style={{ margin: "20px 20px 10px 20px" }}>
                <CardBanner
                    title="Let's connect and create something amazing!"
                    description="Reach out to us for collaborations, inquiries, and more."
                    buttonText="Contact us"
                    buttonClick={() => console.log("Button clicked!")}
                    icon={Sample}
                />
            </div>
        </div>
    );
}
