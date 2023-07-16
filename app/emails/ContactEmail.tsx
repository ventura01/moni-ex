import React from "react";
import {
  Body,
  Html,
  Head,
  Heading,
  Container,
  Text,
  Tailwind,
  Button,
  Img,
} from "@react-email/components";
type Props = { firstName: string; lastName: string };

const MoniEmail = ({ firstName, lastName }: Props) => {
  return (
    <Html>
      <Head />
      <Tailwind>
        <Body className="bg-white font-sans">
          <Container className="mx-auto border rounded-md shadow-xl">
            <Img
              className="mx-auto"
              src="https://flowbite.com/images/logo.svg"
            />
            <Heading className="text-zinc-900">Hola {firstName} {lastName}!</Heading>
            <Text className="text-zinc-500">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae
              excepturi, ipsum facilis veniam eum at dolores repellendus,
              architecto aperiam quis, corporis temporibus laborum reiciendis!
            </Text>
            <Button className="bg-blue-500 rounded-md text-white px-5 py-3">
              Visitar el sitio
            </Button>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default MoniEmail;
