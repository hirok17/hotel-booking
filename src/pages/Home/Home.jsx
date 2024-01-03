import Categories from "../../components/Rooms/Categories/Categories"
import Rooms from "../../components/Rooms/Rooms"
import Container from "../../components/Shared/Container"


const Home = () => {
  return (
    <div>
      <Container>
        <Categories></Categories>
       <Rooms></Rooms>
      </Container>
      
    </div>
  )
}

export default Home
