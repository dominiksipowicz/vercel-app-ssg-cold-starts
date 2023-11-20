const SSGPage = ({ params }) => {
  console.log('SSGPage is rendered')

  return <div>SSG: {params.slug}</div>
}

export const generateStaticParams = () => Array.from({ length: 100 }, (_, i) => ({ slug: `${i}` }))

export const dynamic = 'error'
export const dynamicParams = false

export default SSGPage
