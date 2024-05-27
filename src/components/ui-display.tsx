"use client"; // this is due to the model only
import Button from "./ui/buttons";
import HeaderText from "./ui/header-text";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import BodyText from "./ui/body-text";
import UnderlineText from "./ui/underline-text";
import LinkText from "./ui/link-text";
import Tooltip from "./ui/tooltip";
import Modal from "./ui/model";
import { useState } from "react";
export default function UiDisplay() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div>
      <HeaderText text="Welcome to My Website" level="h1" />
      <HeaderText text="Buttons" level="h2" />
      <div className="w-full flex justify-evenly">
        <Button size="sm">Small Button</Button>
        <Button size="md">Medium Button</Button>
        <Button size="lg">Large Button</Button>
      </div>

      <HeaderText text="Button Variants" level="h2" />
      <div className="w-full flex justify-evenly">
        <Button variant="solid">Solid Button</Button>
        <Button variant="outlined">Outlined Button</Button>
        <Button variant="ghost">Ghost Button</Button>
      </div>

      <HeaderText text="Button Variants and Sizes" level="h2" />
      <div className="w-full flex justify-evenly">
        <Button size="sm" variant="solid">
          Small Solid Button
        </Button>
        <Button size="md" variant="outlined">
          Medium Outlined Button
        </Button>
        <Button size="lg" variant="ghost">
          Large Ghost Button
        </Button>
      </div>
      <HeaderText text="Icons Sizes" level="h2" />
      <div className="w-full flex justify-evenly">
        <Button icon={<FaFacebookF />}>Facebook</Button>
        <Button icon={<FaTwitter />} variant="outlined">
          Twitter
        </Button>
        <Button icon={<FaInstagram />} size="lg">
          Instagram
        </Button>
        <Button icon={<FaLinkedinIn />}>LinkedIn</Button>
      </div>

      <div>
        <BodyText>
          Lorem ipsum, dolor sit amet <UnderlineText>consectetur</UnderlineText>{" "}
          adipisicing elit. Quam fugiat fuga, ex provident rem eveniet deserunt.
          Velit voluptates, tempore illum ipsum, minima harum dolorum ipsam
          officiis, molestias corporis id natus?
        </BodyText>
        <BodyText>
          Lorem ipsum, dolor sit amet{" "}
          <LinkText href="/blog">consectetur</LinkText> adipisicing elit. Quam
          fugiat fuga, ex provident rem eveniet deserunt. Velit voluptates,
          tempore illum ipsum, minima harum dolorum ipsam officiis, molestias
          corporis id natus?
        </BodyText>
      </div>
      <HeaderText text="Tooltips" level="h2" />
      <div className="w-full flex justify-evenly my-12">
        <Tooltip
          direction="down"
          content="This is a tooltip thats pointing down"
        >
          <Button icon={<FaFacebookF />}>Facebook</Button>
        </Tooltip>

        <Tooltip direction="up" content="This is a tooltip thats pointing up">
          <Button icon={<FaTwitter />} variant="outlined">
            Twitter
          </Button>
        </Tooltip>
        <Tooltip
          direction="left"
          content="This is a tooltip thats pointing left"
        >
          <Button icon={<FaInstagram />} size="lg">
            Instagram
          </Button>
        </Tooltip>
        <Tooltip
          direction="right"
          content="This is a tooltip thats pointing right"
        >
          <Button icon={<FaLinkedinIn />}>LinkedIn</Button>
        </Tooltip>
      </div>
      <Button onClick={handleOpenModal}>Open Modal</Button>
      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        buttonText="Save Changes"
        buttonType="solid"
      >
        <h2>Modal Title</h2>
        <p>Modal content goes here.</p>
      </Modal>
    </div>
  );
}
