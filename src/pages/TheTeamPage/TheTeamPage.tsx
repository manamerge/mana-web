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
import SimpleMapPin from "../../pages/LetsTalkPage/SimpleMap/SimpleMapPin";

export default function TheTeamPage() {
    return (
        <div style={{ background: "#121212" }}>
            <Header
                moleculeVariant="secondary"
                textTitle={[
                    "Two engineers. One shared vision.",
                    "We design, build and scale digital products with purpose."
                ]}
                headingTitle="Meet The Team"
                withOverlay
                imageURLBackground="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y29sbGFib3JhdGlvbnN8ZW58MHx8MHx8fDA%3D&w=1000&q=80"
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
                <CardSimpleRender>
                    <div
                        style={{
                            justifySelf: "center",
                            width: "100%"
                        }}
                    >
                        <SimpleMapPin
                            lat={45.811}
                            lng={15.98}
                            zoom={15}
                            height="300px"
                        />
                    </div>
                </CardSimpleRender>
                <CardSimpleRender
                    icon={Sample}
                    title="Sports & Well-being"
                    description="Physical activity as a way to maintain focus, discipline and long-term consistency."
                >
                    <div style={{ alignSelf: "center" }}>whatever children</div>
                </CardSimpleRender>
                <CardSimpleRender
                    icon={Sample}
                    title="Travel & Cultures"
                    description="International experiences that foster adaptability, communication skills and global mindset."
                >
                    <div style={{ alignSelf: "center" }}>whatever children</div>
                </CardSimpleRender>
                <CardSimpleRender
                    icon={Sample}
                    title="Learning & Curiosity"
                    description="Constant pursuit of knowledge, from technical deep-dives to product strategy and emerging technologies."
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
