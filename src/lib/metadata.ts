import { Metadata } from "next";

export function constructMetadata({
    title = "Enos Nsamba Jr – Full Stack Software Engineer & Creative Developer",
    description = "I’m Enos Nsamba Jr., a Full Stack Software Engineer passionate about creating engaging applications. Skilled in JavaScript, React Native, Node.js, and design, I craft modern, innovative, and user-friendly experiences. Currently exploring 3D and VR development with Three.js, aiming to push the boundaries of creativity in technology.",
    image = "/portfolio-thumbnail.png", 
    icons = "/favicon.ico", 
    noIndex = false, 
}: {
    title?: string;
    description?: string;
    image?: string;
    icons?: string;
    noIndex?: boolean;
} = {}): Metadata {
    return {
        title,
        description,
        openGraph: {
            title,
            description,
            images: [
                {
                    url: image,
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            title,
            description,
            images: [image],
            creator: "@enosintech", // Your Twitter handle
        },
        icons,
        metadataBase: new URL("https://enosnsambajr.dev"), // Replace with your portfolio's domain
        ...(noIndex && {
            robots: {
                index: false,
                follow: false,
            },
        }),
    };
}