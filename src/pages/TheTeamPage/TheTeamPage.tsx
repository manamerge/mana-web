import React from "react";
import {
    BreakerTape,
    CardSimpleRender,
    CardBanner,
    Header
} from "@manamerge/mana-atomic-ui";
import "./TheTeamPage.css";
// Assets breaker tape and cards
import { ReactComponent as Sample } from "./assets/sample.svg";
import ProfessionalExperiences from "./components/ProfessionalExperiences";

export default function TheTeamPage() {
    return (
        <div style={{ background: "#121212" }}>
            <Header
                textTitle={[
                    "We are a team of Software Engineers",
                    "here you can meet us"
                ]}
            />
            <div>
                <ProfessionalExperiences />
            </div>
            <div
                style={{
                    height: "150px",
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
                            "Hello",
                            "World",
                            "This",
                            "Component",
                            "Amazing",
                            "Tests"
                        ]}
                        svg={Sample}
                    />
                </div>
            </div>
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
                    <div style={{ alignSelf: "center" }}>whatever children</div>
                </CardSimpleRender>
                <CardSimpleRender
                    icon={Sample}
                    title="Card Title"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                >
                    <div style={{ alignSelf: "center" }}>whatever children</div>
                </CardSimpleRender>
                <CardSimpleRender
                    icon={Sample}
                    title="Card Title"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                >
                    <div style={{ alignSelf: "center" }}>whatever children</div>
                </CardSimpleRender>
                <CardSimpleRender
                    icon={Sample}
                    title="Card Title"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                >
                    <div style={{ alignSelf: "center" }}>whatever children</div>
                </CardSimpleRender>
            </div>
            <div
                style={{
                    padding: "40px 0px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "20px"
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
    );
}
