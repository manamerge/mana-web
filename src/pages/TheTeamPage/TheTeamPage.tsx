import React from "react";
import {
    BreakerTape,
    CardSimpleRender,
    CardBanner,
    Header,
    Pint3,
    Heading,
    Gradient
} from "@manamerge/mana-atomic-ui";
// Assets breaker tape and cards
import { ReactComponent as Star } from "./assets/Star.svg";
import ProfessionalExperiences from "./components/ProfessionalExperiences";
import SimpleMapPin from "../../pages/LetsTalkPage/SimpleMap/SimpleMapPin";
import { useNavigate } from "react-router-dom";
import { AnimatedBG, BottomCurve } from "./TheTeamPage.css";
export default function TheTeamPage() {
    const navigate = useNavigate();

    return (
        <div>
            <AnimatedBG>
                <Header
                    moleculeVariant="secondary"
                    textTitle={[
                        "Two engineers. One shared vision.",
                        "We design, build and scale digital products with purpose."
                    ]}
                    headingTitle="Meet The Team"
                    withOverlay
                    imageURLBackground="https://static.vecteezy.com/system/resources/thumbnails/056/635/668/small_2x/black-office-with-computer-desk-and-plants-photo.jpeg"
                />

                {/*// ? ASAP WIP - CARD-176 */}
                {/* <div
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
                </div> */}
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        margin: "40px 0"
                    }}
                >
                    <Gradient variant="primary">
                        <Heading variant="secondary" asTag="h3">
                            OUR EXPERIENCES
                        </Heading>
                    </Gradient>
                    <Heading variant="primary" asTag="h1">
                        Where We've Been Employed
                    </Heading>
                </div>
                <div>
                    <ProfessionalExperiences />
                </div>
                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        position: "relative"
                    }}
                >
                    <BottomCurve />
                </div>
                <div
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        gap: "20px",
                        flexWrap: "wrap",
                        justifyContent: "center",
                        marginTop: "125px",
                        padding: "0 25px"
                    }}
                >
                    <Pint3
                        cards={[
                            <div
                                style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    margin: "40px 0"
                                }}
                                key={
                                    crypto.getRandomValues(
                                        new Uint32Array(1)
                                    )[0]
                                }
                            >
                                <Gradient variant="primary">
                                    <Heading variant="secondary" asTag="h3">
                                        BEYOND PORTFOLIO
                                    </Heading>
                                </Gradient>
                                <Heading variant="primary" asTag="h1">
                                    Here, know more about us
                                </Heading>
                            </div>,

                            <CardSimpleRender
                                gradientPosition="top left"
                                key={
                                    crypto.getRandomValues(
                                        new Uint32Array(1)
                                    )[0]
                                }
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
                                gradientPosition="top left"
                                key={
                                    crypto.getRandomValues(
                                        new Uint32Array(1)
                                    )[0]
                                }
                                icon={Star}
                                title="Sports & Well-being"
                                description="Physical activity as a way to maintain focus, discipline and long-term consistency."
                            >
                                <div style={{ alignSelf: "center" }}>
                                    whatever children
                                </div>
                            </CardSimpleRender>,
                            <CardSimpleRender
                                gradientPosition="top left"
                                key={
                                    crypto.getRandomValues(
                                        new Uint32Array(1)
                                    )[0]
                                }
                                icon={Star}
                                title="Travel & Cultures"
                                description="International experiences that foster adaptability, communication skills and global mindset."
                            >
                                <div style={{ alignSelf: "center" }}>
                                    whatever children
                                </div>
                            </CardSimpleRender>,
                            <CardSimpleRender
                                gradientPosition="top left"
                                key={
                                    crypto.getRandomValues(
                                        new Uint32Array(1)
                                    )[0]
                                }
                                icon={Star}
                                title="Learning & Curiosity"
                                description="Constant pursuit of knowledge, from technical deep-dives to product strategy and emerging technologies."
                            >
                                <div style={{ alignSelf: "center" }}>
                                    whatever children
                                </div>
                            </CardSimpleRender>,
                            <CardSimpleRender
                                gradientPosition="top left"
                                key={
                                    crypto.getRandomValues(
                                        new Uint32Array(1)
                                    )[0]
                                }
                                icon={Star}
                                title="Learning & Curiosity"
                                description="Constant pursuit of knowledge, from technical deep-dives to product strategy and emerging technologies."
                            >
                                <div style={{ alignSelf: "center" }}>
                                    whatever children
                                </div>
                            </CardSimpleRender>,
                            <CardSimpleRender
                                gradientPosition="top left"
                                key={
                                    crypto.getRandomValues(
                                        new Uint32Array(1)
                                    )[0]
                                }
                                icon={Star}
                                title="Learning & Curiosity"
                                description="Constant pursuit of knowledge, from technical deep-dives to product strategy and emerging technologies."
                            >
                                <div style={{ alignSelf: "center" }}>
                                    whatever children
                                </div>
                            </CardSimpleRender>,
                            <CardSimpleRender
                                gradientPosition="top left"
                                key={
                                    crypto.getRandomValues(
                                        new Uint32Array(1)
                                    )[0]
                                }
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
                        padding: "80px 0px 60px",
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
            </AnimatedBG>
        </div>
    );
}
