import CardSection from '@/app/(main)/components/CardSection'

const Home = async () => {
  return (
    <div className="flex flex-col items-center dark:bg-black">
      <h1 className="my-12 text-4xl font-extrabold dark:text-white">Menu</h1>
      <CardSection />
    </div>
  )
}

export default Home
