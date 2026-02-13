import React from "react";
import {
    BreakerTape,
    CardSimpleRender,
    CardBanner,
    Header,
    Pint3
} from "@manamerge/mana-atomic-ui";
// Assets breaker tape and cards
import { ReactComponent as Star } from "./assets/Star.svg";
import ProfessionalExperiences from "./components/ProfessionalExperiences";
import SimpleMapPin from "../../pages/LetsTalkPage/SimpleMap/SimpleMapPin";
import { useNavigate } from "react-router-dom";

export default function TheTeamPage() {
    const navigate = useNavigate();

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
                        svg={Star}
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
                <Pint3
                    cards={[
                        <CardSimpleRender
                            key={crypto.getRandomValues(new Uint32Array(1))[0]}
                        >
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
                        </CardSimpleRender>,
                        <CardSimpleRender
                            key={crypto.getRandomValues(new Uint32Array(1))[0]}
                            icon={Star}
                            title="Sports & Well-being"
                            description="Physical activity as a way to maintain focus, discipline and long-term consistency."
                        >
                            <div style={{ alignSelf: "center" }}>
                                whatever children
                            </div>
                        </CardSimpleRender>,
                        <CardSimpleRender
                            key={crypto.getRandomValues(new Uint32Array(1))[0]}
                            icon={Star}
                            title="Travel & Cultures"
                            description="International experiences that foster adaptability, communication skills and global mindset."
                        >
                            <div style={{ alignSelf: "center" }}>
                                whatever children
                            </div>
                        </CardSimpleRender>,
                        <CardSimpleRender
                            key={crypto.getRandomValues(new Uint32Array(1))[0]}
                            icon={Star}
                            title="Learning & Curiosity"
                            description="Constant pursuit of knowledge, from technical deep-dives to product strategy and emerging technologies."
                        >
                            <div style={{ alignSelf: "center" }}>
                                whatever children
                            </div>
                        </CardSimpleRender>,
                        <CardSimpleRender
                            key={crypto.getRandomValues(new Uint32Array(1))[0]}
                            icon={Star}
                            title="Learning & Curiosity"
                            description="Constant pursuit of knowledge, from technical deep-dives to product strategy and emerging technologies."
                        >
                            <div style={{ alignSelf: "center" }}>
                                whatever children
                            </div>
                        </CardSimpleRender>,
                        <CardSimpleRender
                            key={crypto.getRandomValues(new Uint32Array(1))[0]}
                            icon={Star}
                            title="Learning & Curiosity"
                            description="Constant pursuit of knowledge, from technical deep-dives to product strategy and emerging technologies."
                        >
                            <div style={{ alignSelf: "center" }}>
                                whatever children
                            </div>
                        </CardSimpleRender>,
                        <CardSimpleRender
                            key={crypto.getRandomValues(new Uint32Array(1))[0]}
                            icon={Star}
                            title="Learning & Curiosity"
                            description="Constant pursuit of knowledge, from technical deep-dives to product strategy and emerging technologies."
                        >
                            <div style={{ alignSelf: "center" }}>
                                whatever children
                            </div>
                        </CardSimpleRender>
                    ]}
                ></Pint3>
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
                    buttonClick={() => navigate("/LetsTalk")}
                    icon={Star}
                />
            </div>
        </div>
    );
}
