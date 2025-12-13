import React from "react";
// Components
import {
    BreakerTape,
    CardBanner,
    CardSimpleRender,
    CardTeaser,
    Header,
    Accordion
} from "@manamerge/mana-atomic-ui";

// Assets
import { ReactComponent as iconTop } from "../../icons/iconTop.svg";
import { ReactComponent as iconDot } from "../../icons/iconDot.svg";
import { ReactComponent as iconLeft } from "../../icons/iconLeft.svg";
import { ReactComponent as iconRight } from "../../icons/iconRight.svg";
import { ReactComponent as Sample } from "./assets/sample.svg";
import sampleImage from "./assets/sampleImg.png";

export default function MMPage() {
    return (
        <>
            <div
                style={{
                    marginTop: "50px",
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
                    iconLeft={iconLeft}
                    iconRight={iconRight}
                    iconTop={iconTop}
                    textBanner="available to offer services"
                    textTitle={[
                        "We are a team of Software Engineers",
                        "Our interest goes to all developing environments"
                    ]}
                />

                <CardTeaser
                    company="ManaMerge"
                    year="2025"
                    title="Curating AR experiences while travelling"
                    onClick={() => console.log("Button clicked!")}
                    buttonName="View Case Study"
                    checks={[
                        "Onboarding increased to 12%.",
                        "New users signups increased by 32%.",
                        "Engagement increased by 20%."
                    ]}
                    svg={Sample}
                    cardImageSrc={sampleImage}
                    separator={true}
                />
                <CardTeaser
                    company="ManaMerge"
                    year="2025"
                    title="Curating AR experiences while travelling"
                    onClick={() => console.log("Button clicked!")}
                    buttonName="View Case Study"
                    checks={[
                        "Onboarding increased to 12%.",
                        "New users signups increased by 32%.",
                        "Engagement increased by 20%."
                    ]}
                    svg={Sample}
                    cardImageSrc={sampleImage}
                    separator={true}
                />
                <CardTeaser
                    company="ManaMerge"
                    year="2025"
                    title="Curating AR experiences while travelling"
                    onClick={() => console.log("Button clicked!")}
                    buttonName="View Case Study"
                    checks={[
                        "Onboarding increased to 12%.",
                        "New users signups increased by 32%.",
                        "Engagement increased by 20%."
                    ]}
                    svg={Sample}
                    cardImageSrc={sampleImage}
                    separator={true}
                />
                <div
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
                        title="Card Title"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                    >
                        <div style={{ alignSelf: "center" }}>
                            whatever children
                        </div>
                    </CardSimpleRender>
                    <CardSimpleRender
                        icon={Sample}
                        title="Card Title"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                    >
                        <div style={{ alignSelf: "center" }}>
                            whatever children
                        </div>
                    </CardSimpleRender>
                    <CardSimpleRender
                        icon={Sample}
                        title="Card Title"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                    >
                        <div style={{ alignSelf: "center" }}>
                            whatever children
                        </div>
                    </CardSimpleRender>
                    <CardSimpleRender
                        icon={Sample}
                        title="Card Title"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                    >
                        <div style={{ alignSelf: "center" }}>
                            whatever children
                        </div>
                    </CardSimpleRender>
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
                        content={[
                            {
                                description:
                                    "At the moment, I'm pretty happy where I am. Currently I am not looking for any full-time opportunities. But that being said, I am always open to discuss interesting opportunities, collaborations and other fun stuff. If you’re interested in discussing a project, making something great together, please fill the form above. Simply want to get in touch? Happy to connect on socials.",
                                title: "Are you available to hire full time?"
                            },
                            {
                                description: "something on the second",
                                title: "How do your quote pricing works and when can we get on call?"
                            },
                            {
                                description:
                                    "This is the description of number 3",
                                title: "Can you facelift my design?"
                            }
                        ]}
                        iconMinus={iconLeft}
                        iconPlus={iconRight}
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
