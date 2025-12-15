import React from "react";
import {
    BreakerTape,
    CardSimpleRender,
    CardBanner,
    Header
} from "@manamerge/mana-atomic-ui";

//! WIP Assets Header for now, this ones.
//!In the future we will have specific ones for this page and will belong to theTeamPage assets folder
import { ReactComponent as iconDot } from "./../../icons/iconDot.svg";
import { ReactComponent as iconLeft } from "./../../icons/iconLeft.svg";
import { ReactComponent as iconRight } from "./../../icons/iconRight.svg";
import { ReactComponent as iconTop } from "./../../icons/iconTop.svg";
// Assets breaker tape and cards
import { ReactComponent as Sample } from "./assets/sample.svg";

export default function TheTeamPage() {
    return (
        <div>
            <Header
                buttonLeftClick={() => {}}
                buttonLeftText="Let's talk"
                buttonRightClick={() => {}}
                buttonRightText="Contact us"
                headingTitle="Meet The Team"
                iconDot={iconDot}
                iconLeft={iconLeft}
                iconRight={iconRight}
                iconTop={iconTop}
                textBanner="available to offer services"
                textTitle={[
                    "We are a team of Software Engineers",
                    "here you can meet us"
                ]}
            />
            {/* TO-DO PhotoAlbum component Ticket-138*/}
            {/* TO-DO ExperienceTable component Ticket-102 */}
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
    );
}
