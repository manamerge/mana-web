import React from "react";
// Components
import {
    BreakerTape,
    CardBanner,
    CardSimpleRender,
    CardTeaser,
    Header
} from "@manamerge/mana-atomic-ui";

// Assets
import { ReactComponent as iconTop } from "../../icons/iconTop.svg";
import { ReactComponent as iconDot } from "../../icons/iconDot.svg";
import { ReactComponent as iconLeft } from "../../icons/iconLeft.svg";
import { ReactComponent as iconRight } from "../../icons/iconRight.svg";
import { ReactComponent as Sample } from "./assets/sample.svg";
import sampleImage from "./assets/sampleImg.png";

export default function HomePage() {
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
                <div
                    style={{
                        height: "30px",
                        background: "gold",
                        margin: "120px"
                    }}
                >
                    WIP ***Header*** WIP
                </div>

                {/* <Header
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
            /> */}
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
                        height: "30px",
                        background: "gold",
                        margin: "120px"
                    }}
                >
                    WIP ***DROPDOWN_FAQ*** WIP
                </div>
                <div>
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
