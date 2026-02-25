import React from "react";
import {
    CardSimpleRender,
    CardBanner,
    Header,
    Pint3,
    Heading,
    Gradient,
    Text
} from "@manamerge/mana-atomic-ui";
import ProfessionalExperiences from "./components/ProfessionalExperiences";
import SimpleMapPin from "../../pages/LetsTalkPage/SimpleMap/SimpleMapPin";
import { useNavigate } from "react-router-dom";
import {
    AnimatedBG,
    BottomCurve,
    AlteredCardSimpleRender,
    CardSimpleRenderWrapper,
    Avatar,
    WrapperLineTop
} from "./TheTeamPage.css";
// Assets
import DavidAvatar from "./assets/DavidAvatar.png";
import AlexisAvatar from "./assets/AlexisAvatar.png";
import Book from "./assets/karama.png";
import { ReactComponent as NoisePattern } from "./assets/noisePattern.svg";
import { ReactComponent as Www } from "./assets/g911.svg";
import { ReactComponent as Hashtag } from "./assets/hashtag.svg";
import { ReactComponent as Matricula } from "./assets/matricula.svg";
import { ReactComponent as Star } from "./assets/Star.svg";

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
                        minHeight="400px"
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
                            <div
                                key={
                                    crypto.getRandomValues(
                                        new Uint32Array(1)
                                    )[0]
                                }
                                style={{
                                    outline: "2px solid #a9e69440",
                                    width: "100%",
                                    borderRadius: "20px"
                                }}
                            >
                                <SimpleMapPin
                                    lat={45.811}
                                    lng={15.98}
                                    zoom={15}
                                    height="100%"
                                />
                            </div>,
                            <CardSimpleRender
                                gradientPosition="top left"
                                key={
                                    crypto.getRandomValues(
                                        new Uint32Array(1)
                                    )[0]
                                }
                                icon={Star}
                                title="Global Perspective"
                                description="Thinking beyond borders. Collaborating, learning and adapting across cultures and ideas."
                            >
                                <div
                                    style={{
                                        position: "relative",
                                        zIndex: "-1"
                                    }}
                                >
                                    <Www
                                        style={{
                                            width: "280px",
                                            height: "285px",
                                            bottom: "-29px",
                                            left: "155px",
                                            position: "absolute",
                                            filter: "opacity(0.5)"
                                        }}
                                    />
                                </div>
                            </CardSimpleRender>,
                            <CardSimpleRenderWrapper
                                key={
                                    crypto.getRandomValues(
                                        new Uint32Array(1)
                                    )[0]
                                }
                            >
                                <AlteredCardSimpleRender
                                    gradientPosition="top left"
                                    backgroundSvg={NoisePattern}
                                >
                                    <div
                                        style={{ padding: "20px 20px 0 20px" }}
                                    >
                                        <div
                                            style={{
                                                display: "flex",
                                                alignItems: "center",
                                                flexWrap: "wrap",
                                                gap: "0 5px"
                                            }}
                                        >
                                            <Text
                                                variant="primary-regular"
                                                vFontSize="md"
                                            >
                                                The team that
                                            </Text>
                                            <Text variant="primary-bold">
                                                got your back 🤩 🚀
                                            </Text>
                                        </div>
                                        <Avatar
                                            src={DavidAvatar}
                                            alt={`Colaborador 1`}
                                            key="1"
                                            height="50px"
                                            width="37px"
                                        />
                                        <Avatar
                                            src={AlexisAvatar}
                                            alt={`Colaborador 2`}
                                            key="2"
                                            height="50px"
                                            width="45px"
                                        />
                                    </div>
                                </AlteredCardSimpleRender>
                            </CardSimpleRenderWrapper>,
                            <CardSimpleRender
                                gradientPosition="top left"
                                key={
                                    crypto.getRandomValues(
                                        new Uint32Array(1)
                                    )[0]
                                }
                                icon={Star}
                                title="Currently reading"
                                description="Classical literature"
                            >
                                <div style={{ alignSelf: "center" }}>
                                    <img
                                        src={Book}
                                        alt="karamazov"
                                        style={{
                                            width: "180px"
                                        }}
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
                                icon={Hashtag}
                                title="together"
                            >
                                <div
                                    style={{
                                        zIndex: "-1",
                                        display: "flex",
                                        alignSelf: "center",
                                        justifyContent: "center",
                                        marginBottom: "20px"
                                    }}
                                >
                                    <Matricula filter="brightness(.8)" />
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
                                title="Our persona"
                                // description="Constant pursuit of knowledge, from technical deep-dives to product strategy and emerging technologies."
                            >
                                <div
                                    style={{
                                        position: "relative",
                                        overflow: "hidden",
                                        whiteSpace: "nowrap",
                                        width: "100%",
                                        height: "100%"
                                    }}
                                >
                                    <WrapperLineTop
                                        rotation="-20"
                                        bottom="65%"
                                        right="60%"
                                    >
                                        <Text
                                            variant="primary-regular"
                                            vColor="#101010"
                                        >
                                            Board-gamers ♟️
                                        </Text>
                                    </WrapperLineTop>
                                    <WrapperLineTop
                                        rotation="20"
                                        bottom="62%"
                                        right="10px"
                                        width="170px"
                                        left="50%"
                                    >
                                        <Text
                                            variant="primary-regular"
                                            vColor="#101010"
                                        >
                                            Cliff-jump-seekers 🏖️
                                        </Text>
                                    </WrapperLineTop>
                                    <WrapperLineTop
                                        rotation="-5"
                                        bottom="12%"
                                        right="7%"
                                        // bottom="60%"
                                        width="170px"
                                        // left="50%"
                                    >
                                        <Text
                                            variant="primary-regular"
                                            vColor="#101010"
                                        >
                                            Cultural-travelers ✈️
                                        </Text>
                                    </WrapperLineTop>
                                    <WrapperLineTop
                                        rotation="10"
                                        bottom="31%"
                                        right="-10%"
                                        width="150px"
                                        left="50%"
                                    >
                                        <Text
                                            variant="primary-regular"
                                            vColor="#101010"
                                        >
                                            Caffeine-peers ☕
                                        </Text>
                                    </WrapperLineTop>
                                    <WrapperLineTop
                                        rotation="-7"
                                        bottom="45%"
                                        right="40%"
                                    >
                                        <Text
                                            variant="primary-regular"
                                            vColor="#101010"
                                        >
                                            Tennis-players 🎾
                                        </Text>
                                    </WrapperLineTop>
                                    <WrapperLineTop
                                        rotation="15"
                                        bottom="10%"
                                        right="36%"
                                    >
                                        <Text
                                            variant="primary-regular"
                                            vColor="#101010"
                                        >
                                            Cryptography-enthusiasts 🔐
                                        </Text>
                                    </WrapperLineTop>
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
