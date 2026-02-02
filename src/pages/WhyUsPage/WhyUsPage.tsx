import React from "react";
import {
    Header,
    CardTeaser,
    CardSimpleRender,
    CardBanner,
    Heading,
    Text
} from "@manamerge/mana-atomic-ui";
import { ReactComponent as iconTop } from "../../icons/iconTop.svg";
import { ReactComponent as iconDot } from "../../icons/iconDot.svg";
import { ReactComponent as iconLeft } from "../../icons/iconLeft.svg";
import { ReactComponent as iconRight } from "../../icons/iconRight.svg";
import { ReactComponent as Sample } from "./assets/sample.svg";
import sampleImage from "./assets/sampleImg.png";

export default function WhyUsPage() {
    return (
        <div
            style={{
                marginTop: "50px",
                marginBottom: "50px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "20px"
            }}
        >
            <Header
                moleculeVariant="secondary"
                headingTitle="Welcome to ManaMerge"
                textTitle={[
                    "We are a team of Software Engineers",
                    "Our interest goes to all developing environments"
                ]}
            />
            <Heading>Why Us</Heading>
            <Text>
                ManaMerge is a team of passionate software engineers dedicated
                to creating innovative solutions for all developing
                environments. We excel in delivering high-quality software that
                meets the unique needs of our clients. Our team is committed to
                staying at the forefront of technology, ensuring that we provide
                cutting-edge solutions that drive success and growth for
                businesses of all sizes.
            </Text>
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
            <CardSimpleRender
                icon={Sample}
                title="Card Title"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            >
                <div style={{ alignSelf: "center" }}>whatever children</div>
            </CardSimpleRender>
            <CardBanner
                title="Let's connect and create something amazing!"
                description="Reach out to us for collaborations, inquiries, and more."
                buttonText="Contact us"
                buttonClick={() => console.log("Button clicked!")}
                icon={Sample}
            />
        </div>
    );
}
