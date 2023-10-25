export type YoutubeEmbeddedLinkProps = {
  url: string,
}

export default function YoutubeEmbeddedLink({
  url,
}: YoutubeEmbeddedLinkProps) {
  return (
    <iframe
      className="w-full h-full"
      src={url}
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowfullscreen
    ></iframe>
  )
}
