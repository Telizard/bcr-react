import { Container, Card, Button } from "react-bootstrap";
import axios from "axios";
import { Await } from "react-router-dom";

const data = {
  page: 1,
  pageSize: 10,
  pageCount: 100,
  count: 1000,
  cars: [
    {
      id: 1,
      name: "Toyota Avanza",
      category: "medium",
      price: 100000,
      status: false,
      start_rent_at: "2022-01-01",
      finish_rent_at: "2022-01-02",
      image: "https://upload.wikimedia.org/wikipedia/commons/0/0d/2019_Toyota_Avanza_1.3_G_F653RM_%2820200228%29.jpg",
      createdAt: "2023-05-17T03:00:26.766Z",
      updateAt: "2023-05-17T03:00:26.766Z",
    },
    {
      id: 2,
      name: "Toyota Avanza",
      category: "medium",
      price: 100000,
      status: false,
      start_rent_at: "2022-01-01",
      finish_rent_at: "2022-01-02",
      image: "https://upload.wikimedia.org/wikipedia/commons/0/0d/2019_Toyota_Avanza_1.3_G_F653RM_%2820200228%29.jpg",
      createdAt: "2023-05-17T03:00:26.766Z",
      updateAt: "2023-05-17T03:00:26.766Z",
    },
  ],
};

const Result = () => {
  const fetchCarData = async () => {
    const response = await axios.get("https://bootcamp-rent-cars.herokuapp.com/customer/v2/car?name=Innova&page=1&pageSize=10/customer/v2/car");
  };

  return (
    <Container className="pt-5">
      <h3>Hasil Pencarian</h3>
      {data.cars.map((car) => {
        return (
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={car.image} />
            <Card.Body>
              <Card.Title>
                {car.name} {car.id}
              </Card.Title>
              <Card.Text>{car.price}/hari</Card.Text>
              <Card.Text>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur ex minima in, veritatis labore beatae animi quas dolore quia id accusantium, suscipit magnam, tempora velit dolores dolorum iusto recusandae. Dolore?
              </Card.Text>
            </Card.Body>
            <Button variant="success">Pilih Mobil</Button>{" "}
          </Card>
        );
      })}
    </Container>
  );
};

export default Result;
