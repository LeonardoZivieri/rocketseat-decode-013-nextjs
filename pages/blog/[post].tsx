import { GetStaticPaths, GetStaticProps } from "next";

interface BlobPostProps {
    post: {
        title: string,
        content: string
    },
    renderedAt: string
}

export default function BlobPost({ post, renderedAt }: BlobPostProps) {
    return (
        <>
            <h1>{post.title}</h1>
            <p>{post.content}</p>
            <small>Rendered at: {renderedAt}</small>
        </>
    )
}

export const getStaticPaths: GetStaticPaths = async () => {
    return {
        paths: [],
        fallback: "blocking",
    }
}

export const getStaticProps: GetStaticProps<BlobPostProps, { post: string }> = async ({ params }) => {
    return {
        props: {
            post: {
                title: params.post as string,
                content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto magnam quod pariatur nisi. Pariatur, voluptatem suscipit libero et eum doloremque dolor itaque porro numquam recusandae nam inventore similique, amet maxime?"
            },
            renderedAt: new Date().toJSON()
        },
        revalidate: 5,
    }
}
