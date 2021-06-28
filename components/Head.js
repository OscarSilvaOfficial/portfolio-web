import Head from 'next/head'

function HeadPage({title, iconSrc}) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <link rel="shortcut icon" href={iconSrc} />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
    </div>
  )
}

export default HeadPage