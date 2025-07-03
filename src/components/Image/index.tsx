export const Image: React.FC<MediaProps> = (props) => {
  const {
    alt,
    size,
    src,
    loading,
    media
  } = props

  return (
    <>
      {
        media?.url ?
          <figure className='w-1/2 mx-auto'>
            <img src={media?.url} alt={media.alt} />
            <figcaption className="text-center">{media.alt}</figcaption>
          </figure >
          :
          <p className="py-32 bg-camelot-100 text-center items-center text-camelot-800 w-1/2 mx-auto">
            <span className="font-bold text-xl">Oups 😅</span><br />
            L’image n’est pas là, mais les mots tiennent bon.<br />
            On va arranger ça très vite !
          </p >
      }
    </>
  );
}
