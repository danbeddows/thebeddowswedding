import React from "react";
import PageHeading from "src/components/PageHeading/PageHeading";
import Paragraph from "src/components/Paragraph";
import Section from "src/components/Section";
import { PhotoUploadPage } from "../../../src/styles/pages/photo-upload.styles";
import { GetStaticProps } from "next";
import { prisma } from "../../../src/lib/prisma";
import { Guest, Photo } from "@prisma/client";

export const getServerSideProps: GetStaticProps = async ({ params }) => {
  const hash = params?.hash as string;

  const guest = await prisma.guest.findUnique({
    where: {
      hash: hash,
    },
    include: {
      photos: {
        orderBy: {
          id: "asc",
        },
      },
    },
  });

  if (guest === null) {
    return { notFound: true };
  }

  return {
    props: { guest },
  };
};

type GuestWithPhotos = Guest & {
  photos: Photo[];
};

interface PhotoUploadProps {
  guest: GuestWithPhotos;
}
const PhotoUpload = ({ guest }: PhotoUploadProps) => {
  return (
    <PhotoUploadPage>
      <Section>
        <PageHeading>Upload Photos</PageHeading>
        <Paragraph>
          Thanks for taking the time to upload your photos of our wedding day.
        </Paragraph>
      </Section>
      <Section>UPLOAD</Section>
    </PhotoUploadPage>
  );
};

export default PhotoUpload;
