import HomePost from "../components/HomePost"
import AnimationWrapper from "../common/page-animation"


const Home = () => {
  return (
    <AnimationWrapper>
    <div className="px-8 md:px-[200px]">
      <HomePost/>
      <HomePost/>
      <HomePost/>
      <HomePost/>
    </div>
  </AnimationWrapper>
  )
}

export default Home
