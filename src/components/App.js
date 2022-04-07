import React from "react";
import { Toaster } from "react-hot-toast";
import Home from "../pages/home";
import Particles from "react-tsparticles";

export default function App() {

  return (
    <>
    <Particles
    options={{

        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: "#ffffff",
          },

          collisions: {
            enable: true,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: false,
            speed: 1,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 80,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 0.5, max: 1 },
          },
        },
        detectRetina: true,
      }}
    />
      <Toaster position="top-right" reverseOrder={false} />
      <Home />
    </>
  );
}
